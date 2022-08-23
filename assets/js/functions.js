$(document).ready(function () {
  $(window).scroll(function () {
    $(".header-section").removeClass("fixed-top-header");
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".header-section").addClass("fixed-top-header");
    }
  });
  $(window).scroll(function () {
    $(".header-section").removeClass("fixed-top-header1");
    var scroll = $(window).scrollTop();
    if (scroll > 200) {
      $(".header-section").addClass("fixed-top-header1");
    }
  });

  // $(window).scroll(function() {
  //     $(".header-section").removeClass("fixed-top-header-ccr");
  //     var scroll = $(window).scrollTop();
  //     if (scroll > 400) {
  //         $(".header-section").addClass("fixed-top-header-ccr");
  //     }
  // });

  $(function () {
    $(".more-option-btn").click(function () {
      $(".more-option").toggleClass("blue");
    });
    // $(".more-option-btn").click(function() {
    //   $('.more-option').removeClass("blue");
    // });
  });

  $(function () {
    $(".search-icon").click(function () {
      $(".search-item").toggleClass("search");
    });
  });

  $(function () {
    $(".check-box").click(function () {
      $(".check-box").toggleClass("check");
    });
  });

  //  featured properties
  var swiper = new Swiper(".featured-properties-container", {
    pagination: ".swiper-pagination",
    paginationClickable: true,
    paginationBulletRender: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  });

  //  properties for sale
  var swiper = new Swiper(".swiper-property-cg", {
    nextButton: ".swiper-property-cg-next",
    prevButton: ".swiper-property-cg-prev",
    slidesPerView: 1,
  });

  //  testimonial
  var swiper = new Swiper(".testimonial-swiper-container", {
    pagination: ".swiper-pagination",
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    loop: true,
  });

  //  testimonial style 3
  var swiper = new Swiper(".testimonial-style3-container", {
    pagination: ".swiper-pagination",
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    loop: true,
  });

  //  widget featured properties
  var swiper = new Swiper(".w-featured-properties-container", {
    pagination: ".swiper-pagination",
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 70,
  });

  //  slider featured post
  var swiper = new Swiper(".slider-featured-post", {
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: 5500,
    autoplayDisableOnInteraction: false,
    loop: true,
    breakpoints: {
      990: {
        slidesPerView: 1,
      },
    },
  });

  //  featured-property-slider
  var swiper = new Swiper(".featured-property-slider-container", {
    slidesPerView: 4,
    spaceBetween: 10,
    autoplay: 5500,
    autoplayDisableOnInteraction: false,
    loop: true,
    breakpoints: {
      1370: {
        slidesPerView: 3,
      },
      990: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1,
      },
    },
  });

  //  our client brand
  var swiper = new Swiper(".our-client-brand-container", {
    slidesPerView: 6,
    spaceBetween: 0,
    autoplay: 5500,
    autoplayDisableOnInteraction: false,
    loop: true,
    breakpoints: {
      1370: {
        slidesPerView: 5,
      },
      990: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      500: {
        slidesPerView: 2,
      },
      400: {
        slidesPerView: 1,
      },
    },
  });

  //  our client brand-multiple
  var swiper = new Swiper(".our-client-brand-container-multiple", {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 15,
    autoplay: 5500,
    autoplayDisableOnInteraction: false,
    loop: true,
  });

  //  property image
  var swiper = new Swiper(".property-image-container", {
    slidesPerView: 4,
    nextButton: ".property-image-next",
    prevButton: ".property-image-prev",
    spaceBetween: 8,
    breakpoints: {
      990: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      500: {
        slidesPerView: 1,
      },
    },
  });

  // Can also be used with $(document).ready()
  $(window).load(function () {
    $(".flexsliders").flexslider({
      animation: "slide",
      controlNav: "thumbnails",
    });
  });

  $(window).load(function () {
    $(".highlight-flexslider").flexslider({
      animation: "slide",
      controlNav: "thumbnails",
    });
  });

  // feature properties
  $(window).load(function () {
    // The slider being synced must be initialized first
    $("#carousels").flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      itemWidth: 150,
      itemMargin: 5,
      asNavFor: "#sliders",
    });

    $("#sliders").flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      sync: "#carousels",
    });
  });

  // counter up
  $(".number").counterUp({
    delay: 10,
    time: 2000,
  });

  //  mobile menu
  $(function () {
    $(".mobile-menu-icon").click(function () {
      $(".mobile-header").toggleClass("open-menu");
    });
  });
});

