let boxes= document.querySelectorAll(".box");
// console.log(boxes)

window.addEventListener('scroll', showBox);
function showBox(){
    let showPosition= window.innerHeight-100;
    // console.log(showPosition);
    boxes.forEach(box => {
        let topPosition= box.getBoundingClientRect().top
        if(topPosition < showPosition){
            box.classList.add("show");
        }
        else{
            box.classList.remove("show");
        }
       
    });
    
}
// showBox();

