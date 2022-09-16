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