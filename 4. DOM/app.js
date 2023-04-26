//!
// const h1 = document.querySelector("#title")
// console.log(h1);

// const title = document.getElementById("title")
// const title = document.getElementsByClassName("class-title")
// const title = document.getElementsByTagName("h1")

// const title = document.querySelectorAll(".class-title")
// console.log(title);

// const div = document.querySelector("div")

// console.log(div.nextElementSibling);
// console.log(div.previousElementSibling);

// console.log(div.parentElement);
// console.log(div.childNodes);
// console.log(div.children);

// const cccc = document.createElement("button")
// // cccc.innerText = "Salam Dunya"
// cccc.innerHTML = "<img src='https://plus.unsplash.com/premium_photo-1682192408126-70498c5f488b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'/>"
// const aaa = document.querySelector("body")
// aaa.append(cccc)

// const myImage = document.querySelector("img")
// const myDiv = document.querySelector("div")
// const button = document.querySelector("button")

// // console.log(myImage.hasAttributes());
// // console.log(myImage.removeAttribute("src"));

// // console.log(myDiv.classList.contains("active"));

// button.addEventListener("click", function(){
//     myDiv.classList.toggle( "dark")
// })

// const poster = document.querySelector(".poster");
// const images = document.querySelectorAll(".slider-img");

// console.log(images);

// images.addEventListener

// for (let i = 0; i < images.length; i++) {
//   images[i].addEventListener("click", function () {
//     poster.src = images[i].src;
//   });
// }

// array like object
// const newImages = Array.from(images)

// newImages.map((image) => {
//     image.addEventListener("click", function () {
//       poster.src = image.src;
//     });
//   });

// Array.from(images).map((image) => {
//   image.addEventListener("click", function () {
//     poster.src = image.src;
//   });
// });

// console.log(window);
// console.log(document);

const input = document.querySelector("input");
const btn = document.querySelector("button");

// btn.addEventListener("mouseover", ()=> {
//     const x = Math.round(Math.random() * 500)
//     const y = Math.round(Math.random() * 500)
//     btn.style.transform = `translate(${x}px, ${y}px)`
// })

btn.addEventListener("click", () => {
  if (!input.value.trim()) {
    input.style.border = "10px solid red";
  }else{
    input.style.border = "10px solid yellow";
  }
});
