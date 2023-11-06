LeftGen=document.getElementById("0 0");
RightGen=document.getElementById("2 0");
LeftCollision=document.getElementById("0 3");
RightCollision=document.getElementById("2 3");
LeftP=document.getElementById("0 4");
RightP=document.getElementById("2 4");
vstatus="free";
score=0;
function fail(){
    document.getElementById('game').innerHTML=""
    document.getElementById('start').style.visibility = "visible"
    document.getElementById('score_game').innerHTML="FINAL SCORE: "+score;
    score=0;
    vstatus="free"
}
function start(){
    document.getElementById('start').style.visibility = "hidden";
    document.getElementById('game').innerHTML="";
    document.getElementById('score_game').innerHTML="Score: 0";
    let h=0;
    let w=0;
    for (w=0; w<3;w++)
    {
        document.getElementById('game').innerHTML+="<div id='"+w+" "+h+"'></div>";
        document.getElementById(w+" "+h).style.backgroundColor="white";
        if (w==2&&h<4){
            document.getElementById("1 "+h).style.backgroundColor="#CE3535";
            w=-1;
            h++;
        }
    }
    vstatus="a";
        document.getElementById("1 4").style.backgroundColor="#CE3535";
}
document.addEventListener("keyup", function(event) {
    if (event.key === "a") {
        if (document.getElementById("0 3").style.backgroundColor !== "brown"){
            movedown();
            document.getElementById("0 4").style.backgroundColor="blue";
        } else {
            fail();
        }
    }
    if (event.key === "d") {
        if (document.getElementById("2 3").style.backgroundColor !== "brown"){
            movedown();
            document.getElementById("2 4").style.backgroundColor="blue";
        } else {
            fail();
        }
    }
    if (event.key===" "&&vstatus==="free"){
        start();
    }
});
function gen(){
    document.getElementById('0 0').style.backgroundColor = "white";
    document.getElementById('2 0').style.backgroundColor = "white";
    rand=Math.round(Math.random()*5);
    if (rand==0){
    } else if (rand%2==0){
        document.getElementById('2 0').style.backgroundColor="brown";
    } else {
        document.getElementById('0 0').style.backgroundColor="brown";
    } 
}

function scorerefr(){
    score++;
    document.getElementById('score_game').innerHTML="Score: "+score;
}

function movedown(){
    scorerefr();
    document.getElementById('0 4').style.backgroundColor = document.getElementById('0 3').style.backgroundColor;
    document.getElementById('2 4').style.backgroundColor = document.getElementById('2 3').style.backgroundColor;

    document.getElementById('0 3').style.backgroundColor = document.getElementById('0 2').style.backgroundColor;
    document.getElementById('2 3').style.backgroundColor = document.getElementById('2 2').style.backgroundColor;

    document.getElementById('0 2').style.backgroundColor = document.getElementById('0 1').style.backgroundColor;
    document.getElementById('2 2').style.backgroundColor = document.getElementById('2 1').style.backgroundColor;

    document.getElementById('0 1').style.backgroundColor = document.getElementById('0 0').style.backgroundColor;
    document.getElementById('2 1').style.backgroundColor = document.getElementById('2 0').style.backgroundColor;
    
    gen();
}