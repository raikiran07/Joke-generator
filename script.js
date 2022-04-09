'use-strict';
const jokeContainer = document.getElementById("joke-text");
const generateBtn = document.getElementById("generate-joke");
const questionText = document.getElementById("question");
const ansText = document.getElementById("ans");


function jokeGenerator(){
    fetch("https://backend-omega-seven.vercel.app/api/getjoke").then(res=>res.json()).then(data=>{
        const {question,punchline}=data[0];
        questionText.innerHTML = question;
        ansText.innerHTML = punchline;

        console.log(data);
        
    })
}





generateBtn.addEventListener("click",jokeGenerator);