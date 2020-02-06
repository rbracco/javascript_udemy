const btn = document.querySelector('button');

btn.addEventListener("mouseover", function(){
  console.log("moused over me")
  btn.style.top = `${Math.floor(Math.random() * (window.innerHeight-20))}px`
  btn.style.left = `${Math.floor(Math.random() * (window.innerWidth-20))}px`
});

btn.addEventListener("click", function(){
  btn.innerText = "You got me"
  document.body.style.backgroundColor = 'green'
})