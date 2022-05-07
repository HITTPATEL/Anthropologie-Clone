function navbar_main(){
    return `
    
    <div id="navbar">

    <div id="replacenavbar">
    <p class="replacenavbar">Same price. More time to pay!</p> <p class="replacenavbar" style=" color: rgb(63, 61, 61);;">Shop now. Pay with Klarna.</p> 
    
  <p class="replacenavbar" ><a href="#">learn more</a></p>  
</div>

    <div id="language">

        <div id="left"><button> English($)</button> </div>
        <div id="right"> <a href="#">
                <button> <span><i class="fa fa-user" aria-hidden="true"></i></span></a>
            <a href="sign_in.html">   Sign In/   </a>
            <a href="sign_in.html"> Sign Up      </a>
            </button>
        </div>
    </div>

</div>
    
<div id="search">
<div id="first">
    <div id="a">
        <h6> <a href="index.html">
                <img src="https://images.ctfassets.net/5de70he6op10/53ZOE4rRqrxcvv0hg2eSLV/a849085e5f600c618132be2475017746/anthro-logo.svg"
                    alt="">
            </a>
        </h6>
    </div>
    <div id="b">
        <h6> <a href="home.html">
                <img src="https://images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg"
                    alt="">
            </a>
        </h6>
    </div>

</div>

<div id="last">
    <div id="last1">
        <input id="search-box" type="text" placeholder="Search Anthropologie" >
        <span><i class="fa-solid fa-magnifying-glass"></i></span>
      
        
    </div>
        
      <span> <a href="cart.html" style="color: #4b8f9a;"><i class="fa fa-shopping-bag" aria-hidden="true"></i></a></span>
   
</div>
</div>

<div id="toggle">
<div>New!</div>
<div>Gifts for Mom</div>
<div> <a href="bed.html" style="text-decoration: none; color:black" >Bedding</a>
</div>
<div>Clothing</div>
<div>Shoes</div>
<div>Accessories</div>
<div>Home & Furniture</div>
<div>Beauty & Wellness</div>
<div>Garden & Outdoor</div>
<div>Weddings</div>
<div>Sale</div>
</div>
<hr>

 `
}

 export  default navbar_main



