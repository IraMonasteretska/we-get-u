// // burger menu
let headerMenu = document.querySelector(".header__menu");
let burger = document.querySelector(".burger__container");
burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  headerMenu.classList.toggle("active");
});

let headerLinkBtn = document.querySelector(".header__link-btn");
headerLinkBtn.addEventListener("click", function () {
  burger.classList.remove("active");
  headerMenu.classList.remove("active");
});

if (document.querySelector(".index-body")) {
  // change with scroll
  function onScroll(event) {
    let sections = document.querySelectorAll(".sticky__fixed-item");
    let scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    for (let i = 0; i < sections.length; i++) {
      let currLink = sections[i];
      let val = currLink.getAttribute("href");
      let refElement = document.querySelector(val);
      if (
        refElement.offsetTop <= scrollPos + 150 &&
        refElement.offsetTop + refElement.offsetHeight > scrollPos + 150
      ) {
        if (
          document
            .querySelector(".sticky__fixed-item")
            .classList.contains("active")
        ) {
          document
            .querySelector(".sticky__fixed-item-seo")
            .classList.remove("active");
          return;
        }

        if (currLink.classList.contains("active")) {
          return;
        }

        document
          .querySelector(".sticky__fixed-item")
          .classList.remove("active");
        currLink.classList.add("active");
      } else {
        currLink.classList.remove("active");
      }
    }
  }

  window.document.addEventListener("scroll", onScroll);

  // change bg

  let partnersBg = document.querySelector(".partners__bg");
  let stickyBg = document.querySelector(".sticky__bg");
  let footerBg = document.querySelector(".footer__bg");

  let element = document.querySelector("#changePartnersBg");
  let Visible = function (target) {
    let targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom,
      },
      windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight,
      };

    if (
      targetPosition.bottom > windowPosition.top &&
      targetPosition.top < windowPosition.bottom &&
      targetPosition.right > windowPosition.left &&
      targetPosition.left < windowPosition.right
    ) {
      partnersBg.classList.add("active");
      stickyBg.classList.add("active");
      stickyBg.classList.add("page-section-5");
      footerBg.classList.add("active");
    } else {
      partnersBg.classList.remove("active");
      stickyBg.classList.remove("active");
      stickyBg.classList.remove("page-section-5");
      footerBg.classList.remove("active");
    }
  };

  window.addEventListener("scroll", function () {
    Visible(element);
  });

  Visible(element);
}

// hide header

let header = document.querySelector(".header__container");
scrollPrev = 0;

window.addEventListener("scroll", function () {
  let scrolled = document.documentElement.scrollTop;

  if (scrolled > 200 && scrolled > scrollPrev) {
    header.classList.add("active");
    burger.classList.remove("active");
    headerMenu.classList.remove("active");
  } else {
    header.classList.remove("active");
  }
  scrollPrev = scrolled;
});

if (document.querySelector(".index-body")) {
  let observerThumb = document.querySelector(".observer-scroll-thumb");
  //  change menu scroll
  function getChangeMenu(event) {
    let sections = document.querySelectorAll(".page-section-change");
    let scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    for (let i = 0; i < sections.length; i++) {
      if (sections[0].classList.contains("active")) {
        observerThumb.style.transform = "translateY(0px)";
        observerThumb.textContent = "01/07";
      } else if (sections[1].classList.contains("active")) {
        observerThumb.style.transform = "translateY(30px)";
        observerThumb.textContent = "02/07";
      } else if (sections[2].classList.contains("active")) {
        observerThumb.style.transform = "translateY(60px)";
        observerThumb.textContent = "03/07";
      } else if (sections[3].classList.contains("active")) {
        observerThumb.style.transform = "translateY(90px)";
        observerThumb.textContent = "04/07";
      } else if (sections[4].classList.contains("active")) {
        observerThumb.style.transform = "translateY(120px)";
        observerThumb.textContent = "05/07";
      } else if (sections[5].classList.contains("active")) {
        observerThumb.style.transform = "translateY(150px)";
        observerThumb.textContent = "06/07";
      } else if (sections[6].classList.contains("active")) {
        observerThumb.style.transform = "translateY(180px)";
        observerThumb.textContent = "07/07";
      }
      let currLink = sections[i];
      let val = currLink.getAttribute("href");
      let refElement = document.querySelector(val);
      if (
        refElement.offsetTop <= scrollPos &&
        refElement.offsetTop + refElement.offsetHeight > scrollPos
      ) {
        document
          .querySelector(".page-section-change")
          .classList.remove("active");
        currLink.classList.add("active");
      } else {
        currLink.classList.remove("active");
      }
    }
  }

  window.document.addEventListener("scroll", getChangeMenu);
}

if (document.querySelector(".marketing-body")) {
  document
    .querySelector(".portfolio-visible__dark-bg-right .header__link-btn")
    .addEventListener("click", getHidePosts);
  function getHidePosts() {
    document.querySelector(".portfolio__hide").classList.add("active");
  }

  let element = document.querySelector("#changeAnim");
  let Visible = function (target) {
    let targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom,
      },
      windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight,
      };

    if (
      targetPosition.bottom > windowPosition.top &&
      targetPosition.top < windowPosition.bottom &&
      targetPosition.right > windowPosition.left &&
      targetPosition.left < windowPosition.right
    ) {
      document.querySelector(".sub-offer__bg").classList.add("active");
      let animateScrollJs = document.querySelectorAll(".animate-js-scroll");
      for (let i of animateScrollJs) {
        i.classList.add("active");
      }
    } else {
      document.querySelector(".sub-offer__bg").classList.remove("active");
      let animateScrollJs = document.querySelectorAll(".animate-js-scroll");
      for (let i of animateScrollJs) {
        i.classList.remove("active");
      }
    }
  };

  window.addEventListener("scroll", function () {
    Visible(element);
  });

  Visible(element);

  (function () {
    function greetingBlockAnimation() {
      document.querySelector(".left-anim-video").classList.add("active");
      document.querySelector(".right-anim-video").classList.add("active");
   
      function getOpVideo1() {


        document.querySelector(".video-section__filter").animate([
          { background: 'rgba(0,93,196,0.6)' },
          { background: 'rgba(0,93,196,1)' },
          { background: 'rgba(0,93,196,0.6)' }
        ], {
          duration: 1500,
        })

      function getOpVideo() {
        document.querySelector(".video-section__filter").animate([
          { background: 'rgba(0,93,196,0.6)' },
          { background: 'rgba(0,93,196,1)' },
          { background: 'rgba(0,93,196,0.6)' }
        ], {
          duration: 2000,
        })
      }

      setInterval(getOpVideo, 20000);
    }
     

      setTimeout(getOpVideo1, 19500);

    }

    window.addEventListener("load", greetingBlockAnimation);
  })();

 
  

}
