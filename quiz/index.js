const questions = [
    {
        que: 'Which of the following is a markup language?',
        a: 'HTML',
        b: 'CSS',
        c: 'JavaScript',
        d: 'PHP',
        correct: 'a'
    },
    {
        que: 'What does CSS stand for?',
        a: 'Cascading Style Sheets',
        b: 'Computer Style Sheets',
        c: 'Creative Style Sheets',
        d: 'Coded Style Sheets',
        correct: 'a'
    },
    {
        que: 'What does HTML stand for?',
        a: 'Hyper Text Markup Language',
        b: 'Hyperlinks and Text Markup Language',
        c: 'Home Tool Markup Language',
        d: 'Hyperlinks and Textual Markup Language',
        correct: 'a'
    },
    {
        que: 'What is the purpose of JavaScript?',
        a: 'To style web pages',
        b: 'To create dynamic web pages',
        c: 'To create web graphics',
        d: 'To create databases',
        correct: 'b'
    },
   
   
    {
        que: 'Which function is used to print content to the console in JavaScript?',
        a: 'console.print()',
        b: 'print()',
        c: 'log()',
        d: 'console.log()',
        correct: 'd'
    }
   
   
];



let quesBox = document.getElementById("quesBox");
let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const optioninputs = document.querySelectorAll(".options");

let data;
const loadquestion = () => {
   


    if(index===total){
        return endquiz();
    }
   
    reset();
    data = questions[index];

console.log(data);
    quesBox.innerText = `${index + 1}) ${data.que}`;

optioninputs[0].nextElementSibling.innerText = data.a;
     optioninputs[1].nextElementSibling.innerText = data.b;
    optioninputs[2].nextElementSibling.innerText = data.c;
  optioninputs[3].nextElementSibling.innerText = data.d;
}

const submitquiz = () => {

    const data=questions[index]
    const ans = getAnswer();

    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }

    index++;
    if (index < total) {
        loadquestion();
    } else {
        endquiz();
    }
}

const getAnswer = () => {

    let answer;
    for (const input of optioninputs) {
        if (input.checked) {
           answer=input.value;
           break;
        }
    }
    return answer;
}

const reset = () => {
    optioninputs.forEach(input => input.checked = false);
}



const endquiz = () => {
  
    
    document.getElementById("box").innerHTML = `

   

    
        <h3> <div id="styling">
        <h1>GAME OVER <br>THANKS FOR PARTICIPATING</h1>
        
        </div></h3>
       <br>
   

    
        <h2>
        <div id="stylingg">
        ${right}/${total} ARE CORRECT </h2>   
        </div>
        
    `
}

loadquestion();
