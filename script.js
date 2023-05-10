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


let imgBox= document.querySelector(".imgBox1");
let i= 0;
let imgBoxArray=[
    'img/hero6.jpg',
    'img/hero3.jpg', 
    'img/hero5.jpg', 
    'img/hero7.jpg', 
    'img/hero1.jpg',  
];
let time =10000;

window.addEventListener('DOMContentLoaded', slideImg);
function slideImg(){
    imgBox.src=imgBoxArray[i];
    if(i<imgBoxArray.length-1){
        
        i++;
    }
    else{
        i=0;
    }
    setTimeout(slideImg,time);
console.log(i)

    
}


let nextBtn= document.querySelector(".nextBtn");
let prevBtn= document.querySelector(".prvBtn");

    nextBtn.addEventListener('click',()=>{
        i++
    })
