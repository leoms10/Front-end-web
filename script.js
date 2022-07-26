const quizQuestions = [{
        question: "HTML Stands for :",
        a: "Hyper text mark up language",
        b: "Hppps",
        c: "structred query language",
        d: " ALL",
        rigthAns: "ans1"
    },
    {
        question: "Which are Oops programming languages of following ?",
        a: "java",
        b: "python",
        c: "Both a&b",
        d: "HTML,XML",
        rigthAns: "ans3"
    },
    {
        question: "whcih tag is used for paragraph?",
        a: "<b></b>",
        b: "<li></li>",
        c: "<p></p>",
        d: "<body></body>",
        rigthAns: "ans3"
    }
];


const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const answers = document.querySelectorAll(".answer");

const submit = document.querySelector("#submit");
const showScore = document.querySelector("#showScore");
let questionCount = 0;
let score = 0;

// Writing an Arrow Function which  sets the question & options fields of html  
const loadQuestion = () => {
    // question.innerHTML=quizQuestions[0].question;
    // question.innerHTML = quizQuestions[questionCount].question;    
    let list = quizQuestions[questionCount];
    question.innerText = list.question;
    option1.innerText = list.a;
    option2.innerText = list.b;
    option3.innerText = list.c;
    option4.innerText = list.d;
}

loadQuestion();


// Writing an function to check which input raido buttons are checked and to written them. 
const getCheckedAnswer = () => {
    let ans;
    answers.forEach((i) => {
        if (i.checked) {
            ans = i.id;
        }
    });
    return ans;
};


// Writing a function for deselecting the checked options 
const uncheckAnswers = () => {
    answers.forEach((i) => { i.checked = false; })
}



//Event Listener -->  When we click on submit Button
submit.addEventListener("click", () => {
    const x = getCheckedAnswer();
    if (x === quizQuestions[questionCount].rigthAns) {
        score++;
    }
    questionCount++;
    uncheckAnswers();
    if (questionCount < quizQuestions.length) {
        loadQuestion();
    } else {
        showScore.innerHTML =
            `
        <h3 class="h3">Your Score is  ${score}/${quizQuestions.length}    :)</h3>
        <button class="btn" onClick="location.reload()">Play   Again</button>
      `
        showScore.classList.remove("score");
    }
})