var mouseEvent="empty"
var last_position_of_x, last_position_of_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")
//var color = document.getElementById("myColor").value;
//var width = document.getElementById("myThickness").value;
//var radius = document.getElementById("myRadius").value;

color = "black";
width_of_line = 1;
radius=1;
var mouse_x = 0;
var mouse_y = 0;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    
    //taking color from input box;
    //additional activity start;
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("myRadius").value

    //addition activity ends
    //mouse_x = e.clientX - canvas.offsetLeft;
    //mouse_y = e.clientY - canvas.offsetTop;

    //console.log("X = " + mouse_x + ",Y = " + mouse_y);
    //circle(mouse_x , mouse_y);

    mouseEvent="mouseDown"
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft
    current_position_of_mouse_y = e.clientY - canvas.offsetTop

    if (mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x , current_position_of_mouse_y , radius , 0 , 2 * Math.PI)


        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x , last_position_of_y);
        ctx.stroke();
        }

    last_position_of_x = current_position_of_mouse_x
    last_position_of_y = current_position_of_mouse_y
}

function circle(mouse_x , mouse_y){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.arc(mouse_x, mouse_y, 20, 0, 360);
    ctx.stroke();
}