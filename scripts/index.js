
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