$(document).ready(function () {
//   window.addEventListener("wheel", function(e){
//     e.preventDefault();
//   },{passive : false});

//   let $html = $("html");
//   let page = 1;
//   let lastPage = $("section").length;
//   $html.animate({scrollTop:0},10)

//   $(window).on("wheel", function(e) {
//     if($html.is(":animated")) return;
//     if(e.originalEvent.deltaY > 0) {
//         if(page == lastPage+1) return;
//         page++;
//     } else if(e.originalEvent.deltaY < 0) {
//         if(page == 1) return;
//         page--;
//     }
//     var posTop =(page-1) * $(window).height();
//     $html.animate({scrollTop : posTop});
// })

  let preScollTop = 0;
  let shBtn = $(".search");
  let header = $("#header");
  let shBar = $(".shbar");
  let btnHide = $(".search img:first");
  let cloBtn = $(".clo_btn");
  let nowScrollTop = $(window).scrollTop();
  console.log(nowScrollTop);

  //검색 버튼
  $(shBtn).click(function () {
    header.toggleClass("w");
    shBar.toggleClass("active");
    btnHide.toggleClass("hide");
    cloBtn.toggleClass("active");
    $('h1').toggleClass("active");
    $('.gnb').toggleClass("active");
    $('.total_menu').toggleClass("active");
    $('.lan_wrap').toggleClass("active");
    $('.util').toggleClass("active");
  });
  let liAll = $(".lan_wrap ul");
  $(".lan_wrap").click(function () {
    liAll.toggle("show");

    $("#header .util .lan_wrap").toggleClass("down");
  });

  //header 마우스오버
  $("#header nav").hover(
    function () {
      $("#header").addClass("down");
      shBtn.addClass("black");
    },
    function () {
      $("#header").removeClass("down");
      shBtn.removeClass("black");
    }
  );
  $(window).scroll(function () {
    let nowScrollTop = $(window).scrollTop();
    let shBtn = $(".util .search img");
    if (nowScrollTop > preScollTop) {
      $("header").addClass("active");
    } else if (nowScrollTop === 0) {
      $("#header nav").hover(
        function () {
          $("#header").addClass("down");
          shBtn.addClass("black");
        },
        function () {
          $("#header").removeClass("down");
          shBtn.removeClass("black");
        }
      );
      $("#header").removeClass("down");
      shBtn.removeClass("black");
    } else {
      $("header").removeClass("active");
      $("#header").addClass("down");
      shBtn.addClass("black");
      $("header nav").hover(function () {
        $("#header").addClass("down");
      });
    }
    preScollTop = nowScrollTop;
    
    //sec2
    const docScrollTop = $(document).scrollTop();
    // console.log(docScrollTop)
    if (docScrollTop >= 220) {
      $(".sec2 .cover").css({ width: "0", transition: "width 1s" });
    } else if (docScrollTop <= 330) {
      $(".sec2 .cover").css({ width: "50%", transition: "width 1s" });
    }

    //sec2-txt
    let sec2Top = $(".sec2").offset().top;
    if (docScrollTop >= (sec2Top * 80) / 100) {
      $(".sec2 .sec2_inner p").css({
        bottom: "50%",
        transform: "translateY(50%)",
        opacity: "1",
      });
    } else if (docScrollTop <= sec2Top) {
      $(".sec2 .sec2_inner p").css({ bottom: "40%", opacity: "0" });
    }
    //sec4,sec5 배경색
    $(".sec5").css({ backgroundColor: "var(--color-main--)" });
    const _scroll = function () {
      let p = (
        ($(window).scrollTop() +
          $(window).outerHeight() -
          $(".sec5").offset().top) /
        $(".sec5").outerHeight()
      ).toFixed(2);
      if (p >= 0.45 && p <= 1) {
        $(".sec4").css({ backgroundColor: "var(--color-main--)" });
        $(".sec4 .swiper-slide p").css({ color: "#fff" });
        $(".sec4 .swiper-slide span").css({ color: "#fff" });
        $(".sec5").css({ backgroundColor: "var(--color-main--)" });
      } else if (p < 0.5) {
        $(".sec4").css({ backgroundColor: "#f8f8f7" });
        $(".sec4 .swiper-slide p").css({ color: "#000" });
        $(".sec4 .swiper-slide span").css({ color: "#333" });
        $(".sec5").css({ backgroundColor: "#f8f8f7" });
      }
    };
    _scroll();
  });

  //sec3 클릭이벤트
  let leLi = $(".business_left li");
  $(leLi).click(function () {
    let i = $(this).index();
    let riList = $(".business_right li").eq(i);
    let riLi = $(".business_right li").eq(i).index();
    $(".business_right li")
      .not(":eq(" + i + ")")
      .fadeOut();
    $(".business_right li").eq(i).show();
  });
  //비즈니스 버튼 클릭 시 배경색 유지 시키고, 선택이 안될 때는 배경색 없애기
  $(leLi).click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  // swiper
    //-----main1 swiper
    const mySwiper = new Swiper(".swiper.main", {
      direction: "horizontal",
      loop: true,
      autoplay: {
        delay: 2500,
      },
      effect: "fade",
      speed: 2000,
      pagination: {
        el: ".swiper-pagination.main",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next.main",
        prevEl: ".swiper-button-prev.main",
      },
    });
  // sec4
  const sec4Swiper = new Swiper(".newsSwiper", {
    direction: "horizontal",
    loop: true,
    autoplay : {
      delay : 2000
    },
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next.news",
      prevEl: ".swiper-button-prev.news",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
    },
  });
  //sec5
  const sec5Swiper = new Swiper(".mediaSwiper", {
    direction: "horizontal",
    loop: true,
    // autoplay : {
    //   delay : 2000
    // },
    speed: 1000,
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next.media",
      prevEl: ".swiper-button-prev.media",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    breakpoints: {
      1279: {
        slidesPerView: 3,
      },
    },
  });

  // footer-icon
  let snsIcon = $("#footer .icon_wrap.y:first-child");
  let snsShow = $("#footer .icon_wrap.y img:last-child");
  let snsIcon2 = $("#footer .icon_wrap.i:first-child");
  let snsShow2 = $("#footer .icon_wrap.i img:last-child");

  snsIcon.hover(
    function () {
      snsShow.addClass("show");
    },
    function () {
      snsShow.removeClass("show");
    }
  );
  snsIcon2.hover(
    function () {
      snsShow2.addClass("show");
    },
    function () {
      snsShow2.removeClass("show");
    }
  );

  // 사이드메뉴
  let v = window.innerHeight;
  //
  $(".side_nav").hide();
  $(".m_side_nav").hide();

  //전체 메뉴 
  const totalMenu = $(".total_menu");
  totalMenu.click(function () {
    $(this).toggleClass("close");
    $("html").toggleClass("open_menu");

    allMenu()

    $(window).on("resize", function () {
      allMenu();
    });
  });

  function allMenu() {
    let windowWid = $(window).width();
    console.log(windowWid);

    if (windowWid > 1280 && totalMenu.hasClass("close")) {
      $(".side_nav").css({ top: "0", display: "flex" }),
        $(".m_side_nav").css({ display: "none" }),
        $("body").css({ overflow: "hidden" });
    } else if (windowWid <= 1280 && totalMenu.hasClass("close")) {
      $(".side_nav").css({ display: "none" }),
        $(".m_side_nav").css({ top: "0", display: "block" }),
        $("body").css({ overflow: "hidden" });
    } else {
      $(".side_nav").css({ top: -v, display: "none" }),
        $(".m_side_nav").css({ top: -v, display: "none" });
      $("body").css({ overflow: "visible" });
    }
  }
  //전체메뉴 모바일 
  let msideA = $(".m_side_nav .side_dep_wrap>a");
  let msideI = $(".side_dep_wrap i");
  let msideILength = $(".side_dep_wrap i").length;

  clicked = true;
  for (let i = 0; i < msideILength; i++) {
    $(".side_dep_wrap i")
      .eq(i)
      .click(function () {
        $(".m_side_nav .side_dep2").eq(i).toggle("show");
        return console.log(clicked);
      });
  }

});


