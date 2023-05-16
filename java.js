 var questions = [ 

	{

		question: "Каого цвета солнце?",

		answer: "желтого"

	},

	{

		question: "Какой формы планета Земля?",

		answer: "шар"

	},

	{

		question: "В каком городе мы находимся?",

		answer: "челябинск"

	},

	{

		question: "Какой сейчас год?",

		answer: "2023"

	},

	{

		question: "Сколько днй в неделе?",

		answer: "7"

	}

]
for(i = 0; i < questions.length; i++) {

	q = questions[i].question

	document.getElementById('question' + [i]).textContent = q

}



function testResults() {

	var correct = 0;

	var incorrect = 0;

	for(i = 0; i < questions.length; i++) {	

		var answer = questions[i].answer

		var guess = document.getElementById('answer' + [i]).value

		var questionSpot = document.getElementById('question' + [i])

		if(answer == guess) {

			questionSpot.className = 'correct'

			correct++

		} else {

			questionSpot.className = 'incorrect'

			incorrect++

		}

	}

	document.getElementById('correct').textContent = correct

	document.getElementById('incorrect').textContent = incorrect

}