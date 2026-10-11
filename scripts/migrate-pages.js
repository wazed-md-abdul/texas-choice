const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..', '..');
const appDir = path.resolve(__dirname, '..', 'src', 'app');

console.log('Root dir:', rootDir);
console.log('App dir:', appDir);

const files = fs.readdirSync(rootDir).filter(f => f.endsWith('.html') && f !== 'index.html');

console.log(`Found ${files.length} HTML files to migrate.`);

files.forEach(file => {
  const slug = file.replace(/\.html$/, '');
  const htmlPath = path.join(rootDir, file);
  const html = fs.readFileSync(htmlPath, 'utf8');

  // Extract Title
  let title = "Dentist Copperas Cove, TX | Cove Choice Dental";
  const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
  if (titleMatch) {
    title = titleMatch[1].trim().replace(/"/g, '\\"');
  }

  // Extract Description
  let description = "Visit Cove Choice Dental in Copperas Cove, TX for compassionate, high-quality family dental care.";
  const descMatch = html.match(/<meta[^>]*content="([^"]*)"[^>]*name="Description"/i) ||
                    html.match(/<meta[^>]*name="Description"[^>]*content="([^"]*)"/i) ||
                    html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/i);
  if (descMatch) {
    description = descMatch[1].trim().replace(/"/g, '\\"');
  }

  // Extract Main Content
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (!mainMatch) {
    console.warn(`No <main> found in ${file}`);
    return;
  }

  let mainContent = mainMatch[1];

  // Extract banner H1, H2, and intro P if present
  let bannerH1 = "";
  let bannerH2 = "";
  let bannerDesc = "";

  const h1Match = mainContent.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (h1Match) {
    bannerH1 = h1Match[1].trim().replace(/\s+/g, ' ');
    // Remove the h1 from mainContent
    mainContent = mainContent.replace(h1Match[0], '');
  }

  const h2Match = mainContent.match(/<h2 id="append"[^>]*>([\s\S]*?)<\/h2>/i);
  if (h2Match) {
    bannerH2 = h2Match[1].trim().replace(/\s+/g, ' ');
    // Remove h2 from mainContent
    mainContent = mainContent.replace(h2Match[0], '');
  }

  // Sometimes the first paragraph right after h1/h2 is the banner description
  // In jQuery it was: $("main > h1:first-child, h2#append, main > p").appendTo($("#page-title .title-wrapper"));
  // Let's check if the remaining content starts with <p>
  const pMatch = mainContent.match(/^\s*<p[^>]*>([\s\S]*?)<\/p>/i);
  if (pMatch && pMatch[1].length < 600) {
    bannerDesc = pMatch[1].trim().replace(/\s+/g, ' ');
    mainContent = mainContent.replace(pMatch[0], '');
  }

  // URL replacements in main content
  mainContent = mainContent
    .replace(/assets\/images\//g, '/assets/images/')
    .replace(/assets\/js\//g, '/assets/js/')
    .replace(/href="index\.html"/g, 'href="/"')
    .replace(/href="blog\/index\.html"/g, 'href="/blog"')
    .replace(/href="([a-zA-Z0-9_-]+)\.html(#?[^"]*)"/g, 'href="/$1$2"')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, ''); // remove legacy inline scripts

  const targetDir = path.join(appDir, slug);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // Build the page.tsx file
  const pageCode = `import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "${title}",
  description: "${description}",
};

export default function ${toComponentName(slug)}Page() {
  const contentHtml = ${JSON.stringify(mainContent)};

  return (
    <>
      <PageBanner
        title={${bannerH1 ? JSON.stringify(bannerH1) : 'undefined'}}
        subtitle={${bannerH2 ? JSON.stringify(bannerH2) : 'undefined'}}
        description={${bannerDesc ? JSON.stringify(bannerDesc) : 'undefined'}}
      />
      <main className="wrapper">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </main>
    </>
  );
}
`;

  fs.writeFileSync(path.join(targetDir, 'page.tsx'), pageCode, 'utf8');
  console.log(`Migrated: ${file} -> src/app/${slug}/page.tsx`);
});

// Also create blog page
const blogDir = path.join(appDir, 'blog');
if (!fs.existsSync(blogDir)) {
  fs.mkdirSync(blogDir, { recursive: true });
}
fs.writeFileSync(path.join(blogDir, 'page.tsx'), `import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dental Blog | Cove Choice Dental | Copperas Cove, TX",
  description: "Read helpful dental tips, news, and insights from our experienced team at Cove Choice Dental in Copperas Cove, TX.",
};

export default function BlogPage() {
  return (
    <>
      <PageBanner
        title="Dental Health Blog"
        subtitle="Insights, Tips, and Education"
        description="Stay up to date with the latest dental health tips, treatments, and advice from our dental team."
      />
      <main className="wrapper" style={{ padding: "40px 15px", maxWidth: "1000px" }}>
        <h2>Welcome to Our Dental Blog</h2>
        <p style={{ marginTop: "20px", fontSize: "18px", lineHeight: "1.7" }}>
          Welcome to the Cove Choice Dental blog! Here you will find valuable information regarding preventive oral hygiene, restorative dentistry, cosmetic smile transformations, and modern technologies.
        </p>
        <div style={{ marginTop: "40px", display: "grid", gap: "25px", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          <div style={{ background: "#fff", padding: "25px", border: "1px solid #e2e8f0", borderRadius: "8px" }}>
            <h3 style={{ color: "#204369", fontSize: "22px" }}>5 Tips for Healthier Teeth</h3>
            <p style={{ margin: "15px 0", color: "#4a5568" }}>Discover simple daily habits you can incorporate to maintain a cleaner, brighter smile between cleanings.</p>
            <Link href="/preventive-dentistry" className="btn btn-small" style={{ display: "inline-block" }}>Learn More</Link>
          </div>
          <div style={{ background: "#fff", padding: "25px", border: "1px solid #e2e8f0", borderRadius: "8px" }}>
            <h3 style={{ color: "#204369", fontSize: "22px" }}>Understanding Dental Implants</h3>
            <p style={{ margin: "15px 0", color: "#4a5568" }}>How modern dental implants provide the most natural, permanent solution for missing teeth.</p>
            <Link href="/dental-implants" className="btn btn-small" style={{ display: "inline-block" }}>Learn More</Link>
          </div>
          <div style={{ background: "#fff", padding: "25px", border: "1px solid #e2e8f0", borderRadius: "8px" }}>
            <h3 style={{ color: "#204369", fontSize: "22px" }}>Dental Emergencies: What to Do</h3>
            <p style={{ margin: "15px 0", color: "#4a5568" }}>Steps to take immediately when experiencing acute tooth pain or a broken tooth in Copperas Cove.</p>
            <Link href="/emergency-dentistry" className="btn btn-small" style={{ display: "inline-block" }}>Learn More</Link>
          </div>
        </div>
      </main>
    </>
  );
}
`, 'utf8');

console.log('Migration complete!');

function toComponentName(str) {
  return str
    .split('-')
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join('') + 'Page';
}
