import footer_main from "../components/footer.js"
document.getElementById("footer_main").innerHTML=footer_main()



import navbar_main from "../components/navbar.js"
document.getElementById("navbar_main").innerHTML=navbar_main();



var ProductList = [{
    image: "https://images.urbndata.com/is/image/Anthropologie/45407869AA_066_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Printfresh Organic Quilt",
    price: 278.00,
    price2: 338.00,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/45407869AA_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 1,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/45457426AA_035_b11?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Luxe Linen Blend Pillow",
    price: 54.40,
    price2: 94.40,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/45457426AA_035_b10?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 2,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/45407866AD_080_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Printfresh Organic Sheet Set",
    price: 68.00,
    price2: 278.00,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/45407866AD_080_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 3,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/67097824_014_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Textured Marisol Quilt",
    price: 248.00,
    price2: 298.00,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/67097824_014_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 4,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/45457888AA_006_b11?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Tasseled Teague Cotton-Linen Pillow",
    price: 78.00,
    price2: 98.00,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/45457888AA_006_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 5,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/66937202_095_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Birdie Quilt",
    price: 178.00,
    price2: 228.00,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/66937202_095_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 6,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/65858854_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Floral Printed Throw Blanket",
    price: 128.00,
    price2: 150.00,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/65858854_066_b3?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 7,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/45407802AA_067_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Ruffled Organic Spa Sateen Duvet Cover",
    price: 248.00,
    price2: 298.00,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/45407869AA_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 8,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/45407840AA_095_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Matteo Organic Percale Duvet Cover",
    price: 158.00,
    price2: 188.00,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/45407840AA_095_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 9,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/66932609_014_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Woven Blocked Stripe Throw Blanket",
    price: 98.00,
    price2: 200.00,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/66932609_014_b3?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 10,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/66923749_011_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Textured Marta Pillow",
    price: 68.00, 
    price2: 78.00,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/66923749_011_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 11,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/65858854_031_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Floral Printed Throw Blanket",
    price: 128.00,
    price2: 200.00,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/65858854_031_b3?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 12,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/45407795AA_067_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Embroidered Eleni Duvet Cover",
    price: 248.00, 
    price2: 298.00,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/45407795AA_067_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 13,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/45407180AD_071_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Organic Percale Printed Sheet Set",
    price: 48.00,
    price2: 198.00,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/45407180AD_071_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 14,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/45407838AA_095_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Marguerite Organic Sateen Duvet Cover",
    price: 178.00, 
    price2: 228.00,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/45407838AA_095_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 15,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/65081325_066_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Upcycled Vendima Throw Blanket",
    price: 98.00,
    price2: 121.00,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/51561926_007_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 16,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/45457831AA_066_b10?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Suillivan Easy Care Pillow",
    price: 78.00,
    price2: 200.00,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/45457831AA_066_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 17,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/45407355AA_011_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Lustered Velvet Alastair Quilt",
    price: 228.00, 
    price2: 278.00,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/45407355AA_011_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 18,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/51561926_007_b10?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Sophie Faux Fur Throw Blanket",
    price: 98.00,
    price2: 300.00,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/51561926_007_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 19,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/45407437AD_066_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Organic Sateen Printed Sheet Set",
    price: 58.00, 
    price2: 228.00,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/45407833AA_059_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 20,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/45407833AA_059_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Organic Sateen Printed Sheet Set",
    price: 168.00, 
    price2: 218.00,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/45407838AA_095_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 21,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/45407841AA_011_b8?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Organic Sateen Printed Sheet Set",
    price: 378.00, 
    price2: 428.00,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/45407841AA_011_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 22,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/45457836AA_040_b10?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Organic Sateen Printed Sheet Set",
    price: 118.00, 
    price2: 158.00,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/45457836AA_040_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 23,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/45407835AD_040_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Organic Sateen Printed Sheet Set",
    price: 58.00, 
    price2: 218.00,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/45407835AD_040_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 24,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/65432916_012_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Organic Sateen Printed Sheet Set",
    price: 298.00, 
    price2: 350.00,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/65432916_012_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 25,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/45407797AA_099_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Organic Sateen Printed Sheet Set",
    price: 328.00, 
    price2: 378.00,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/45407797AA_099_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 26,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/45457800AA_066_b11?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Organic Sateen Printed Sheet Set",
    price: 44.95, 
    price2: 54.95,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/45457800AA_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 27,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/45407699AA_061_b10?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Organic Sateen Printed Sheet Set",
    price: 224.95, 
    price2: 270.00 ,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/45407699AA_061_b4?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 28,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/64540768_050_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Organic Sateen Printed Sheet Set",
    price: 88.00, 
    price2: 138.00,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/64540768_050_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 29,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/45407796AA_011_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Organic Sateen Printed Sheet Set",
    price: 278.00, 
    price2: 318.00,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/45407796AA_011_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 30,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/45407830AA_095_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Organic Sateen Printed Sheet Set",
    price: 178.00, 
    price2: 218.00,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/45407830AA_095_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 31,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/45407812AA_010_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Organic Sateen Printed Sheet Set",
    price: 228.00, 
    price2: 308.00,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/45407812AA_010_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 32,
},
];

