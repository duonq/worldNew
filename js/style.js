//khai bao slidechange trending
var slideIndex;
//khai bao hamf hien thij slide
function showSlide(){
    var i;
    var slides = document.getElementsByClassName("div");
    var cham_changes =  document.getElementsByClassName("cham_change");

    for ( i = 0; i< slides.length; i++){
        cham_changes[i].style.display = "none";
    }

    for ( i = 0; i< slides.length; i++){
        cham_changes[i].className = cham_changes[i].className.replace(" active", "");   
    }

    slides[slideIndex].style.display = "block";
    // cham_changes[slideIndex].className += " active";

    //chuyen den slide tiep
    slideIndex++;
    //neu or slide cuoi thif chuyen ve slide dau
    if(slideIndex > slides.length -1){
        slideIndex = 0;
    }
    //tu dong chuyen slide sau 5s
    setTimeout(showSlide, 5000);
}
//mac dinh owr slide dau
showSlide(slideIndex = 0);

function currentSlide(n){
    showSlide(slideIndex = n);
}