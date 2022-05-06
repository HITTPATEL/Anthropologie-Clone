// function clickme(smallimg) {
//     var fullimg = document.getElementById("imagebox");
//     fullimg.src = smallimg.src;
// }

// document.getElementById("siteheading-img").addEventListener("click", gohome);

// function gohome() {
//     window.location.href = "landingpage.html"
// }


import footer_main from "../components/footer.js"
document.getElementById("footer_main").innerHTML=footer_main()



import navbar_main from "../components/navbar.js"
document.getElementById("navbar_main").innerHTML=navbar_main();


let email=JSON.parse(localStorage.getItem("email"))
let otp=JSON.parse(localStorage.getItem("otp"))
if(email !== null  && otp !==null){
    document.getElementById("right").innerHTML=`<i class="fa fa-user" aria-hidden="true"></i>${"  "}My Profile`
}