
//Colors Array
let colors = ['blue', 'yellow', 'red', 'orange', 'purple'];

//Get button
let button = document.getElementById('button');


//add event listener
button.addEventListener('click', function(){
    //randomiser
    var randomColor = colors[Math.floor(Math.random() * colors.length )]
    //get container
    let container = document.getElementById('container');

    container.style.background = randomColor;
})