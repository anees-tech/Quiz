const Quizes = [
     {
        question: "Q1: What is the UX?",
        a: "United Extend",
        b: "Umbrealla Extore",
        c: "US",
        d: "User Experience",
        answer: "answer4",
     },
     {
        question: "Q2: What is HTML?",
        a: "Hyper text map line",
        b: "High to man low",
        c: "Hyper text markup language",
        d: "hyper tired man life",
        answer: "answer3",
     },
  {
    question: "Q3: What is CSS?",
    a: "Cecaida sit sing",
    b: "Controll show show",
    c: "Cap sit stand",
    d: "Cascading style sheet",
    answer: "answer4",
  },
  {
    question: "Q4: What is NOX?",
    a: "Game",
    b: "Emulator",
    c: "Video",
    d: "Map",
    answer: "answer2",
 }
 ]


const question = document.querySelector('.question');
const anwser1 = document.querySelector('#option-1');
const anwser2 = document.querySelector('#option-2');
const anwser3 = document.querySelector('#option-3');
const anwser4 = document.querySelector('#option-4');
const submit = document.querySelector('#submit');

const RightAnswer = document.querySelectorAll('.quizs')

const Scores = document.querySelector('#scores');

let QuizesWise =0;
let Marks = 0;

const QuizesLoad = () =>{
    const QuizesList = Quizes[QuizesWise]

    question.innerHTML = QuizesList.question;

    option1.innerHTML = QuizesList.a;
    option2.innerHTML = QuizesList.b;
    option3.innerHTML = QuizesList.c;
    option4.innerHTML = QuizesList.d;

}
QuizesLoad();

const GetAnwser = () =>{
   let quizs;
   
   RightAnswer.forEach((CurrentANS) =>{
      if(CurrentANS.checked){
         quizs = CurrentANS.id;
      }
   })
      return quizs;
}
submit.addEventListener('click', () =>{
   const MarkedAnwser = GetAnwser();
   
   if(MarkedAnwser === Quizes[QuizesWise].answer){
      Marks++;

   };
   QuizesWise++;

   if(QuizesWise < Quizes.length){
      QuizesLoad();
   }else{
      Scores.innerHTML =
       `<h2>You Marked ${Marks}/${Quizes.length} </h2>
       <button style="
         color:#fff;
         background-color: black;
         border-radius:none;
         border:none;
          "
       class="btn" onclick="location.reload()">Try Again</button>
       `;
       Scores.classList.remove('scoore');
    }

})