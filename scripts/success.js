import footer_main from "../components/footer.js";
document.getElementById("footer_main").innerHTML=footer_main();

import navbar_main from "../components/navcheck.js"
document.getElementById("navbar_main").innerHTML=navbar_main();


document.getElementById("ord").innerText= `Your Order Id is : ANT${Math.floor(Math.random() * 999999) + 111111}EW`
myFunction()
let timeout;

function myFunction() {
timeout = setTimeout(alertFunc, 3000);
}

function alertFunc() {
window.location.href="index.html"
}

    
