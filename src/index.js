import './style.css';
import homeContent from './frontPage.js';
import aboutContent from './about.js';
import menuContent from './menu.js'
//import assetName from  Source;

console.log("Everthing is working!");

homeContent();

//Initialize the buttons
let homeBtn = document.querySelector("#home");
let aboutBtn = document.querySelector("#about");
let menuBtn = document.querySelector("#menu");

// Event Listeners
homeBtn.addEventListener("click", ()=>{
    homeContent();
});

aboutBtn.addEventListener('click', ()=>{
    aboutContent();
});

menuBtn.addEventListener('click', ()=>{
    menuContent();
});
