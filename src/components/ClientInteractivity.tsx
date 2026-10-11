"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientInteractivity() {
  const pathname = usePathname();

  useEffect(() => {
    // Handle Accordions
    const accordionHeaders = document.querySelectorAll<HTMLElement>(
      ".accordion h2, .accordion h3, .toogle"
    );

    const handleAccordionClick = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      target.classList.toggle("active");
      const nextElem = target.nextElementSibling as HTMLElement;
      if (nextElem) {
        if (target.classList.contains("active")) {
          nextElem.style.display = "block";
        } else {
          nextElem.style.display = "none";
        }
      }
    };

    accordionHeaders.forEach((el) => {
      el.style.cursor = "pointer";
      el.addEventListener("click", handleAccordionClick);
    });

    // Handle button.togg (Read More / Show Less)
    const toggButtons = document.querySelectorAll<HTMLElement>("button.togg");
    const handleToggClick = (e: Event) => {
      const btn = e.currentTarget as HTMLElement;
      const isActive = btn.classList.toggle("active");
      btn.setAttribute("aria-expanded", isActive ? "true" : "false");
      btn.textContent = isActive ? "Show Less" : "Read More";

      const dividerBody = btn.closest(".divider-body");
      if (dividerBody) {
        const nextToggle = dividerBody.nextElementSibling as HTMLElement;
        if (nextToggle && nextToggle.classList.contains("section-toggle")) {
          nextToggle.style.display = isActive ? "block" : "none";
        }
      }
    };

    toggButtons.forEach((btn) => {
      btn.addEventListener("click", handleToggClick);
    });

    return () => {
      accordionHeaders.forEach((el) => {
        el.removeEventListener("click", handleAccordionClick);
      });
      toggButtons.forEach((btn) => {
        btn.removeEventListener("click", handleToggClick);
      });
    };
  }, [pathname]);

  return null;
}
