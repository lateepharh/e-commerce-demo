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
});
const sizeBtn = document.querySelectorAll(".size-radio-btn");
let checkedbtn = 0;
sizeBtn.forEach((items,i)=>{
   items.addEventListener("click",()=>{
      sizeBtn[checkedbtn].classList.remove("check");
      items.classList.add("check");
      checkedbtn = i;
   })
});
// javacript logic for automated slideshow
let slideIndex = 0;
showSlides();
function showSlides(){
   let y;
   let slides = document.getElementsByClassName("mySlides");
   let dots = document.getElementsByClassName("dot");
   for(y = 0; y < slides.length; y++){
      slides[y].style.display = "none"
   };
   slideIndex++;
   if (slideIndex > slides.length ) {
      slideIndex = 1;
   };
   for(i = 0; i < dots.length; i++ ){
      dots[i].className = dots[i].className.replace("active");
   }
   slides[slideIndex - 1].style.display ="block";
   dots[slideIndex - 1 ].className += "active";
   setTimeout(showSlides, 2000)
}
const barIcon = document.getElementById("bar");
const closeIcon = document.getElementById("close-toggle");
const nav = document.getElementById("navbar")
if (bar) {
   barIcon.addEventListener("click", ()=>{
      nav.classList.add("actives")
   });
}
//close toggle
if (bar) {
   closeIcon.addEventListener("click",()=>{
      nav.classList.remove("actives")
   })
}
const searchBtn = document.querySelector("search-btn");
const cancelBtn = document.querySelector(".cancel.btn");
const searchBox = document.querySelector(".search-box");
searchBtn.addEventListener("click", ()=>{
   searchBox.classList.add("actives");
})
cancelBtn.addEventListener("click",()=>{
   searchBox.classList.remove("actives")
})