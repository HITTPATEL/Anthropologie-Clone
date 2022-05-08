
    let sumdiv = document.getElementById("amount")


    let text1 = document.createElement("h3")
    text1.innerText= "Orderp Summary"
    document.getElementById("order").append(text1)

    let box = document.createElement("div")
    box.id="total"
    let table = document.createElement('table');
    let tbody = document.createElement('tbody');
    let datap = JSON.parse(localStorage.getItem("cart_Info"))
    // console.log(datap[0].price)
     let pri= datap[0].price
    let sum = Number(pri)

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
    row3col1.innerText= "Tax"
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
    btn.innerText="Confirm Order"
    btn.id="btnship"
    btn.addEventListener("click",confirm)
    let lin = document.createElement("hr")
    lin.id = "hr1"
    
    let pflex = document.createElement("div")
    pflex.id="pflex"
    // pflex.addEventListener("click",pr)
    let p = document.createElement("p")
    p.innerText="Promo Code"
    p.id = "promo"
    
    let span = document.createElement("h1")
    span.innerText="+"
    span.id="spa"
    pflex.append(p,span)
    
    box.append(tbody,btn)
    sumdiv.append(box,lin,pflex)


    
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
   
    let billdiv = document.getElementById('billing')
    // let addresss = JSON.parse(localStorage.getItem("address"))
    // console.log('addresss:', addresss)

    let data1 = JSON.parse(localStorage.getItem("address"))
    console.log(data1)
    let data = data1[0]
    console.log(data)
    let h4 = document.createElement("h4")
    h4.innerText= " Billing Address"
    let namevid= document.createElement("div")
    let n = document.createElement("p")
    n.innerText= data.fname;
    let m = document.createElement('p')
    m.innerText =data.lname
    namevid.append(n,m)
    namevid.id="flex"

    let h_no = document.createElement("p")
    h_no.innerText=data.hno

    let street = document.createElement("p");
    street.innerText=data.add

 
    let ct = document.createElement("div")
    ct.id="flex"
    
    let ctry1 = document.createElement("p")
    let ctry2 = document.createElement("p")
    let ctry3 = document.createElement("p")
    ctry1.innerText=`${data.city1},`;
    ctry2.innerText=`${data.dist},`
    ctry3.innerText=data.zip
    ct.append(ctry1,ctry2,ctry3)
    
    let num = document.createElement("p")
    num.innerText=data.mno
    let change = document.createElement("p")
    change.id="change"
    
    change.innerText="Change"
    change.addEventListener("click", pickup)
    billdiv.append(h4,namevid,h_no,street,ct,num,change)
    function pickup(){
        window.location.href="checkout.html"
    }


    function confirm(){
        let card = document.getElementById("card").value
        let cardlen = card.length
        let cvv = document.getElementById("cvv").value
        let cvlen = cvv.length
        if(cardlen===16 && cvlen ===3){
            window.location.href="success.html"
        }
        else{
            alert("card details is not valid")
        }
       
        
    }
    import footer_main from "../components/footer.js";
    document.getElementById("footer_main").innerHTML=footer_main();

    import navbar_main from "../components/navcheck.js"
    document.getElementById("navbar_main").innerHTML=navbar_main();


