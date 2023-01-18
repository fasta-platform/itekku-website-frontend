import $ from "jquery";

export const addFixNav = () => {
  $(window).scroll(function () {
    var sticky = $("#top_header"),
      scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass("header_fixed");
    else sticky.removeClass("header_fixed");
  });
};

export const addFixFormHeader = () => {
  $(window).scroll(function () {
    var sticky = $("#formHeader"),
      arrorSticky = $("#arrowLeftt"),
      scroll = $(window).scrollTop();

    if (scroll >= 190) {
      sticky.addClass("fixedFormHeader");
      arrorSticky.addClass("displayYes");
    } else {
      sticky.removeClass("fixedFormHeader");
      arrorSticky.removeClass("displayYes");
    }
  });
};
