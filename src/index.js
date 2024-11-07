import { InitialiseDOM } from "./page-load.js";
import { MenuDOM } from "./menu-load.js";
import "./style.css";

const content = document.querySelector("#content");

const home = document.querySelector("nav button:nth-of-type(1)");
home.addEventListener("click", function () {
  content.innerHTML = "";
  InitialiseDOM();
});

const menu = document.querySelector("nav button:nth-of-type(2)");
menu.addEventListener("click", function () {
  content.innerHTML = "";
  MenuDOM();
});

const about = document.querySelector("nav button:nth-of-type(3)");
about.addEventListener("click", function () {
  content.innerHTML = "";
});

InitialiseDOM();
