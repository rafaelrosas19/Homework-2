var i = 0;
var txt = "my name is rafael rosas. i am a software engineer based out of chicago.";
var speed = 15;


function typeWriter(){
    if (i < txt.length){
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter,speed);
    }
}

window.onload = typeWriter;