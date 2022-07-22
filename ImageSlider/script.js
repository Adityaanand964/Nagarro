let slide_index = 0;
let slides = document.getElementsByClassName("mySlides");
let slidesln=slides.length;
showslides(slide_index);
function next(n){
    slide_index+=n;
    if (slide_index>slidesln-1){slide_index=0}
    if (slide_index<0){slide_index=slidesln-1}
    showslides(slide_index);
}

function showslides(n){
    let i;
    for(i=0;i<slidesln;i++){
        slides[i].style.display = "none";
    } 
    slides[n].style.display = "block";
    setTimeout(alr,2000);
}
function alr(){
    next(1);
}
