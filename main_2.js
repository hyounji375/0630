"use strict";

const click1 = document.getElementById("click1");
const submenu = document.querySelector(".submenu");

click1.addEventListener("click", () => {
  if (submenu.classList.contains("on")) {
    submenu.classList.remove("on");
  } else {
    submenu.classList.add("on");
  }
});

const click2 = document.getElementById("click2");
const submenu2 = document.getElementById("apper2");
click2.addEventListener("click", () => {
  if (submenu2.classList.contains("on")) {
    submenu2.classList.remove("on");
  } else {
    submenu2.classList.add("on");
  }
});

const click3 = document.getElementById("click3");
const submenu3 = document.getElementById("apper3");
click3.addEventListener("click", () => {
  if (submenu3.classList.contains("on")) {
    submenu3.classList.remove("on");
  } else {
    submenu3.classList.add("on");
  }
});

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const page = document.getElementsByClassName("page");
let btn_cnt = 0;

prev.addEventListener("click", () => {
  if (btn_cnt > 0) {
    btn_cnt--;
    window.scrollBy(0, -window.innerHeight);
  }
});
next.addEventListener("click", () => {
  if (btn_cnt < page.length - 1) {
    btn_cnt++;
    window.scrollBy(0, window.innerHeight);
  }
});