/*--------------------- properties-gallery Item Filter-----------------*/
jQuery(document).ready(function ($) {
  "use strict";

  var $container = $(".properties-gallery-item-1"),
    colWidth = function () {
      var w = $container.width(),
        columnNum = 1,
        columnWidth = 0;
      if (w > 960) {
        columnNum = 3;
      } else if (w > 475) {
        columnNum = 2;
      }
      columnWidth = Math.floor(w / columnNum);
      $container.find(".item").each(function () {
        var $item = $(this),
          multiplier_w = $item.attr("class").match(/item-w(\d)/),
          multiplier_h = $item.attr("class").match(/item-h(\d)/),
          width = multiplier_w
            ? columnWidth * multiplier_w[1] - 10
            : columnWidth - 30,
          height = multiplier_h
            ? columnWidth * multiplier_h[1] * 1.28 - 30
            : columnWidth * 1.28 - 30;
        $item.css({
          width: width,
          height: height,
        });
      });
      return columnWidth;
    },
    isotope = function () {
      $container.isotope({
        resizable: true,
        itemSelector: ".item",
        masonry: {
          columnWidth: colWidth(),
          gutterWidth: 30,
        },
      });
    };
  isotope();
  $(window).smartresize(isotope);

  $(".properties-galleryFilter a").click(function () {
    $(".properties-galleryFilter .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");
    $container.isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return false;
  });
});

/*--------------------- properties-gallery Item Filter  01-----------------*/
jQuery(document).ready(function ($) {
  "use strict";

  var $container = $(".properties-gallery-item-3"),
    colWidth = function () {
      var w = $container.width(),
        columnNum = 1,
        columnWidth = 0;
      if (w > 960) {
        columnNum = 3;
      } else if (w > 475) {
        columnNum = 2;
      }
      columnWidth = Math.floor(w / columnNum);
      $container.find(".item").each(function () {
        var $item = $(this),
          multiplier_w = $item.attr("class").match(/item-w(\d)/),
          multiplier_h = $item.attr("class").match(/item-h(\d)/),
          width = multiplier_w
            ? columnWidth * multiplier_w[1] - 10
            : columnWidth - 10,
          height = multiplier_h
            ? columnWidth * multiplier_h[1] * 0.716 - 10
            : columnWidth * 0.716 - 10;
        $item.css({
          width: width,
          height: height,
        });
      });
      return columnWidth;
    },
    isotope = function () {
      $container.isotope({
        resizable: true,
        itemSelector: ".item",
        masonry: {
          columnWidth: colWidth(),
          gutterWidth: 30,
        },
      });
    };
  isotope();
  $(window).smartresize(isotope);

  $(".properties-galleryFilter a").click(function () {
    $(".properties-galleryFilter .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");
    $container.isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return false;
  });
});

/*--------------------- properties-gallery Item Filter  01-----------------*/
jQuery(document).ready(function ($) {
  "use strict";

  var $container = $(".properties-gallery-item-4"),
    colWidth = function () {
      var w = $container.width(),
        columnNum = 1,
        columnWidth = 0;
      if (w > 960) {
        columnNum = 4;
      } else if (w > 475) {
        columnNum = 2;
      }
      columnWidth = Math.floor(w / columnNum);
      $container.find(".item").each(function () {
        var $item = $(this),
          multiplier_w = $item.attr("class").match(/item-w(\d)/),
          multiplier_h = $item.attr("class").match(/item-h(\d)/),
          width = multiplier_w
            ? columnWidth * multiplier_w[1] - 10
            : columnWidth - 10,
          height = multiplier_h
            ? columnWidth * multiplier_h[1] * 0.716 - 10
            : columnWidth * 0.716 - 10;
        $item.css({
          width: width,
          height: height,
        });
      });
      return columnWidth;
    },
    isotope = function () {
      $container.isotope({
        resizable: true,
        itemSelector: ".item",
        masonry: {
          columnWidth: colWidth(),
          gutterWidth: 30,
        },
      });
    };
  isotope();
  $(window).smartresize(isotope);

  $(".properties-galleryFilter a").click(function () {
    $(".properties-galleryFilter .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");
    $container.isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return false;
  });
});
