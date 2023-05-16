const hamburger = document.querySelector(".hamburger");
const item1= document.querySelector(".item1");
const item2= document.querySelector(".item2");
const item3= document.querySelector(".item3");
const navMenu= document.querySelector(".navMenu");


hamburger.addEventListener('click', (event)=>{
event.preventDefault();
item1.classList.toggle("item11");
item2.classList.toggle("item22");
item3.classList.toggle("item33");
navMenu.classList.toggle("navMenu11");
});



window.addEventListener('scroll', changeNavColor);
function changeNavColor(){
    let nav = document.querySelector(".nav");
    let heroBanner = document.querySelector(".heroBanner");
        let heroDownPosition= heroBanner.getBoundingClientRect().bottom;
        let navDownPosition= nav.getBoundingClientRect().bottom;

         if(heroDownPosition <= navDownPosition){
            nav.classList.add("changeColor");
        }
         else{
             nav.classList.remove("changeColor");
        }
    }


let imgBox1= document.querySelector(".imgBox1");
let imgBox2= document.querySelector(".imgBox2");
let imgBox3= document.querySelector(".imgBox3");
let i= 0;
let imgBoxArray=[
    'img/hero7.jpg',
    'img/hero2.jpg',
    'img/hero3.jpg', 
    'img/hero4.jpg',
    'img/hero5.jpg', 
    'img/hero6.jpg', 
    // 'img/hero7.jpg',  
];
let imgBox1Arr= imgBoxArray.slice(0,2);
let imgBox2Arr= imgBoxArray.slice(2,4);
let imgBox3Arr= imgBoxArray.slice(4,6);
let time =0;

let nextBtn= document.querySelector(".nextBtn");
let prevBtn= document.querySelector(".prevBtn");

nextBtn.addEventListener('click',slideImgNext);
prevBtn.addEventListener('click',slideImgPrev);


 window.addEventListener('DOMContentLoaded', ()=>{
     setTimeout(slideImgNext,time)
 });

function slideImgNext(){
    
    if(i<imgBox1Arr.length-1){
        imgBox1.src=imgBox1Arr[i];
        imgBox2.src=imgBox2Arr[i];
        imgBox3.src=imgBox3Arr[i];
        i++
        prevBtn.style.opacity="1"; 
        
    }
    else{
        nextBtn.style.opacity="0.5"
        prevBtn.style.opacity="1"
       
    }
    
}
function slideImgPrev(){
    
    if(i>0){
        imgBox1.src=imgBox1Arr[i];
        imgBox2.src=imgBox2Arr[i];
        imgBox3.src=imgBox3Arr[i];
        nextBtn.style.opacity="1";
        i--;
       
    }
    else{
       prevBtn.style.opacity="0.3";
       nextBtn.style.opacity="1";
    }

    
}
let width= window.innerWidth;
console.log(width)



    
