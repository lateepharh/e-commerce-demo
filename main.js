// 
const images = document.querySelectorAll(".images img")
const imageslider = document.querySelector(".image-slider");
let activeImage = 0;
images.forEach((item,i)=>{
   item.addEventListener("click",() =>{
      images[activeImage].classList.remove("active");
      item.classList.add("active");
      imageslider.style.backgroundImage = `url('${item.src}')`;
      activeImage= i;
   })
})
const sizeBtn = document.querySelectorAll(".size-radio-btn");
let checkedbtn = 0;
sizeBtn.forEach((items,i)=>{
   items.addEventListener("click",()=>{
      sizeBtn[checkedbtn].classList.remove("check");
      items.classList.add("check");
      checkedbtn = i;
   })
})