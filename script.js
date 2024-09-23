const leftel=document.getElementById("left");
const rightel=document.getElementById("right");

rightel.addEventListener('click', function() {
    const first_slide= document.getElementById("firstslide");
    first_slide.classList.add("move")
   
});
leftel.addEventListener('click', function() {
    const first_slide= document.getElementById("firstslide");
    first_slide.classList.remove("move")
   
});