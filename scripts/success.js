import footer_main from "../components/footer.js";
document.getElementById("footer_main").innerHTML=footer_main();

import navbar_main from "../components/navcheck.js"
document.getElementById("navbar_main").innerHTML=navbar_main();


document.getElementById("ord").innerText= `Your Order Id is : ANT${Math.floor(Math.random() * 999999) + 111111}EW`
myFunction()
let timeout;

function myFunction() {
timeout = setTimeout(alertFunc, 1000);
}

function alertFunc() {
// window.location.href="index.html"
document.getElementById("redirect").innerText="Redirecting you to home page, Please wait for 3 seconds..."
timeout = setTimeout(alert2Func, 1000)
}

function alert2Func(){
    document.getElementById("redirect").innerText=null
    document.getElementById("redirect").innerText="Redirecting you to home page, Please wait for 2 seconds.."
    timeout = setTimeout(alert3Func, 1000)
}

function alert3Func(){
    document.getElementById("redirect").innerText=null
    document.getElementById("redirect").innerText="Redirecting you to home page, Please wait for 1 second."
    window.location.href="index.html"
}