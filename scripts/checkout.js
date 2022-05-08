    import navbar_main from "../components/navcheck.js"
    document.getElementById("navbar_main").innerHTML=navbar_main();


    let sumdiv = document.getElementById("amount")


    let text1 = document.createElement("h3")
    text1.innerText= "Order Summary"
    document.getElementById("order").append(text1)

    let box = document.createElement("div")
    box.id="total"
    let table = document.createElement('table');
    let tbody = document.createElement('tbody');

    let data = JSON.parse(localStorage.getItem("cart_Info"))
    console.log(data[0].price)
     let pri= data[0].price
    let sum = Number(pri)
    console.log(sum)
    let row1 = document.createElement('tr');
    let row1col1 = document.createElement('td');
    row1col1.innerText= "Subtotal:"
    let row1col2 = document.createElement('td');
    row1col2.innerText="$"+sum
    row1.appendChild(row1col1)
    row1.appendChild(row1col2)
    tbody.append(row1)


    let row2 = document.createElement('tr');
    let row2col1 = document.createElement('td');
    row2col1.innerText= "Shipping:"
    let row2col2 = document.createElement('td');
    row2col2.innerText="TBD"
    row2.appendChild(row2col1)
    row2.appendChild(row2col2)
    tbody.append(row2)


    let row3 = document.createElement('tr');
    let row3col1 = document.createElement('td');
    row3col1.innerText= "Tax :"
    let row3col2 = document.createElement('td');
    row3col2.innerText="$0.00"

    row3.appendChild(row3col1)
    row3.appendChild(row3col2)
    tbody.append(row3)

    let row35 = document.createElement('tr');
    row35.id="disco"
    
    tbody.append(row35)
    
    let row4 = document.createElement('tr');
    let row4col1 = document.createElement('td');
    row4col1.innerText="Total :"
    let row4col2 = document.createElement('td');
    row4col2.innerText="$"+sum
    row4col2.id="price"

    row4.appendChild(row4col1)
    row4.appendChild(row4col2)
    tbody.append(row4)

    let btn = document.createElement("button")
    btn.innerText="Confirm Order"
    btn.id="btnship"
    btn.addEventListener("click",confirm)
    let lin = document.createElement("hr")
    lin.id="line"
    lin.id = "hr1"
 
    let pflex = document.createElement("div")
    pflex.id="pflex"
    pflex.addEventListener("click",pr)
    let p = document.createElement("p")
    p.innerText="Promo Code"
    p.id = "promo"
    
    let span = document.createElement("h1")
    span.innerText="+"
    span.id="spa"
    pflex.append(p,span)
    
    box.append(tbody,btn)
    sumdiv.append(box,lin,pflex)

    function confirm(){
        let con = document.getElementById("con").value;
         let fname = document.getElementById("fname").value;
         let lname = document.getElementById("lname").value;
         let add = document.getElementById("add").value;
         let hno = document.getElementById("hno").value;
         let city1= document.getElementById("city1").value;
         let dist=document.getElementById("dist").value;
         let zip =document.getElementById("zip").value;
         let mno =document.getElementById("mno").value;

        if(con != "" ||fname != ""||lname != ""||add != ""||hno != ""||city1 != ""||dist != ""||zip != ""||mno != "" ){

            let loc = []
            let obj = {
                con : document.getElementById("con").value,
                fname : document.getElementById("fname").value,
                lname : document.getElementById("lname").value,
                add : document.getElementById("add").value,
                hno : document.getElementById("hno").value,
                city1 : document.getElementById("city1").value,
                dist :document.getElementById("dist").value,
                zip : document.getElementById("zip").value,
                mno : document.getElementById("mno").value,
        
            }
            loc.push(obj)
            console.log(loc)
            localStorage.setItem("address",JSON.stringify(loc))
                window.location.href="payment.html"

        }
else{
    alert("Invalid Address")
}
    
    }

    let count = 0
    // console.log("yes")
    function pr(){
        // document.getElementById("pbox").innerHTML=null
        count++
        console.log(count)
    if (count % 2 != 0){
        
        
        // document.getElementById("pbox").innerHTML=null
        
        let pbox = document.createElement("div")
        pbox.id="pbox"
        let inp = document.createElement("input")
        inp.placeholder="Type Promo code"
        inp.id="pin"

        let btn = document.createElement("button")
       btn.addEventListener("click",masai30)
        btn.innerText="Apply"
        btn.id = "pbtn"
        
        
        document.getElementById("spa").innerHTML="-"
        pbox.append(inp,btn)
        document.getElementById("phide").append(pbox)
        console.log("abd1")
       
    }
    else if (count%2===0){
       let x = document.getElementById("phide").innerHTML=null
       document.getElementById("spa").innerHTML="+"
    //    x.style.display=="none"
        // count --
        console.log("abd2")
    }
}

function masai30(){
    row35.innerHTML=null
    document.getElementById("discount").innerHTML=null
    console.log("yes")
    let cd= document.getElementById("pin").value
    
    let dis = Math.floor((pri/100)*70)
    console.log(dis)
    localStorage.setItem("dis",JSON.stringify(dis))
    if(cd === "masai30"){
        document.getElementById("price").innerText="$"+dis

        let discount=document.createElement("h3")
        discount.innerText="Congratulations you got 30% Discount"
        document.getElementById("discount").append(discount)


            let row35col1 = document.createElement('td');
            // row35col1.id="disco"
            row35col1.id="red"
            row35col1.innerText= "Discount:"
            let row35col2 = document.createElement('td');
            row35col2.id="Strike"
            row35col2.innerText="$"+Math.floor((pri/100)*30)
            // row35col2.id="discoprice"
            
            row35.appendChild(row35col1)
            row35.appendChild(row35col2)
            let z = Math.floor((pri/100)*30)
            let d = "Discount"
            let arr = [d,z]
            localStorage.setItem("Discount",JSON.stringify(arr))
            // tbody.append(row35)
        // document.getElementById("disco").innerText= "Discount"
        // document.getElementById("discoprice").innerText="$"+Math.floor((pri/100)*30)

    }
}
   




    import footer_main from "../components/footer.js";
    document.getElementById("footer_main").innerHTML=footer_main();