window.addEventListener("load",bindEvents);

var h1;
var cart;
var cartBox;
var open = false;
var buttons;
var countOfOrders;
var noOfOrders=0;


function bindEvents(){
    h1=document.querySelector("h1")
    h1.innerText = h1.innerText.concat(Object.Items.length);
    createIt();
    cart = document.querySelector(".cart");
    cart.addEventListener("click",showCartBox);
    cartBox=document.querySelector(".cartbox");
    buttons = document.querySelectorAll("button");
    for(let i=0;i<buttons.length;i++){
        buttons[i].addEventListener("click",addToCart);
    }
    countOfOrders = document.querySelector(".count");
}


function createIt(){
    for(let i=0;i<Object.Items.length;i++){
        var div = document.createElement("div");
        div.classList.add("row");
    document.querySelector("body").appendChild(div);
    var img = document.createElement("img");
    img.classList.add("col-sm-2");
    img.src=Object.Items[i].src;
    div.appendChild(img);
    var div2 = document.createElement("div");
    div2.classList.add("col-sm-4");
    div.appendChild(div2);
    var h3_1 = document.createElement("h3");
    h3_1.innerText = "Rs. " + Object.Items[i].price;
    div2.appendChild(h3_1);
    var h3_2 = document.createElement("h3");
    h3_2.innerText =  Object.Items[i].desc;
    div2.appendChild(h3_2);
    var p = document.createElement("p");
    p.innerText = Object.Items[i].quant;
    p.style.display = "none";
    div2.appendChild(p);

    var button = document.createElement("button");
    button.classList.add("col-sm-2");
    button.innerText="ADD TO CART";
    div.appendChild(button);
    }
}


function showCartBox(){
    if(!open){
cartBox.style.display="block";
open=!open;}
else{
cartBox.style.display="none";
open=!open;
}
}



function addToCart(){
    noOfOrders++;
    printCount();
    // console.log(this.previousElementSibling.firstElementChild.textContent);
    // <div class="object">
    //         <img src="images/item1.png" alt="">
    //         <p>asafasf</p>
    //         <p>asfasfg</p>
    //         <p class="quantity"> Quanitity :  </p>
    //     </div>
    if(cartBox.childNodes.length>1){
    for(let i=1;i<cartBox.childNodes.length;i++){
        // console.log(cartBox.childNode[i].lastElementChild.textContent);
        // console.log(++this.previousElementSibling.lastElementChild.textContent);
    if(cartBox.childNodes[i].textContent.includes(this.previousElementSibling.firstElementChild.textContent)){
        // console.log(cartBox.childNode[i].lastElementChild.textContent);
        // console.log(++this.previousElementSibling.lastElementChild.textContent);
        cartBox.childNodes[i].lastElementChild.textContent =  "Quantity is " + (++(this.previousElementSibling.lastElementChild.textContent));
        
        return;
    }
}
}   

    var div = document.createElement("div");
    div.classList.add("object");
    cartBox.appendChild(div);
    var img = document.createElement("img");
    img.src = this.previousElementSibling.previousElementSibling.src;
    div.appendChild(img);
    var p1 = document.createElement("p");
    p1.innerText = this.previousElementSibling.firstElementChild.innerText;
    div.appendChild(p1);
    var p2 = document.createElement("p");
    p2.innerText = this.previousElementSibling.firstElementChild.nextElementSibling.innerText;
    div.appendChild(p2);
    var p3 = document.createElement("p");
    p3.innerText = "Quantity is " + (++this.previousElementSibling.lastElementChild.innerText);
    div.appendChild(p3);
}


function printCount(){
countOfOrders.textContent = noOfOrders;
}