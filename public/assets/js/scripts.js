$(window).ready(function () {
   var interval = setInterval(function () {
       if (window.location.hash) window.location = window.location.hash;
   }, 0);
   setTimeout(function () {
       clearInterval(interval);
   }, 1000);

   function scrollToAnchor(target) {
       var $target = $("a[name='" + target.substr(1) + "']"),
           targetName = window.location.href.split("#")[1];
       $('html, body').stop().animate({
           'scrollTop': $target.offset().top
       }, 1000, function () {
           document.location.hash = targetName;
       });
   }
   $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
       if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
           var target = $(this.hash);
           target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
           if (target.length) {
               $('html, body').animate({
                   scrollTop: target.offset().top
               }, 1000, function () {});
           }
       }
   });
});



$(function(){


 $('header nav').meanmenu({
     meanMenuContainer: 'header .place-nav',
     meanMenuOpen: "<i class='icon-menu'></i>",
     meanMenuClose: "<i class='icon-plus'></i>",
     meanScreenWidth: 860,
     meanDisplay: "block"
 });

   $("[data-player]").tntvideos({    
     playButton: '.play',
     closeButton: '.close',
     bodyPlaying: '.playing',
     mobileWidth: 900,
     offset: 0
   });      

 $("a[rel*=leanModal]").leanModal();
  $(".modal-close").on("click", function(){
         for (var i = 0; i < $('.modal-content .youtube iframe').length; i++) {
           var video = $('.modal-content .youtube iframe').attr("src");
           var video = video.replace("autoplay=1", "autoplay=0") ;
           $('.modal-content youtube iframe').attr("src","");
           $('.modal-content .youtube iframe').attr("src",video);
         }
 });
  $( "header nav ul li" ).has( "> ul" ).addClass('has-children');
 $(".more-to-explore").appendTo($(".more-to-explore-container"));
 $("main > h1:first-child, h2#append, main > p").appendTo($("#page-title .title-wrapper"));

 if($(".main-img").length){
   var img = $(".main-img");
   var selectBG = img.attr('src');
   if (!$("body").hasClass("page_index")) {
       $("#page-title").css({
           'background-image': 'url(' + selectBG + ')',
           'background-size': 'cover',
           'background-repeat': 'no-repeat',
           'background-position': 'center center'
       })
   }
 } else {
 // Randomized Banner Background
     var selectBG = Math.floor(Math.random() * 9) + 1;

     var img = $('<img class="main-img">'); 
     img.attr('src', 'https://www.texaschoicedental.com/assets/images/banner-' + selectBG + '.jpg');
     img.prependTo('main');

     if (!$("body").hasClass("page_index")) {
         $("#page-title").css({
             'background-image': 'url(https://www.texaschoicedental.com/assets/images/banner-' + selectBG + '.jpg)',
             'background-size': 'cover',
             'background-repeat': 'no-repeat',
             'background-position': 'center center'
         })
     }  
 }

 $(".main-img").insertAfter("#page-title");


 //activate google map
 $(".gmap").on("mouseenter",function(){
   $(this).addClass("active");
 }).on("mouseleave",function(){
   $(this).removeClass("active");
 });

 // tabitha's fixed header with calc of header

 var theWindow = $(window),
     body = $("body"),
     header = $("header"),
     headerBottom = header.outerHeight(),
     hideBottom = $("header article").outerHeight();
 $(window).resize(function () {
     body.css('padding-top', header.outerHeight());
 });
 body.css('padding-top', headerBottom);
 if (window.location.hash && theWindow.width() > 999) {
     body.addClass("scrolled");
     header.addClass("animated fadeInDown");
 }

 theWindow.on("scroll", function () {
     if (theWindow.width() > 999) {
         if (theWindow.scrollTop() >= headerBottom) {
             body.addClass("scrolled").removeClass("not-scrolled");
             header.addClass("animated fadeInDown");
         } else if (theWindow.scrollTop() <= headerBottom) {
             body.removeClass("scrolled").addClass("not-scrolled");
             header.removeClass("animated fadeInDown");
         }
     }
     if (theWindow.width() < 861) {
         if (theWindow.scrollTop() >= hideBottom) {
             body.addClass('attach');
         } else if (theWindow.scrollTop() <= hideBottom) {
             body.removeClass('attach');
         }
     }
 });

 // Social and Hours to mobile nav

   if ($(window).width() <= 860) {
 $("footer .social").clone().prependTo(".mean-container .mean-nav");
 $("footer .hours").clone().appendTo(".mean-container .mean-nav");
   }

   if (theWindow.width() < 1001) {
          var didScroll,lastScrollTop=0,delta=5,navbarHeight=$("header").outerHeight();function hasScrolled(){var l=$(this).scrollTop();Math.abs(lastScrollTop-l)<=delta||(l>lastScrollTop&&l>navbarHeight?$("header").removeClass("nav-down").addClass("nav-up"):l+$(window).height()<$(document).height()&&$("header").removeClass("nav-up").addClass("nav-down"),lastScrollTop=l)}$(window).scroll(function(l){didScroll=!0}),setInterval(function(){didScroll&&(hasScrolled(),didScroll=!1)},250);
    }


   $(".hover-change").on("mouseover", function() {
       var $this = $(this);
       $this.data("original", $this.attr("src"));
       $this.attr("src", $this.data("hover"));
   }).on("mouseleave", function() {
       var $this = $(this);
       $this.data("hover", $this.attr("src"));
       $this.attr("src", $this.data("original"));
   });


 ////////////////////////////// accordion + youtube video api reload on close if playing
 $(".accordion h3, .accordion h2").addClass("toogle");
 $(".toogle").each(function () {
     $(this).nextUntil('.toogle').add().wrapAll('<div>');
 });
 $(".toogle").on("click", function () {
     if ($(this).hasClass("active")) {
         $(this).removeClass("active").next().slideUp();
     } else {
         $(".toogle").removeClass("active").next().slideUp();
         $(this).addClass("active").next().slideDown();
         for (var i = 0; i < $('.accordion iframe').length; i++) {
             $('.accordion iframe')[i].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
         }
     }
 });


 var slideshows = $('.cycle-slideshow').on('cycle-prev cycle-next', function(e, opts) {
     // advance the other slideshow
     slideshows.not(this).cycle('goto', opts.currSlide);
 });

 $('#carousel .cycle-slideshow figure').click(function () {
     console.log("clicked");
     var index = $('#carousel .cycle-slideshow').data('cycle.API').getSlideIndex(this);
     slideshows.cycle('goto', index);
 });


  ////////////////////////////// page divider
  var dividerStart = "> h2, .page-divider .wrap, .page-divider .title",
      mobileWidth = 630;
  $.when(setupServices()).done(function () {});


  function setupServices() {
      $(".page-divider " + dividerStart)
          .addClass("divider-title").each(function () { //auto wrap 
              $(this)
                  .nextUntil('.divider-title')
                  .addBack()
                  .wrapAll('<div class="divider-body">');
          });

// // Read Toggle
//         $(".block").each(function() {
//           $(this).insertAfter($(this).closest($(".divider-body")));
//         });


// // Section Toggle
//    $("button.togg").on("click", function () {
//        if ($(this).hasClass("active")) {
//            $(this).closest('.divider-body').next('.block:first').removeClass("open-togg");
//            $(this).removeClass("active").next("div").slideUp();
//        } else {
//          $(this).closest('.divider-body').next('.block:first').addClass("open-togg");
//            $(this).addClass("active").next("div").slideDown();
//        }
//    });
// $(".read-toggle h3").each(function () {
//    $(this).nextUntil('h3, h2').addBack().wrapAll('<div class="clearfix">');
// });



          //if has image
       $(".divider-body").each(function (index) {
        if ($(window).width() >= mobileWidth) {
           $(this)
               .find(">img, p > img, .fluid-vid, .internal-affil, div.elem-left")
               .removeClass('elem-left elem-border')
               .insertAfter($(this).find(">*:last-child"))
               .wrap('<figure class="divider-figure">');
           $(".divider-body .fluid-vid").parent(".elem").addClass('vid');

           $(this)
            .find(".divider-title")
            .nextUntil("figure")
            .addBack()
            .wrapAll('<article class="divider-text"><div>');

            $(this)
              .find(".divider-title")
              .nextAll()
              .wrapAll('<div class="line">');
          }

       });

       $(".divider-flex").each(function() {
         $(this).insertAfter($(this).closest($(".divider-body")));
       });



          


          // Auto Alternate images
           $(".divider-body").each(function(index){
               if (index % 2 === 0){
                 $(this).find(".divider-figure").addClass('figure-right');
               }
           });

         $(".divider-body").each(function(index){
         if ( $(this).find("figure").length === 0 ){
            $(this).addClass("no-img");
         }
         });
    
    
            //move anchors to page-divider-body
            $(".page-divider a[name]").each(function(){              
            var getAnchor = $(this).parent(),
              anchorTarget = $(this)
                .parentsUntil(".page-divider")
                .next()
                .find(".divider-title").parent();
              getAnchor.prependTo(anchorTarget);
            });   
          } 



   //// Wraps toggles' H3 into clearfixed sections and moves the image infront of the H3 on desktop
   $(".section-toggle h3").each(function() {
      $(this).nextUntil('h3, div, h2').addBack().wrapAll('<div class="has-h3 clearfix">');
   });

   if ($(window).width() > 750) {
      $(".has-h3").each(function(index) {
      $(this).find(".elem-sm").insertBefore($(this).children("h3"));
      })
   }


   /*** Appends the section toggle to the block or pd-body container that is often flexed. This way the toggle content can fill up the whole width instead of just half screen
    
   May need to change "block" or "divider-body" to whatever the page-divider script is naming the sections 
   ****///
   
   
   $(".divider-body").each(function (index)  {
         $(this).find('.section-toggle').insertAfter($(this));
   });

   $("button.togg").each(function ()  {
      this.setAttribute('aria-expanded', "false");
      });
   
   $("button.togg").on("click", function() {
      if ($(this).hasClass("active")) {
            $(this).html( "Read More" );
      this.setAttribute('aria-expanded', "false");
         $(this).removeClass("active").closest('.divider-body').next(".section-toggle").slideUp();
      } else {
         this.setAttribute('aria-expanded', "true");
      $(this).html( "Show Less" );
      $(this).addClass("active").closest('.divider-body').next(".section-toggle").slideDown();

      }
   });





});


// $(".section-toggle>p").on("click", function () { if
// ($(this).hasClass("active")) {
// $(this).removeClass("active").next("div").slideUp(); } else {
// $(this).addClass("active").next("div").slideDown(); } });
