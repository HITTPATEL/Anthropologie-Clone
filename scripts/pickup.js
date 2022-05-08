let sumdiv = document.getElementById("amount")
    // sumdiv.id="code"

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
    // for(let i=0;i<data.length;i++){
    //     sum= sum+pri[i]
    // }
    console.log(sum)
    let row1 = document.createElement('tr');
    let row1col1 = document.createElement('td');
    row1col1.innerText= "Subtotal"
    let row1col2 = document.createElement('td');
    row1col2.innerText= "$"+sum
    row1.appendChild(row1col1)
    row1.appendChild(row1col2)
    tbody.append(row1)


    let row2 = document.createElement('tr');
    let row2col1 = document.createElement('td');
    row2col1.innerText= "Shipping"
    let row2col2 = document.createElement('td');
    row2col2.innerText="TBD"
    row2.appendChild(row2col1)
    row2.appendChild(row2col2)
    tbody.append(row2)


    let row3 = document.createElement('tr');
    let row3col1 = document.createElement('td');
    row3col1.innerText= "Estimated Tax"
    let row3col2 = document.createElement('td');
    row3col2.innerText="$0.00"

    row3.appendChild(row3col1)
    row3.appendChild(row3col2)
    tbody.append(row3)
    let arr1 = JSON.parse(localStorage.getItem("Discount"))
    if(arr1!=""){
        let row35 = document.createElement('tr');
        let row35col1 = document.createElement('td');
        row35col1.innerText= arr1[0]
        row35col1.id="red"
        let row35col2 = document.createElement('td');
        row35col2.innerText="$"+arr1[1]
        
        row35col2.id="strike"

        row35.appendChild(row35col1)
        row35.appendChild(row35col2)
        tbody.append(row35)
    }
    

    let row4 = document.createElement('tr');
    let row4col1 = document.createElement('td');
    row4col1.innerText="Total"
    let row4col2 = document.createElement('td');
    row4col2.innerText="$"+sum

    row4.appendChild(row4col1)
    row4.appendChild(row4col2)
    tbody.append(row4)

    let btn = document.createElement("button")
    btn.innerText=" SHIP TO THIS ADDRESS"
    btn.id="btnship"
    btn.addEventListener("click",payment)
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
    
    function payment(){
        console.log("yes")
        window.location.href="payment.html"
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

import footer_main from "../components/footer.js";
    document.getElementById("footer_main").innerHTML=footer_main();

    import navbar_main from "../components/navcheck.js"
    document.getElementById("navbar_main").innerHTML=navbar_main();