let email=JSON.parse(localStorage.getItem("email"))
document.getElementById("show_email").innerHTML=`${email} <span id="h_sp">Edit</span>`
// console.log(email)
let otp=JSON.parse(localStorage.getItem("otp"))
// console.log(otp)
alert(`Your otp is ${otp}`)

document.getElementById("h_btn1").addEventListener("click",myFun)
function myFun(){
  
    let entered_otp=document.getElementById("h_email").value; 
    // console.log(entered_otp)
    // console.log(otp)
    if(Number(entered_otp)===Number(otp)){
        alert("Login Success")
        window.location.href="index.html"
    }
    else{
        alert("Wrong OTP")
 
    }
}