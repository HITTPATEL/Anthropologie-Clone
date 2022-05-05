document.getElementById("h_btn1").addEventListener("click",myFun)

function myFun(){
    let email=document.getElementById("h_email").value; 
    console.log(email)
    localStorage.setItem("email",JSON.stringify(email))
    alert("Registration Success")
    window.location.href="sign_in.html"
}