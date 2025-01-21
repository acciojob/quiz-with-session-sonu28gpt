//your JS code here.

// Do not change code below this line
// This code will just display the questions to the screen
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the highest mountain in the world?",
    choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
    answer: "Everest",
  },
  {
    question: "What is the largest country by area?",
    choices: ["Russia", "China", "Canada", "United States"],
    answer: "Russia",
  },
  {
    question: "Which is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
];
// Display the quiz questions and choices
let userAnswers=JSON.parse(sessionStorage.getItem('progress'))|| ["","","","",""]
function renderQuestions() {
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const questionElement = document.createElement("div");
    const questionText = document.createTextNode(question.question);
    questionElement.appendChild(questionText);
    for (let j = 0; j < question.choices.length; j++) {
      const choice = question.choices[j];
      const choiceElement = document.createElement("input");
      choiceElement.setAttribute("type", "radio");
      choiceElement.setAttribute("name", `${i}`);
      choiceElement.setAttribute("value", choice);
      if (userAnswers[i] === choice) {
        choiceElement.setAttribute("checked", true);
      }
      const choiceText = document.createTextNode(choice);
      questionElement.appendChild(choiceElement);
      questionElement.appendChild(choiceText);
    }
    // questionElement.appendChild(questionElement);
	  document.querySelector('#questions').appendChild(questionElement);
  }
}
renderQuestions();
 document.querySelectorAll('input[type="radio"]').forEach(input => {
            input.addEventListener('change', (event) => {
                const questionIndex = +event.target.name;
				console.log(questionIndex);
                userAnswers[questionIndex] = event.target.value;
                sessionStorage.setItem('progress', JSON.stringify(userAnswers));
            });
        });


let score=document.querySelector('#score');
let btn=document.querySelector('#submit');

btn.addEventListener('click',()=>{
	let total=0;
	for(let i=0;i<userAnswers.length;i++){
		if(questions[i].answer==userAnswers[i]){
			total++;
		}
	}
	localStorage.setItem('score',String(total));
	
	
	scoreUpdate();
	
})
function scoreUpdate() {
		let s=localStorage.getItem('score')
		if(s){
			score.textContent=`Your score is ${s} out of 5.`
		}
}