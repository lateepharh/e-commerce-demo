var carts = document.querySelectorAll(".add-cart");
var product = [
    {
        name:'Creme fitted Dress',
      price:6000,
       tag:'card4',
       inCart:0
    },
    {
       name:'Casual Two-piece',
       price:15000 ,
       tag:"card3",
       inCart:0
    },
    {
       name:'Jean Corset Top',
       price:6000,
       tag:"jeantop",
       inCart:0
    },
    {
       name:'Casual Men Jacket',
       price:9000,
       tag:"men jac",
       inCart:0
    },
    {
       name:'Stripe Shirt',
       price:6000,
       tag:"men top1",
       inCart:0
    },
    {
       name:'Round Neck Polo',
       price:10000,
       tag:"product image 3",
       inCart:0
    },
    {
       name:'Cold Shoulder Blouse',
       price:3000,
       tag:"top 2",
       inCart:0
    },
    {
       name:'Puff Sleeve Jeantop',
       price:6000,
       tag:"jean top",
       inCart:0
    },
    {
       name:'Female Beach Shades',
       price:4000,
       tag:"sunglass1",
       inCart:0
    },
    {
       name:'Blue One-handed Bag',
       price:20000,
       tag:"bag 2",
       inCart:0
    },
    {
       name:'Men Cross Bag',
       price:40000,
       tag:" male bag 2",
       inCart:0
    },
    {
       name:'Causual Jacket',
       price:16000,
       tag:" men jac1",
       inCart:0
    },
 ]
for (let i = 0; i < carts.length; i++){
    carts[i].addEventListener("click",()=>{
        // console.log("added to cart");
        cartNumbers(product[i]);
        totalCost(product[i])
    })
};
// it shows number of iten in the cart
function onloadCartNumber(){
   let productNumbers = localStorage.getItem('cartNumbers');
   if (productNumbers) {
      document.querySelector('.cartss sup').textContent = productNumbers;    
   }
 }
 // when the add to cart is clicked the function helps to store it
function cartNumbers(product){
   // console.log("the product clicked is", product);
   let productNumbers = localStorage.getItem('cartNumbers');
   productNumbers = parseInt(productNumbers);
   if (productNumbers) {
      localStorage.setItem('cartNumbers',productNumbers + 1);
      document.querySelector('.cartss sup').textContent = productNumbers + 1;
   }else{
      localStorage.setItem('cartNumbers', 1);
       document.querySelector('.cartss sup').textContent = 0;
    }
    // localStorage.setItem('cartNumbers',1)
    setItems(product)
 }
 //for the incart number and to checks wheter it exis already in cart
 function setItems(product) {
    let cartItems =localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
       // console.log(cartItems[product.tag]);
       if (cartItems[product.tag] == undefined) {
          cartItems = {
             ...cartItems,
             [product.tag]:product
          }
       }
       cartItems[product.tag].inCart += 1;
    }else{
       product.inCart = 1;
       cartItems = {
        [product.tag]:product
       }
    }
    localStorage.setItem('productInCart',JSON.stringify(cartItems));
}
function totalCost(products){
    // console.log("product price is", products.price);
    let cartCost = localStorage.getItem('totalCost');
    if (cartCost != null) {
      cartCost = parseInt(cartCost);
       localStorage.setItem('totalCost',cartCost + products.price)
    }else{
       localStorage.setItem('totalCost', products.price)
    }
    // console.log("product price is", products.price);
}
// function for the cart pge
function displyCart() {
   let cartItems = localStorage.getItem("productInCart");
   cartItems = JSON.parse(cartItems);
   // console.log(cartItems);
   // var cartRow = document.createElement('div')
   // cartRow.classList.add('cart-row')
   let productContainer = document.querySelector('.products');
   let cartCost = localStorage.getItem('totalCost');
   // the if checks if the product-container is on the page and if our cartitems got something
   if (cartItems && productContainer) {
      // console.log("running");
      productContainer.innerHTML = "";
      Object.values(cartItems).forEach(item =>{
   // let conts = document.querySelector('.product-container');
      productContainer.innerHTML += `
         <div class="product">
            <i class="fa fa-times-circle times-icon" id="btn-danger" ></i>
            <img src="../pic/${item.tag}.png" alt="product" >
            <span>${item.name}</span>
         </div>
         <div class="price ">${item.price}</div>
         <div class="quantity">
            <i class="fa fa-arrow-circle-left decrease"></i>
            <span>${item.inCart}</span>
            <i class="fa fa-arrow-circle-right increase"></i>
         </div>
         <div class="total">#${item.inCart * item.price}.00</div>

         `;
      });
      productContainer.innerHTML += `
      <div class="basketTotalContainer">
         <h4 class="basketTotalTitle">
            Total
         </h4>
         <h4 class="basketTotalTitle">#${cartCost}.00</h4>
      </div>
      <button class="purchase-btn" id="purchase-btn">
         Checkout
      </buuton>
      `;
   }
}
function removeButton (){
   let button = document.getElementById("btn-dander");
   button.addEventListener("click", ()=>{
      alert("clicked")
  });
      
}
function Purchased(){
   let btn = document.getElementById("purchase-btn");
   btn.addEventListener("click",()=>{
      alert("Thank you for your purchase");
      let productContainer = document.querySelector('.products');
      while (productContainer.hasChildNodes()) {
         productContainer.removeChild(productContainer.firstChild);
      }
      let productNumbers = localStorage.getItem('cartNumbers');
       let cartItems =localStorage.getItem('productInCart');
      if (productNumbers) {
        productNumbers = localStorage.clear('cartNumbers' );
        document.querySelector('.cartss sup').textContent = 0;
      }
      if (cartItems) {
         cartItems = localStorage.clear("productInCart")
      }
      
   });
  
};
onloadCartNumber();
displyCart();
// removeButton();
Purchased(); 
 
