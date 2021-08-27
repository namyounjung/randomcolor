const colorTextEl = document.querySelector("#colorText");
const changeBtn = document.querySelector("#changeBtn");
changeBtn.addEventListener("click", function(){
  const randomColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16); 
  document.body.style.backgroundColor = randomColor;
  colorTextEl.innerText = randomColor;
});