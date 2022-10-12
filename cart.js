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
       tag:"menjac",
       inCart:0
    },
    {
       name:'Stripe Shirt',
       price:6000,
       tag:"men top 1",
       inCart:0
    },
    {
       name:'Round Neck Polo',
       price:10000,
       tag:"product image3",
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
       document.querySelector('.cartss span').textContent = productNumbers;
       
    }
 }
 // when the add to cart is clicked the function helps to store it
 function cartNumbers(product){
    console.log("the product clicked is", product);
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
       localStorage.setItem('cartNumbers',productNumbers + 1);
       document.querySelector('.cartss span').textContent = productNumbers + 1;
    }else{
       localStorage.setItem('cartNumbers', 1);
       document.querySelector('.cartss span').textContent = 0;
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
function displyCart() {
    let cartItems = localStorage.getItem("productInCart");
    cartItems = JSON.parse(cartItems);
    // console.log(cartItems);
    let productContainer = document.querySelector('.cart-items');
   let cartCost = localStorage.getItem('totalCost');
   // the if checks if the product-container is on the page and if our cartitems got something
   if (cartItems && productContainer) {
      // console.log("running");
      productContainer.innerHTML = "";
      Object.values(cartItems).map(item =>{
           productContainer.innerHTML += `
           <div class="cart-item cart-column">
               <i class="fa fa-times-circle"></i>
               <img src="../picture/${item.tag}.jpg" class="cart-item-image">
              <span class="cart-item-title">${item.name}</span>
           </div>
           <div class="cart-pricess cart-column">${item.price}</div>
           <div class="cart-quantity cart-column">
               <input class="cart-quantity-input" type="number" value="1">
               <span>${item.inCart}</span>
            </div>
           `
        })
    }
}
onloadCartNumber();
displyCart(); 
 
