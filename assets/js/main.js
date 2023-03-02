/**
* Template Name: Personal - v4.2.0
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

$(document).ready(function(){

$('.items').slick({
dots: true,
infinite: true,
speed: 1500,
autoplay: true,
autoplaySpeed: 500,
slidesToShow: 5,
slidesToScroll: 1,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 4,
slidesToScroll: 1,
infinite: true,
dots: true
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 3,
slidesToScroll: 1
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 2,
slidesToScroll: 2
}
}

]
});
});

$(document).ready(function(){
  $("#tooltip1").hover(function(){
    $(this).attr("tooltip-data", $(this).attr("title"));
    $(this).removeAttr("title");
  }, function(){
    $(this).attr("title", $(this).attr("tooltip-data"));
    $(this).removeAttr("tooltip-data");
  });
});
$(document).ready(function(){
  $("#tooltip2").hover(function(){
    $(this).attr("tooltip-data", $(this).attr("title"));
    $(this).removeAttr("title");
  }, function(){
    $(this).attr("title", $(this).attr("tooltip-data"));
    $(this).removeAttr("tooltip-data");
  });
});
$(document).ready(function(){
  $("#tooltip3").hover(function(){
    $(this).attr("tooltip-data", $(this).attr("title"));
    $(this).removeAttr("title");
  }, function(){
    $(this).attr("title", $(this).attr("tooltip-data"));
    $(this).removeAttr("tooltip-data");
  });
});
$(document).ready(function(){
  $("#tooltip4").hover(function(){
    $(this).attr("tooltip-data", $(this).attr("title"));
    $(this).removeAttr("title");
  }, function(){
    $(this).attr("title", $(this).attr("tooltip-data"));
    $(this).removeAttr("tooltip-data");
  });
});

// window.scrollY or window.pageYOffset
var yorkyoga = document.getElementById('yorkyoga');
var essential = document.getElementById('essential');
var genesis = document.getElementById('genesis');
var myanbell = document.getElementById('myanbell');

window.onscroll = function () {
    if (document.documentElement.scrollTop > 2000) {
        yorkyoga.play();
    } else {
      yorkyoga.pause();
    }

    if (document.documentElement.scrollTop > 2000) {
        essential.play();
    } else {
      essential.pause();
    }

    if (document.documentElement.scrollTop > 2000) {
        genesis.play();
    } else {
      genesis.pause();
    }

    if (document.documentElement.scrollTop > 2000) {
        myanbell.play();
    } else {
      myanbell.pause();
    }
}

$(document).ready(function(){

 $("#portfolioimagetoggleslime").click(function(){   
    $("#portfolioimageslime1").toggle();      
    $("#portfolioimageslime2").toggle();   
  });

  $("#portfolioimagetogglezeus").click(function(){   
    $("#portfolioimagezeus1").toggle();      
    $("#portfolioimagezeus2").toggle();   
  });

   $("#portfolioimagetogglesmartcar").click(function(){   
    $("#portfolioimagesmartcar1").toggle();      
    $("#portfolioimagesmartcar2").toggle();   
  });

});


  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

/**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '#navbar .nav-link', function(e) {
    let section = select(this.hash)
    if (section) {
      e.preventDefault()

      let body = select('body')
      let navbar = select('#navbar')
      let belowbar = select('#belowbar')
      let header = select('#header')
      let sections = select('section', true)
      let navlinks = select('#navbar .nav-link', true)
      let belowbarlinks = select('#belowbar .belowbar-link', true)

      navlinks.forEach((item) => {
        item.classList.remove('active')
      })

      belowbarlinks.forEach((item) => {
        item.classList.remove('active')
      })

      this.classList.add('active')
      if (this.hash == '#header') {
       document.getElementsByClassName("nav-link header").item(0).classList.add('active')
       document.getElementsByClassName("belowbar-link header").item(0).classList.add('active')
      }
      if (this.hash == '#about') {
       document.getElementsByClassName("nav-link about").item(0).classList.add('active')
       document.getElementsByClassName("belowbar-link about").item(0).classList.add('active')
       if (document.documentElement.clientWidth > 991){
       document.getElementById("body").classList.add("specialbody");}
      }
      if (this.hash == '#resume') {
       document.getElementsByClassName("nav-link resume").item(0).classList.add('active')
       document.getElementsByClassName("belowbar-link resume").item(0).classList.add('active')
       if (document.documentElement.clientWidth > 991){
       document.getElementById("body").classList.add("specialbody");}
      }
      if (this.hash == '#services') {
       document.getElementsByClassName("nav-link services").item(0).classList.add('active')
       document.getElementsByClassName("belowbar-link services").item(0).classList.add('active')
       if (document.documentElement.clientWidth > 991){
       document.getElementById("body").classList.add("specialbody");}
      }
      if (this.hash == '#portfolio') {
       document.getElementsByClassName("nav-link portfolio").item(0).classList.add('active')
       document.getElementsByClassName("belowbar-link portfolio").item(0).classList.add('active')
       if (document.documentElement.clientWidth > 991){
       document.getElementById("body").classList.add("specialbody");}
      }
      if (this.hash == '#contact') {
       document.getElementsByClassName("nav-link contact").item(0).classList.add('active')
       document.getElementsByClassName("belowbar-link contact").item(0).classList.add('active')
       if (document.documentElement.clientWidth > 991){
       document.getElementById("body").classList.add("specialbody");}
      }

      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }

      // if (belowbar.classList.contains('belowbar-mobile')) {
      //   belowbar.classList.remove('belowbar-mobile')
      //   let belowbarToggle = select('.mobile-nav-toggle')
      //   belowbarToggle.classList.toggle('bi-list')
      //   belowbarToggle.classList.toggle('bi-x')
      // }

      if (this.hash == '#header') {
        document.getElementById("headercontainer").style.flexDirection = "column"
        document.getElementById("spaceonheader").style.marginTop = "140px"
        // document.getElementById("credits").style = "display: block;"
        header.classList.remove('header-top')
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        return;
      }

      if (this.hash != '#header') {
        document.getElementById("headercontainer").style.flexDirection = "row"
        document.getElementById("spaceonheader").style.marginTop = "10px"}

      if (!header.classList.contains('header-top')) {

        function myFunction(x) {
          if (x.matches) { // If media query matches
            document.getElementById("navbar").style.display  = "none"
            document.getElementById("kaung").style = "margin-left: -80px; margin-top: 20px; color: #fff;"
          }
        }
        var x = window.matchMedia("(min-width: 651px)") // x = when desktop view
        myFunction(x) // Call listener function at run time
        x.addListener(myFunction) // Attach listener function on state changes

        // document.getElementById("credits").style = "display: none;"
        document.getElementById("belowbar").style = "display: block;"
        header.classList.add('header-top')
        setTimeout(function() {
          sections.forEach((item) => {
            item.classList.remove('section-show')
          })
          section.classList.add('section-show')

        }, 350);
      } else {
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        section.classList.add('section-show')
      }

      scrollto(this.hash)
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '#belowbar .belowbar-link', function(e) {
    let section = select(this.hash)
    if (section) {
      e.preventDefault()

      let body = select('body')
      let navbar = select('#navbar')
      let belowbar = select('#belowbar')
      let header = select('#header')
      let sections = select('section', true)
      let navlinks = select('#navbar .nav-link', true)
      let belowbarlinks = select('#belowbar .belowbar-link', true)

      navlinks.forEach((item) => {
        item.classList.remove('active')
      })

      belowbarlinks.forEach((item) => {
        item.classList.remove('active')
      })

      this.classList.add('active')
      if (this.hash == '#header') {
       document.getElementsByClassName("nav-link header").item(0).classList.add('active')
       document.getElementsByClassName("belowbar-link header").item(0).classList.add('active')
       if (document.documentElement.clientWidth > 991){
       document.getElementById("body").classList.remove("specialbody");}
      }
      if (this.hash == '#about') {
       document.getElementsByClassName("nav-link about").item(0).classList.add('active')
       document.getElementsByClassName("belowbar-link about").item(0).classList.add('active')
      }
      if (this.hash == '#resume') {
       document.getElementsByClassName("nav-link resume").item(0).classList.add('active')
       document.getElementsByClassName("belowbar-link resume").item(0).classList.add('active')
      }
      if (this.hash == '#services') {
       document.getElementsByClassName("nav-link services").item(0).classList.add('active')
       document.getElementsByClassName("belowbar-link services").item(0).classList.add('active')
      }
      if (this.hash == '#portfolio') {
       document.getElementsByClassName("nav-link portfolio").item(0).classList.add('active')
       document.getElementsByClassName("belowbar-link portfolio").item(0).classList.add('active')
      }
      if (this.hash == '#contact') {
       document.getElementsByClassName("nav-link contact").item(0).classList.add('active')
       document.getElementsByClassName("belowbar-link contact").item(0).classList.add('active')
      }

      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }

      // if (belowbar.classList.contains('belowbar-mobile')) {
      //   belowbar.classList.remove('belowbar-mobile')
      //   let belowbarToggle = select('.mobile-nav-toggle')
      //   belowbarToggle.classList.toggle('bi-list')
      //   belowbarToggle.classList.toggle('bi-x')
      // }

      if (this.hash == '#header') {
        document.getElementById("headercontainer").style.flexDirection = "column"
        document.getElementById("spaceonheader").style.marginTop = "140px"
        document.getElementById("navbar").style = "display: block;"
        document.getElementById("belowbar").style = "display: none;"
        document.getElementById("kaung").style = "margin-left: 0;"
        // document.getElementById("credits").style = "display: block;"
        header.classList.remove('header-top')
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        return;
      }

      if (this.hash != '#header') {
        document.getElementById("headercontainer").style.flexDirection = "row"
        document.getElementById("spaceonheader").style.marginTop = "10px"}


      if (!header.classList.contains('header-top')) {
        document.getElementById("belowbar").style = "display: block;"
        header.classList.add('header-top')
        setTimeout(function() {
          sections.forEach((item) => {
            item.classList.remove('section-show')
          })
          section.classList.add('section-show')

        }, 350);
      } else {
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        section.classList.add('section-show')
      }

      scrollto(this.hash)
    }
  }, true)


/**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '#flexforglassbutton .glassbutton, .glassbutton2nd, .glassbuttonaboutme', function(e) {
    let section = select(this.hash)
    if (section) {
      e.preventDefault()

      let body = select('body')
      let navbar = select('#navbar')
      let belowbar = select('#belowbar')
      let header = select('#header')
      let sections = select('section', true)
      let navlinks = select('#navbar .nav-link', true)
      let belowbarlinks = select('#belowbar .belowbar-link', true)

      navlinks.forEach((item) => {
        item.classList.remove('active')
      })

      belowbarlinks.forEach((item) => {
        item.classList.remove('active')
      })

      this.classList.add('active')
      if (this.hash == '#header') {
       document.getElementsByClassName("nav-link header").item(0).classList.add('active')
       document.getElementsByClassName("belowbar-link header").item(0).classList.add('active')
      }
      if (this.hash == '#about') {
       document.getElementsByClassName("nav-link about").item(0).classList.add('active')
       document.getElementsByClassName("belowbar-link about").item(0).classList.add('active')
       if (document.documentElement.clientWidth > 991){
       document.getElementById("body").classList.add("specialbody");}
      }
      if (this.hash == '#resume') {
       document.getElementsByClassName("nav-link resume").item(0).classList.add('active')
       document.getElementsByClassName("belowbar-link resume").item(0).classList.add('active')
       if (document.documentElement.clientWidth > 991){
       document.getElementById("body").classList.add("specialbody");}
      }
      if (this.hash == '#services') {
       document.getElementsByClassName("nav-link services").item(0).classList.add('active')
       document.getElementsByClassName("belowbar-link services").item(0).classList.add('active')
       if (document.documentElement.clientWidth > 991){
       document.getElementById("body").classList.add("specialbody");}
      }
      if (this.hash == '#portfolio') {
       document.getElementsByClassName("nav-link portfolio").item(0).classList.add('active')
       document.getElementsByClassName("belowbar-link portfolio").item(0).classList.add('active')
       if (document.documentElement.clientWidth > 991){
       document.getElementById("body").classList.add("specialbody");}
      }
      if (this.hash == '#contact') {
       document.getElementsByClassName("nav-link contact").item(0).classList.add('active')
       document.getElementsByClassName("belowbar-link contact").item(0).classList.add('active')
       if (document.documentElement.clientWidth > 991){
       document.getElementById("body").classList.add("specialbody");}
      }

      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }

      // if (belowbar.classList.contains('belowbar-mobile')) {
      //   belowbar.classList.remove('belowbar-mobile')
      //   let belowbarToggle = select('.mobile-nav-toggle')
      //   belowbarToggle.classList.toggle('bi-list')
      //   belowbarToggle.classList.toggle('bi-x')
      // }

      if (this.hash == '#header') {
        document.getElementById("headercontainer").style.flexDirection = "column"
        document.getElementById("spaceonheader").style.marginTop = "140px"
        // document.getElementById("credits").style = "display: block;"
        header.classList.remove('header-top')
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        return;
      }

      if (this.hash != '#header') {
        document.getElementById("headercontainer").style.flexDirection = "row"
        document.getElementById("spaceonheader").style.marginTop = "10px"}

      if (!header.classList.contains('header-top')) {

        function myFunction(x) {
          if (x.matches) { // If media query matches
            document.getElementById("navbar").style.display  = "none"
            document.getElementById("kaung").style = "margin-left: -80px; margin-top: 20px; color: #fff;"
          }
        }
        var x = window.matchMedia("(min-width: 651px)") // x = when desktop view
        myFunction(x) // Call listener function at run time
        x.addListener(myFunction) // Attach listener function on state changes

        // document.getElementById("credits").style = "display: none;"
        document.getElementById("belowbar").style = "display: block;"
        header.classList.add('header-top')
        setTimeout(function() {
          sections.forEach((item) => {
            item.classList.remove('section-show')
          })
          section.classList.add('section-show')

        }, 350);
      } else {
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        section.classList.add('section-show')
      }

      scrollto(this.hash)
    }
  }, true)

/**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '#webpagelinksmultiuse', function(e) {
    let section = select(this.hash)
    if (section) {
      e.preventDefault()

      let body = select('body')
      let navbar = select('#navbar')
      let belowbar = select('#belowbar')
      let header = select('#header')
      let sections = select('section', true)
      let navlinks = select('#navbar .nav-link', true)
      let belowbarlinks = select('#belowbar .belowbar-link', true)

      navlinks.forEach((item) => {
        item.classList.remove('active')
      })

      belowbarlinks.forEach((item) => {
        item.classList.remove('active')
      })

      this.classList.add('active')
      if (this.hash == '#header') {
       document.getElementsByClassName("nav-link header").item(0).classList.add('active')
       document.getElementsByClassName("belowbar-link header").item(0).classList.add('active')
      }
      if (this.hash == '#about') {
       document.getElementsByClassName("nav-link about").item(0).classList.add('active')
       document.getElementsByClassName("belowbar-link about").item(0).classList.add('active')
       if (document.documentElement.clientWidth > 991){
       document.getElementById("body").classList.add("specialbody");}
      }
      if (this.hash == '#resume') {
       document.getElementsByClassName("nav-link resume").item(0).classList.add('active')
       document.getElementsByClassName("belowbar-link resume").item(0).classList.add('active')
       if (document.documentElement.clientWidth > 991){
       document.getElementById("body").classList.add("specialbody");}
      }
      if (this.hash == '#services') {
       document.getElementsByClassName("nav-link services").item(0).classList.add('active')
       document.getElementsByClassName("belowbar-link services").item(0).classList.add('active')
       if (document.documentElement.clientWidth > 991){
       document.getElementById("body").classList.add("specialbody");}
      }
      if (this.hash == '#portfolio') {
       document.getElementsByClassName("nav-link portfolio").item(0).classList.add('active')
       document.getElementsByClassName("belowbar-link portfolio").item(0).classList.add('active')
       if (document.documentElement.clientWidth > 991){
       document.getElementById("body").classList.add("specialbody");}
      }
      if (this.hash == '#contact') {
       document.getElementsByClassName("nav-link contact").item(0).classList.add('active')
       document.getElementsByClassName("belowbar-link contact").item(0).classList.add('active')
       if (document.documentElement.clientWidth > 991){
       document.getElementById("body").classList.add("specialbody");}
      }

      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }

      // if (belowbar.classList.contains('belowbar-mobile')) {
      //   belowbar.classList.remove('belowbar-mobile')
      //   let belowbarToggle = select('.mobile-nav-toggle')
      //   belowbarToggle.classList.toggle('bi-list')
      //   belowbarToggle.classList.toggle('bi-x')
      // }

      if (this.hash == '#header') {
        document.getElementById("headercontainer").style.flexDirection = "column"
        document.getElementById("spaceonheader").style.marginTop = "140px"
        document.getElementById("navbar").style = "display: block;"
        document.getElementById("belowbar").style = "display: none;"
        document.getElementById("kaung").style = "margin-left: 0;"
        // document.getElementById("credits").style = "display: block;"
        header.classList.remove('header-top')
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        return;
      }

      if (this.hash != '#header') {
        document.getElementById("headercontainer").style.flexDirection = "row"
        document.getElementById("spaceonheader").style.marginTop = "10px"}
      
      if (!header.classList.contains('header-top')) {

        function myFunction(x) {
          if (x.matches) { // If media query matches
            document.getElementById("navbar").style.display  = "none"
            document.getElementById("kaung").style = "margin-left: -80px; margin-top: 20px; color: #fff;"
          }
        }
        var x = window.matchMedia("(min-width: 651px)") // x = when desktop view
        myFunction(x) // Call listener function at run time
        x.addListener(myFunction) // Attach listener function on state changes

        // document.getElementById("credits").style = "display: none;"
        document.getElementById("belowbar").style = "display: block;"
        header.classList.add('header-top')
        setTimeout(function() {
          sections.forEach((item) => {
            item.classList.remove('section-show')
          })
          section.classList.add('section-show')

        }, 350);
      } else {
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        section.classList.add('section-show')
      }

      scrollto(this.hash)
    }
  }, true)

  /**
   * Activate/show sections on load with hash links
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      let initial_nav = select(window.location.hash)

      if (initial_nav) {
        let header = select('#header')
        let belowbarlinks = select('#belowbar .belowbar-link', true)

        header.classList.add('header-top')

        belowbarlinks.forEach((item) => {
          if (item.getAttribute('href') == window.location.hash) {
            item.classList.add('active')
          } else {
            item.classList.remove('active')
          }
        })

        setTimeout(function() {
          initial_nav.classList.add('section-show')
        }, 350);

        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 2000
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: false,
    // autoplay: {
    //   delay: 33000,
    //   disableOnInteraction: false
    // },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '100%',
    height: '100vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

})()