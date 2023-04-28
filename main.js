x=0;
y=0;
drawCircle="";
drawRect="";
SpeechRecognition = window.webkitSpeechRecognition;
recognition = new SpeechRecognition();
function preload(){
carro= loadImage("images.jpg");
pessoa = loadImage("png-clipart-silhouette-person-man-silhouette-angle-text.png");
}
function start(){
    document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "A sua fala foi reconhecida como: "+content;
    if(content =="carro"){
        x = Math.floor(Math.random()* 900);
        y = Math.floor(Math.random()* 600);
        document.getElementById("status").innerHTML = "Desenhando um círculo.";
        drawCircle = "set";
    }
    if(content =="pessoa"){
        x = Math.floor(Math.random()* 900);
        y = Math.floor(Math.random()* 600);
        document.getElementById("status").innerHTML = "Desenhando um retângulo.";
        drawRect = "set";
        }
}
function setup(){
    canvas = createCanvas(900, 600);
}
function draw(){
    if(drawCircle == "set"){
        radius = Math.floor(Math.random()* 100);
        image(carro, x, y, 70, 70);
        document.getElementById("status").innerHTML= "carro desenhado. ";
        drawCircle = ""
    }
    if(drawRect == "set"){
       image(pessoa, x, y, 70, 70);
       document.getElementById("status").innerHTML= "pessoa desenhado. ";
       drawRect = "";
    }
}