window.addEventListener("load", function () {
    display(ProductList)
})
function display(list) {
    // console.log("inside function");

    document.getElementById("sh-product").innerHTML = "";
    // var parea = document.getElementsByClassName("sh-parea");

    for (let i = 0; i < ProductList.length; i++) {
        // console.log(ProductList[i]);

        var div = document.createElement("div");
        div.setAttribute("id", "sh-mainDiv");
        div.addEventListener("click",function(){
            addLocal(ProductList[i])
        })
        function addLocal(data){
            localStorage.setItem("data",JSON.stringify(data));
            window.location.href="bed-product-detail.html"
        }
        var img = document.createElement("img");
        img.setAttribute("class", "sh-image1");
        img.setAttribute("id", `sh-image ${ProductList[i].id}`)
        img.src = ProductList[i].image;
        img.addEventListener("mouseenter", function () {
            mouseEnterfunction(ProductList[i]);
        })

        img.addEventListener("mouseout", function () {
            mouseOutfunction(ProductList[i]);
        })

        var name = document.createElement("p");
        name.setAttribute("id", "sh-name")
        name.textContent = ProductList[i].name;

        var price = document.createElement("p");
        price.setAttribute("id", "sh-price");
        price.textContent = `$${ProductList[i].price} - $${ProductList[i].price2}`;

        div.append(img, name, price);

        document.querySelector("#sh-product").append(div);
    }
}
function mouseEnterfunction(product) {
    // console.log("onhover")

    const img = document.getElementById(`sh-image ${product.id}`)
    img.src = product.hover_image;
}
function mouseOutfunction(product) {
    // console.log("onhover")

    const img = document.getElementById(`sh-image ${product.id}`)
    img.src = product.image;
}

document.getElementById("sh-sort").addEventListener("change",shipra);
function shipra() {
    var selected = document.getElementById("sh-sort").value;
    var all = ProductList;
    if (selected == "low") {
        all = all.sort(function (a, b) {
            console.log(a, b)
            return a.price - b.price
        })
    }

    if (selected == "high") {
        all = all.sort(function (a, b) {
            console.log(a, b)
            return b.price - a.price
        })
    }
    display(all)
}



// document.querySelector("#filter").addEventListener("change",handleBrandFilter);
// function handleBrandFilter() {
//     var selected = document.querySelector("#filter").value;
//     console.log(selected);
//     if(selected=="1")
//     console.log("shipra")
//     var newdata = ProductList.filter(function (el) {
//         console.log(newdata);
//     return el.price >= 50 &&
//     el.price <=100;
//     });
// display(newdata);
// } 
var array1 ;

document.querySelector("#filter").addEventListener("change", handleBrandFilter);
function handleBrandFilter() {
    var selected = document.querySelector("#filter").value;
    array1=[];
    // console.log(selected);
    if (selected == "1") {
        array1.innerHTML=null;
        for (var i = 0, length = ProductList.length; i < length; i++) {
            document.querySelector("#sh-product").innerHTML="";
            var current = ProductList[i];
            // console.log(current)
            if (current.price >= 50.00 && current.price <= 100.00) {
                
                array1.push(ProductList[i]);

            }
        }
        console.log(array1);
        displayfilter(array1)
       
    }
    array1=[];
    if (selected == 2) {
        array1.innerHTML=null;

        for (var i = 0, length = ProductList.length; i < length; i++) {
            document.querySelector("#sh-product").innerHTML="";
            var current = ProductList[i];
           
            if (current.price >= 101.00 && current.price <= 200.00) {
               
                array1.push(ProductList[i]);
            }
        }
        console.log(array1);
        displayfilter(array1)
    }
    array1=[];
    if (selected == 3) {
        array1.innerHTML=null;
        for (var i = 0, length = ProductList.length; i < length; i++) {
            document.querySelector("#sh-product").innerHTML=null;
            var current = ProductList[i];
           
            if (current.price >= 201.00 && current.price <= 300.00) {
              
                array1.push(ProductList[i]);
            }
        }

        displayfilter(array1)
        console.log(array1);
    }

    function displayfilter(array1) {
           
    
        for (let i = 0; i < array1.length; i++) {
            console.log(array1[i]);
           
            var div = document.createElement("div");
            div.setAttribute("id", "sh-mainDiv");
    
            var img = document.createElement("img");
            img.setAttribute("class", "sh-image1");
            img.setAttribute("id", `sh-image ${array1[i].id}`)
            img.src = array1[i].image;
            img.addEventListener("mouseenter", function () {
                mouseEnterfunction(array1[i]);
            })
    
            img.addEventListener("mouseout", function () {
                mouseOutfunction(array1[i]);
            })
    
            var name = document.createElement("p");
            name.setAttribute("id", "sh-name")
            name.textContent = array1[i].name;
    
            var price = document.createElement("p");
            price.setAttribute("id", "sh-price");
            price.textContent = `$${array1[i].price} `;
    
            div.append(img, name, price);
           
            document.querySelector("#sh-product").append(div);
    
        }
    }
   


}

let email=JSON.parse(localStorage.getItem("email"))
let otp=JSON.parse(localStorage.getItem("otp"))
if(email !== null  && otp !==null){
    document.getElementById("right").innerHTML=`<i class="fa fa-user" aria-hidden="true"></i>${"  "}My Profile`
}


// function goto() {
//     window.location.href = "bed-product-detail.html"
// }