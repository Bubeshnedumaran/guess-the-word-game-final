player1_name=localStorage.getItem("player1name");
player2_name=localStorage.getItem("player2name");

player1_Score=0;
player2_Score=0;

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";

document.getElementById("player1_score").innerHTML=player1_Score;
document.getElementById("player2_score").innerHTML=player2_Score;

document.getElementById("player_question").innerHTML="Question turn "+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn "+player2_name;


function send() {
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("word in lowercase= "+word);

    index1=word.charAt(1);
    console.log(index1);


    length_by_2=Math.floor(word.length/2);
    index2=word.charAt(length_by_2);
    console.log(index2);


    length_minus_1=word.length-1;
    index3=word.charAt(length_minus_1);
    console.log(index3);


    remove_index1=word.replace(index1,"_");
    remove_index2=remove_index1.replace(index2,"_");
    remove_index3=remove_index2.replace(index3,"_");

    Question_word="<h4 id='wrd'>Q."+remove_index3+"</h4>";
    ipt="<br>Answer: <input type='text' id='input'>"
    chk="<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";
    ro=Question_word+ipt+chk;
    document.getElementById("output").innerHTML=ro;
    document.getElementById("word").value="";
}
question_turn="player1name"
answer_turn="player2name"
function check() {
    get_answer=document.getElementById("input").value;
    answer=get_answer.toLowerCase();
    console.log("answer in lower case "+answer);
    if(answer==word) {
        if (answer_turn=="player1name") {
            player1_Score=player1_Score+1;
            document.getElementById("player1_score").innerHTML=player1_Score;
        }
        else {
            player2_Score=player2_Score+1;
            document.getElementById("player2_score").innerHTML=player2_Score; 
        }        
    }
    if (question_turn=="player1name") {
        question_turn="player2name";
        document.getElementById("player_question").innerHTML="question turn - "+player2_name;
    }
    else{
        question_turn="player1name";
        document.getElementById("player_question").innerHTML="question turn - "+player1_name;
    }
    if (answer_turn=="player1name") {
        answer_turn="player2name";
        document.getElementById("player_answer").innerHTML="answer turn - "+player2_name;
    }
    else{
        answer_turn="player1name";
        document.getElementById("player_answer").innerHTML="answer turn - "+player1_name;
    }
    document.getElementById("output").innerHTML="";
}