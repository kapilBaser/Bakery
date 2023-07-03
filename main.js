// let i=0;
// const carousel = document.querySelector('.carousel');
// const items = Array.from(carousel.children);
// const left = document.querySelector('.btn');
// const right = document.querySelector('.rightbtn');
// let per=0;
// let current = document.querySelector('.current');
// let temp = current;
// let next = current.nextElementSibling;
// const width = items[0].getBoundingClientRect().width;
// // console.log(width);

// // console.log(current);
// // console.log(items.length);
// for(let i=0;i<items.length;i++){
//     items[i].style.left = width*i+'px';
// }
// function my(){
//     if(!i){
//         console.log("chlra h");
//         if(!next){

//         }
        
//             current = document.querySelector('.current');
//             next = current.nextElementSibling;
        
        

//         if(per<100)
//             per+=1;
//         else{ 
//             per=0;
//             current=temp;
//             current.classList.add('current');
//         }
//         if(!next){

//         }else{
//             if(per==30 || per==55){
//                 current.classList.remove('current');
//                 next.classList.add('current');
//                 current=null;
                
//             }
//         }
//     }else{
//         console.log("ruk gya");
//     }
// }
// setInterval(my,600);

// left.addEventListener('click', e=>{
//     if(per<25 || per>35 && per<50){
//         carousel.style.animationPlayState = "paused";
//         i=1;
//         if(!next){
//             carousel.style.animationPlayState = "running";
//             i=0;

//         }
//         let current = document.querySelector('.current');
//         let prev = current.previousElementSibling;
//         let move = prev.style.left;
//         carousel.style.transform = 'translateX(-'+move+')';
//         current.classList.remove('current');
//         prev.classList.add('current');
//         setTimeout(2000);
//         carousel.style.animationPlayState = "running";
//         i=0;
//     }else if(per>60){
//         carousel.style.animationPlayState = "paused";
//         i=1;
//         if(!next){
//             carousel.style.animationPlayState = "running";
//             i=0;
//         }
//         let current = document.querySelector('.current');
//         let prev = current.previousElementSibling;
//         let move = prev.style.left;
//         carousel.style.transform = 'translateX(-'+move+')';
//         current.classList.remove('current');
//         prev.classList.add('current');
//         setTimeout(2000);
//         carousel.style.animationPlayState = "running";
//         i=0;
//     }else{
//         console.log("Ruko Jldi kahe ki");
//     }
// });

// right.addEventListener('click', e=>{
//     if(per<25 || per>35 && per<50){
//         carousel.style.animationPlayState = "paused";
//         i=1;
//         let current = document.querySelector('.current');
//         let next = current.nextElementSibling;
//         let move = next.style.left;
//         console.log(next);
//         console.log(carousel.style.transform);
//         carousel.style.transform = 'translateX(-'+ move +')';

//         current.classList.remove('current');
//         next.classList.add('current');
//         left.classList.remove('deactive');
//         carousel.style.animationPlayState = "running";
//         i=0;
//     }else if(per>60){
//         carousel.style.animationPlayState = "paused";
//         i=1;
//         let current = document.querySelector('.current');
//         let next = current.nextElementSibling;
//         let move = next.style.left;
//         console.log(carousel.style.transform);
//         carousel.style.transform = 'translateX(-'+ move +')';

//         current.classList.remove('current');
//         next.classList.add('current');
//         left.classList.remove('deactive');
//         carousel.style.animationPlayState = "running";
//         i=0;
//     }else{
//         console.log("Ruko Jldi kahe ki");
//     }
// });
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
    }
    
});
carousel.addEventListener('pointerup',(e)=>{
    ismoving=false;
    autoSlide();
});
}
