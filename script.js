const btn = document.querySelector(".click");
const button = document.querySelector(".change");
const color = document.querySelector("#color");

btn.addEventListener("click", function(){
    alert("Button Clicked")
    alert("Paragraph Clicked ")
    alert("Sound Clicked ")
})

button.addEventListener("click", function(e){
color.style.backgroundColor =makeColor();
e.stopPropagation();
});
button.addEventListener("click" , function(){
    button.classList.toggle("hide");
})
const makeColor = function(){
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
};