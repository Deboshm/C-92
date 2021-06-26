player1_name=Localstorage.getItem("player1_name");
player2_name=Localstorage.getItem("player2_name");
Player2_score=0;
Player1_score=0;
document.getElementById("Player1_name").innerHTML=player1_name;
document.getElementById("Player2_name").innerHTML=player2_name;
document.getElementById("Player1_score").innerHTML=Player1_score;
document.getElementById("Player2_score").innerHTML=player2_score;
document.getElementById("Player_question").innerHTML="question_turn" + player1_name;
document.getElementById("Player_answer").innerHTML="answer_turn"+player2_name;
function send (){
    Get_word=document.getElementById("word").value ;
    word=Get_word.toLowerCase()
    console.log("Wordinlowercase" +word);
    chara1=word.charAt(1);
    console.log(charAt(1));
    length=Math.floor(word.length);
    b=length/2;
    chara2=word.charAt(b);
    console.log(chara2);
    c=word.length-1;
    chara3=word.charAt(c);
    console.log(chara3);
    d=word.replace(chara1,"_")
    e=d.replace(chara2,"_");
    f=e.replace(chara3,"_");
    console.log(f);
    question_word=f;
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value=""
}
question_turn="Player1";
answer_turn="Player2";
function check(){
get_answer=document.getElementById("input_check_box".value);
answer=get_answer.toLowerCase();
console.log(answer);
if(answer==word){
    player1_score=player1_score+1;
    document.getElementById("player1_score").innerHTML=player1_score;
}
else{
    player2_score=player_2+1;
    document.getElementById("player2_score").innerHTML=player2_score;
    
}
}
if(question_turn=="player1"){
    question_turn="player2"
    document.getElementById("player_question").innerHTML=player2_name;
}
else{
    question_turn=="player1";
    document.getElementById("player_question").innerHTML=player1_name;
}
if(answer_turn=="player1"){
    answer_turn="player2"
    document.getElementById("player_answer").innerHTML=player1_name;
}
else{
    answer_turn="player1"
    document.getElementById("player_answer").innerHTML=player2_name;
}