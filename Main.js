var Icon = document.querySelector(".menu");
var Show = document.querySelector(".Side");
var Hide = document.querySelector(".hide"); 

Icon.addEventListener("click", function () {
    Show.style.display = "block";
});


Hide.addEventListener("click" , function(){
    Show.style.display = "none"; 
})