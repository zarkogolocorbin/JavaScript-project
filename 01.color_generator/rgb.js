const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

let randomNumber = () => { 
    return Math.floor(Math.random() * 256)};

btn.addEventListener('click', function(){
    
    let red = randomNumber();
    console.log(red);
    let green = randomNumber();
    console.log(green);
    let blue = randomNumber();
    console.log(blue);

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    color.textContent = `rgb(${red}, ${green}, ${blue})`; 
});