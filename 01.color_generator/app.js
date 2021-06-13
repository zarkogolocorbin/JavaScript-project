const colors = ["green", "red", 'blue'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',function(){
    let randNum = Math.trunc(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[randNum];
    color.textContent = colors[randNum];
})