import "./style.css"
import { home } from "./homePage";
import { contact } from "./contact";
import { menu } from "./menu";


console.log("hi");
const content = document.querySelector("#content");
content.appendChild(home);

const homePageButton = document.querySelector(".homePage");
console.log(home);
homePageButton.addEventListener('click', () => {
    content.innerHTML = "";
    content.appendChild(home);
});

const contactButton = document.querySelector(".contact");
contactButton.addEventListener('click', () => {
    content.innerHTML = "";
    content.appendChild(contact);
});

const menuButton = document.querySelector(".menu");
menuButton.addEventListener('click', () => {
    content.innerHTML = "";
    content.appendChild(menu);
});