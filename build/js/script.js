"use strict";

const header = document.querySelector(".header");
const openBtn = document.querySelector(".header__button");
const menuEl = document.querySelector(".header__nav");
const headerNavLinks = document.querySelectorAll(".nav__link");

const gap = 100;


if (header) {
  header.classList.remove("header--no-js");

  openBtn.addEventListener("click", () => {
    header.classList.toggle("header--open");
  });

  headerNavLinks.forEach((link) => {
    link.addEventListener("click", () =>
      header.classList.remove("header--open")
    );
  });
}

if (headerNavLinks) {
  headerNavLinks.forEach((link) => {
    link.addEventListener("click", (scrollEvent) => {
      scrollEvent.preventDefault();
      const id = scrollEvent.currentTarget.getAttribute("href").slice(1);
      const element = document.getElementById(id);
      let position = element.offsetTop - gap;

      window.scrollTo({
        left: 0,
        top: position,
        behavior: "smooth",
      });
    });
  });
}

