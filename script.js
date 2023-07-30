
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




// project section slides script
let imgBox1= document.querySelector(".imgBox1");
let imgBox2= document.querySelector(".imgBox2");
let imgBox3= document.querySelector(".imgBox3");
let i= 0;
let imgBoxArray =[
    'img/p1.jpg',
    'img/p2.jpg',
    'img/p3.jpg', 
    'img/p4.jpg',
    'img/p5.jpg', 
    'img/p6.jpg',  
    'img/p7.jpg',
    'img/p8.jpg',
    'img/p9.jpg', 
    'img/p10.jpg',
    'img/p11.jpg', 
    'img/p12.jpg',
    'img/p13.jpg',
    'img/p14.jpg',
    'img/p15.jpg', 
    'img/p16.jpg',
    'img/p17.jpg', 
    'img/p18.jpg',
    'img/p19.jpg',
    'img/p20.jpg',
    'img/p21.jpg', 
    'img/p22.jpg',
    'img/p23.jpg', 
    'img/p24.jpg',
    'img/p25.jpg',
    'img/p26.jpg',
    'img/p27.png', 
    'img/p28.png',
    'img/p29.jpg', 
    'img/p30.jpg',
];
let imgBox1Arr= imgBoxArray.slice(0,10);
let imgBox2Arr= imgBoxArray.slice(10,20);
let imgBox3Arr= imgBoxArray.slice(20,30);
let dot =document.querySelectorAll('.dot');
let time =0;
let nextBtn= document.querySelector(".nextBtn");
let prevBtn= document.querySelector(".prevBtn");
nextBtn.addEventListener('click',slideImgNext);
prevBtn.addEventListener('click',slideImgPrev);

window.addEventListener('DOMContentLoaded', checkWidth);
window.addEventListener('DOMContentLoaded', 
()=>{
    setTimeout(slideImgNext,100);
});

// auto sliding at small screen
let windowWidth = window.innerWidth;
    function autoSlide(){
        i++;
        if(i<=imgBoxArray.length-1 ){   
        imgBox1.src=imgBoxArray[i];
    }  
    else{
        i=0;  
    }
    setTimeout(autoSlide,3000);
    }

function checkWidth(){
    if (windowWidth < 400){
        autoSlide();
    }
}


// next button click at large screen
function slideImgNext(){ 
    
    if(i<imgBox1Arr.length-1 ){
        dot[i].style.backgroundColor="var(--green)";
        i++; 
        imgBox1.src=imgBox1Arr[i];
        imgBox2.src=imgBox2Arr[i];
        imgBox3.src=imgBox3Arr[i];
        
    }
    else {
        i=imgBox1Arr.length-1;
        dot[i].style.backgroundColor="var(--green)";
        
    }
    
    
}

function slideImgPrev(){ 
    if(i>0){
        
        dot[i].style.backgroundColor="transparent"; 
        i--;
        imgBox1.src=imgBox1Arr[i];
        imgBox2.src=imgBox2Arr[i];
        imgBox3.src=imgBox3Arr[i];
    }
    else{
        i=0;
        dot[i].style.backgroundColor="var(--green)";
    } 
}


// end of project section script


let phoneNumber= document.getElementById('phoneNumber');
phoneNumber.addEventListener('click',()=>{
    window.alert("Call us on: \n +2348033754397 \n +2347036455204 ")

})






    
