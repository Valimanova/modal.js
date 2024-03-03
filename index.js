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
})

let m0dal= document.querySelector(".m0dal");
let images= document.querySelectorAll(".img")
// console.log(images);
images.forEach(element => {
    element.addEventListener("click",function(){
        m0dal.style.display="block"
        m0dal.innerHTML = element.innerHTML
        // console.log(element.innerHTML+=m0dal.innerHTML);
    })
    })
    let btn= document.querySelector(".btn");
    btn.addEventListener("click",function(){
        m0dal.style.display="none"
    })

console.log(m0dal);
