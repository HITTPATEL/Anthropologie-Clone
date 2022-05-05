
let flag=0;
let range=5;

function controller(x){
    flag=flag+x;
    slideshow(flag);
}



slideshow(flag);

function slideshow(num){
   let slides=document.getElementsByClassName("slide"); 
//    console.log(slides)
if(num==slides.length){
    flag=0;
    num=0;
}
if(num < 0){
    flag=slides.length-1;
    num=slides.length-1;
}

for(let y of slides){
    y.style.display="none"
    y.style.order=0;
}
console.log(num)

for(let i=num;i<num+range;i++){
    let j=i%slides.length
    slides[j].style.display="block";
    slides[j].style.order=i;
}
   
}
window.controller=controller

import navbar_main from "../components/navbar.js";
document.getElementById("navbar_main").innerHTML=navbar_main();

import footer_main from "../components/footer.js"
document.getElementById("footer_main").innerHTML=footer_main()


let email=JSON.parse(localStorage.getItem("email"))
let otp=JSON.parse(localStorage.getItem("otp"))
if(email !== null  && otp !==null){
    document.getElementById("right").innerHTML=`<i class="fa fa-user" aria-hidden="true"></i>${"  "}My Profile`
}

