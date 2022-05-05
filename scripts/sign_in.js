let email=JSON.parse(localStorage.getItem("email"))
// console.log(email)


document.getElementById("h_btn1").addEventListener("click",myFun)
function myFun(){
    let entered_email=document.getElementById("h_email").value; 
    if(entered_email==email){
        alert("OTP sent to your registered mobile number and email")
        let otp=Math.floor(Math.random() * 999999) + 111111;
        // console.log(otp)
        localStorage.setItem("otp",JSON.stringify(otp))
        window.location.href="otp.html"
    }
    else{
        alert("You are not registered yet")
        window.location.href="#"
    }
}