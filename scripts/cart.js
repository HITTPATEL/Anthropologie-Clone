
// navbar-foorter

import navbar_main from "../components/navbar.js";
document.getElementById("navbar_main").innerHTML=navbar_main();

import footer_main from "../components/footer.js"
document.getElementById("footer_main").innerHTML=footer_main()


let email=JSON.parse(localStorage.getItem("email"))
let otp=JSON.parse(localStorage.getItem("otp"))
if(email !== null  && otp !==null){
    document.getElementById("right").innerHTML=`<i class="fa fa-user" aria-hidden="true"></i>${"  "}My Profile`
}








// Append


//cart- Total


// cartData == Array
// cart_Data == object

var cartData = []
var  cart_Data=JSON.parse(localStorage.getItem("data")) ;
  cartData.push(cart_Data)

console.log(cartData);
 console.log(cart_Data.price);

// var total = cartData.reduce(function (sum,elem,index,arr) {
//     return  sum + Number(elem.price);
// },0);


var length = cartData.length;
console.log(length);



if( length == "0"){
    document.getElementById("sw-subtotal").innerText = "$0.00"; 
    document.getElementById("sw-subtotal-1").innerText = "$0.00";
}
else{
  console.log(cart_Data.price);
document.getElementById("sw-subtotal").innerText = `$ ${cart_Data.price}`; 
document.getElementById("sw-subtotal-1").innerText =  `$ ${cart_Data.price}`;
}






// //append data






let cart_price = [];

cartData.map(function(elem,index) {

    var box=document.createElement("div");
     box.setAttribute("id","sw-box")
   
    var img_div=document.createElement("div");
       img_div.setAttribute("id","sw-img_div")

       var img = document.createElement("img");
       img.src = elem.image;

       img_div.append(img)

    var info_div=document.createElement("div");
    info_div.setAttribute("id","sw-info_div")   
   
       var name = document.createElement("p");
       name.textContent = elem.name;

       var style = document.createElement("p");
       style.textContent ="Style: # 45407869AA";
   
       var color = document.createElement("p");
       color.textContent =`Color: Multicolor`;

       var size = document.createElement("p");
       size.textContent ="Size:Twin ";


       var edit = document.createElement("button")
       edit.innerText="Edit";
       edit.setAttribute("id","sw-edit-btn")
   
       info_div.append(name,style,color,size,edit) 
   
       var price_div=document.createElement("div");
       price_div.setAttribute("id","sw-price_div")

       var price = document.createElement("p");
       price.innerText =`$${elem.price}`;

       var quantity = document.createElement("p");
       quantity.innerText ="1";


       var total_price = document.createElement("p");
       total_price.innerText =`$${elem.price}`;

  
       price_div.append(price,quantity,total_price);

       box.append(img_div, info_div,price_div);

       var remove_div=document.createElement("div");
       remove_div.setAttribute("id","sw-remove_div")  
       
     var remove_btn = document.createElement("button");
     remove_btn.innerText="Remove";
     remove_btn.setAttribute("id","sw-remove_btn")

     remove_btn.addEventListener("click", function (){
         removeItem(elem, index);
     });
   

     var save_btn = document.createElement("button");
     save_btn.innerText="Save for Later";
     save_btn.setAttribute("id","sw-save_btn")

     remove_div.append(remove_btn,save_btn ); 
   
     document.getElementById("sw-append-container").append(box,remove_div);

     cart_price.push(total_price)
     localStorage.setItem("cart_Info",JSON.stringify(cartData));
       
   });

   
   function  removeItem(elem, index){
       console.log(elem, index);
       cartData.splice(index, 1);
   
       localStorage.setItem("cart_Info",JSON.stringify(cartData));
       window.location.reload();
   }




// for promo button

let button = document.getElementById("sw-promo-button")

let box = document.getElementById("sw-promo-div");
box.style.display = 'none'

button.addEventListener("click",() =>{

 
   if( box.style.display == "block"){
       box.style.display = 'none';
   }

   else{
      box.style.display = 'block'; 
   }


})





// for slide show


let flag=0;
let range=4;

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
