const images = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const carousel = document.querySelector('.carousel');
let counter = 1;
browser = window.innerWidth;
next.addEventListener('click',nextSlide);
function nextSlide(){
    images[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter>=images.length-1)
        counter=0;
    else
        counter +=1;
    images[counter].style.animation = 'next2 .5s ease-in forwards';
    if(browser>800){
        prev.style.display='block';
    }
        
    indicators();
}
prev.addEventListener('click',prevSlide);
function prevSlide(){
    images[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if(counter==0)
        counter = images.length-1;
    else
        counter--;
    images[counter].style.animation = 'prev2 0.5s ease-in forwards';
    indicators();
}

function autoSlide(){
    interval = setInterval(timer,2000);
    function timer()
    {
        nextSlide();
        
    }
}
autoSlide();



carousel.addEventListener('mouseover',function(){
    clearInterval(interval);
})
carousel.addEventListener('mouseout',autoSlide);
next.addEventListener('mouseover',function(){
    clearInterval(interval);
})
next.addEventListener('mouseout',autoSlide);
prev.addEventListener('mouseover',function(){
    clearInterval(interval);
})
prev.addEventListener('mouseout',autoSlide);



function indicators(){
    for(let i=0;i<dots.length;i++)
    {
        dots[i].className = dots[i].className.replace('active','');
    }
    if(counter==0){
        dots[2].classList.add('active');
    }else
        dots[counter-1].classList.add('active');
}

if(window.PointerEvent){
    let ismoving = false;
let initialPosition = null;

carousel.addEventListener('pointerdown',(e)=>{
    clearInterval(interval);
    initialPosition = e.pageX;
    ismoving = true;
    console.log(initialPosition);
});
carousel.addEventListener('pointermove',(e)=>{
    if(ismoving){
        const currentPosition = e.pageX;
        const diff = currentPosition-initialPosition;
        if(diff>0){
            
            prevSlide();
        }else{
            nextSlide();
        }
        autoSlide();
    }
    
});
carousel.addEventListener('pointerup',(e)=>{
    ismoving=false;
    
});
}
