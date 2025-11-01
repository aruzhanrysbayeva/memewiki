const to=document.getElementById("h0");
const title=document.getElementById("h1");
const main=document.getElementById("h11")
title.addEventListener("mouseenter", function(){
    title.style.transition = "all 2s ease";
    title.style.color = "#00CAFF";
    title.style.transform = "scale(1.5)";
    main.style.transition = "all 2s ease";
    main.style.color = "#FF0066";
    main.style.transform = "scale(1.5)";
    to.style.transition = "all 2s ease";
    to.style.color = "#FFE100";
    to.style.transform = "scale(1.5)";
});
title.addEventListener("mouseleave", function(){
    title.style.transform = "scale(1.3)";
    main.style.transform = "scale(1.3)";
    to.style.transform = "scale(1.3)";
});

const carousel=document.querySelector('.carousel-inner')
const images=document.querySelectorAll('.carousel-image');
let currentIndex=0;
function updateCarousel(){
    carousel.style.transform=`translateX(-${currentIndex*100}%)`;
}
document.getElementById('nextBtn').addEventListener('click', function(){
    images[currentIndex].classList.remove('active');
    currentIndex=(currentIndex+1)%images.length;
    images[currentIndex].classList.add('active');
},5000);
document.getElementById('prevBtn').addEventListener('click', function(){
    images[currentIndex].classList.remove('active');
    currentIndex=(currentIndex-1+images.length)%images.length;
    images[currentIndex].classList.add('active');
},5000);

setInterval(function(){
    images[currentIndex].classList.remove('active');
    currentIndex=(currentIndex+1)%images.length;
    images[currentIndex].classList.add('active');
},5000);