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

export const getTimes = () => {
  let arr = [];
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 4; j++) {
      arr.push(`${i}:${j === 0 ? `00` : 15 * j}`);
    }
  }

  let d = new Date(),
    h = d.getHours(),
    m = 15 * Math.floor(d.getMinutes() / 15),
    stamp = `${h}:${m === 0 ? `00` : m}`;

  let pos = arr.indexOf(stamp);
  let timelist = [];

  if (pos > -1) {
    timelist = [...arr.slice(pos), ...arr.slice(0, pos)];
  }

  return timelist;
};

export const removeDashFromString = (str) => {
  var i,
    frags = str.split("-");
  for (i = 0; i < frags.length; i++) {
    frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
  }
  return frags.join(" ");
};

export const formateLists = (allLists) => {
  let lists = "";

  if (allLists && allLists.length) {
    let onlyLists = allLists.map((role) => role);
    let listString = onlyLists.toString();
    lists = removeDashFromString(listString);
  }

  return lists;
};
