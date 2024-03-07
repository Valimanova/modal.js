$(document).ready(function(){
    const dataUrl=("http://localhost:3000/Data");

    $.ajax({
        url: dataUrl,
        method:"GET",
        success: function(data){
            console.log(data);
        },
        error: function(error){
            console.log(error);
        }
    })
    console.log(data);
})

let all = document.querySelectorAll(".img");
let m0dal = document.querySelector(".m0dal");
let cl0se= document.querySelector(".fa-rectangle-xmark")
let last= document.querySelector(".left");
let next= document.querySelector(".right")
let currentIndex = 0;

all.forEach(element => {
    element.addEventListener("click", function() {
        m0dal.style.display = "block";
        m0dal.innerHTML = "";
        m0dal.innerHTML+= element.innerHTML
        currentIndex = index; 
    });
    cl0se.addEventListener('click',function(){
        m0dal.style.display="none"
    })
   
    last.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + all.length) % all.length; 
        m0dal.innerHTML = all[currentIndex].innerHTML; 
    });
    
    next.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % all.length; 
        m0dal.innerHTML = all[currentIndex].innerHTML; 
    });
});
