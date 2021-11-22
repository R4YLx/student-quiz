// Variables
const scoreEl = document.querySelector(".score");
const imageEl = document.querySelector(".studentImage");
const buttonsEl = document.querySelector(".studentButtons");
const optionBtnEl = document.querySelector(".optionBtn");
const answerEl = document.querySelector(".answer");
const getNewEl = document.querySelector("#getNew");
const quizEl = document.querySelector(".theQuiz");
const answersEl = document.querySelector(".answers");

const students = [
	{
		name: "Adi Dzocaj",
		image: "assets/images/students/adi-dzocaj.jpg",
	},
	{
		name: "Alexander Bergquist",
		image: "assets/images/students/alexander-bergquist.jpg",
	},
	{
		name: "Alexander Kocman",
		image: "assets/images/students/alexander-kocman.jpg",
	},
	{
		name: "Benjamin Benson",
		image: "assets/images/students/benjamin-benson.jpg",
	},
	{
		name: "Benjamin Tsubarah",
		image: "assets/images/students/benjamin-tsubarah.jpg",
	},
	{
		name: "Calle Nilsson",
		image: "assets/images/students/calle-nilsson.jpg",
	},
	{
		name: "Chikage Takahashi Molander",
		image: "assets/images/students/chikage-takahashi-molander.jpg",
	},
	{
		name: "Daniel Be",
		image: "assets/images/students/daniel-be.jpg",
	},
	{
		name: "Daniel Carlsson",
		image: "assets/images/students/daniel-carlsson.jpg",
	},
	{
		name: "Elin Ahlgren",
		image: "assets/images/students/elin-ahlgren.jpg",
	},
	{
		name: "Emma Käck",
		image: "assets/images/students/emma-kack.jpg",
	},
	{
		name: "Eric Ståhl",
		image: "assets/images/students/eric-stahl.jpg",
	},
	{
		name: "Frans Gustavson Påsse",
		image: "assets/images/students/frans-gustavson-passe.jpg",
	},
	{
		name: "Glafira Veretennikova",
		image: "assets/images/students/glafira-veretennikova.jpg",
	},
	{
		name: "Gustaf Grönlund",
		image: "assets/images/students/gustaf-gronlund.jpg",
	},
	{
		name: "Hanna Håkanson",
		image: "assets/images/students/hanna-hakanson.jpg",
	},
	{
		name: "Heidi Sjöberg",
		image: "assets/images/students/heidi-sjoberg.jpg",
	},
	{
		name: "Hugo Carzborn",
		image: "assets/images/students/hugo-carzborn.jpg",
	},
	{
		name: "Jesper Kling",
		image: "assets/images/students/jesper-kling.jpg",
	},
	{
		name: "Johan Ranestam",
		image: "assets/images/students/johan-ranestam.jpg",
	},
	{
		name: "Johanna Bäckström",
		image: "assets/images/students/johanna-backstrom.jpg",
	},
	{
		name: "Johanna Jönsson",
		image: "assets/images/students/johanna-jonsson.jpg",
	},
	{
		name: "Jona Torsson",
		image: "assets/images/students/jona-torsson.jpg",
	},
	{
		name: "Josefine Ahlstedt",
		image: "assets/images/students/josefine-ahlstedt.jpg",
	},
	{
		name: "Julia Jespersdotter Högman",
		image: "assets/images/students/julia-jespersdotter-hogman.jpg",
	},
	{
		name: "Julia Nemell",
		image: "assets/images/students/julia-nemell.jpg",
	},
	{
		name: "Linus Lindberg",
		image: "assets/images/students/linus-lindberg.jpg",
	},
	{
		name: "Malin Olsson",
		image: "assets/images/students/malin-olsson.jpg",
	},
	{
		name: "Maria Haara-Lundhammar",
		image: "assets/images/students/maria-haara-lundhammar.jpg",
	},
	{
		name: "Maria Lövgren",
		image: "assets/images/students/maria-lovgren.jpg",
	},
	{
		name: "Nikola Dimitrijoski",
		image: "assets/images/students/nikola-dimitrijoski.jpg",
	},
	{
		name: "Paulina Kiendys",
		image: "assets/images/students/paulina-kiendys.jpg",
	},
	{
		name: "Raymond Lam",
		image: "assets/images/students/raymond-lam.jpg",
	},
	{
		name: "Robin Karlsson",
		image: "assets/images/students/robin-karlsson.jpg",
	},
	{
		name: "Sara Almqvist",
		image: "assets/images/students/sara-almqvist.jpg",
	},
	{
		name: "Tim Nilsson",
		image: "assets/images/students/tim-nilsson.jpg",
	},
	{
		name: "Tirapat Sukjit",
		image: "assets/images/students/tirapat-sukjit.jpg",
	},
	{
		name: "Tobias Silfverberg",
		image: "assets/images/students/tobias-silfverberg.jpg",
	},
	{
		name: "Wiktoria Dobrzewinska",
		image: "assets/images/students/wiktoria-dobrzewinska.jpg",
	},
];
const missing_students = [
	{
		name: "Andjela Saponjic",
		image: null,
	},
	{
		name: "Cazpian Levén",
		image: null,
	},
	{
		name: "Frida Lam",
		image: null,
	},
	{
		name: "Maxim Khnykin",
		image: null,
	},
	{
		name: "Philip Le",
		image: null,
	},
];

// The Fisher-Yates algorithm (shuffles arrays)
const shuffleStudent = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
};

// variable for pointing out the right answer
let currentStudent = "";

// function for picking out students for one round. Adds image and four buttons
const getStudent = () => {
	shuffleStudent(students);

	// picks out 4 students in new array
	const chosenStudents = students.slice(0, 4);

	// variable for student on display/correct answer
	currentStudent = students[0];
	// sets image in html
	imageEl.src = currentStudent.image;

	// shuffling the four students again for making it harder to figure out a pattern
	shuffleStudent(chosenStudents);
	buttonsEl.innerHTML = "";

	// picks out names from students array and saves them in a new array
	const chosenStudentsName = chosenStudents.map((student) => student.name);

	// place names in buttons
	chosenStudentsName.forEach((studentName) => {
		buttonsEl.innerHTML += `<button class="optionBtn btn btn-lg text-light text-center m-2">${studentName}</button>`;
	});
};

// game starts here
getStudent();

// variable for number of guesses
let guesses = 0;
// variable for numbers of times user is correct
let correctAnswers = 0;
// an array for tracking the users' guesses
let givenAnswers = [];
// variable for highscore
let highscore = false;

// function for keeping track of correct guesses and pushing into new array
const correctChoice = (studentObj) => {
	// do all the things related to the users' correct choice
	givenAnswers.push(studentObj);
	answerEl.innerHTML = `<p class="answer correct">Your answer was on point!</p>`;
	// adds one point if answer is correct
	correctAnswers++;
	// console.log(e.target.innerText);
	getStudent();
	// console.log("Number of correct guesses", correctAnswers);
};

// function for keeping track of incorrect guesses and pushing into new array
const incorrectChoice = (studentObj) => {
	// do all the things related to the users' incorrect choice
	givenAnswers.push(studentObj);
	answerEl.innerHTML = `<p class="answer wrong">Your answer was disapointing!</p>`;
	getStudent();
};

// click event for buttons with students
buttonsEl.addEventListener("click", (e) => {
	// scrolls to top of page for user to see result
	scrollTo(0, 0);
	if (e.target.tagName === "BUTTON") {
		// adds one with each guess
		guesses++;
		// console.log(e.target.innerText);
		console.log("Times guessed:", guesses);

		let studentObj = {
			name: currentStudent.name,
		};

		// if statement divides correct and incorrect answers
		if (e.target.innerText === currentStudent.name) {
			studentObj.correct = true;
			correctChoice(studentObj);
		} else {
			studentObj.correct = false;
			incorrectChoice(studentObj);
		}

		// shows result after 10 guesses
		if (guesses === 10) {
			showResult();
			newRound();
		}
	}
});

// function for showing result
const showResult = () => {
	// shows result after guessing student
	scoreEl.querySelector("span").textContent = `${correctAnswers}/${guesses}`;
	scoreEl.classList.remove("d-none");
	answerEl.innerText = "Wanna go for another round?";
	quizEl.classList.add("d-none");
	console.log("show me the result!");

	const green = givenAnswers.filter((student) => {
		student.correct === true;
		// answersEl.innerHTML = `<li class="correct">${givenAnswers.name}</li>`;
	});
	const red = givenAnswers.filter((student) => {
		student.correct === false;
		// answersEl.innerHTML = `<li class="wrong">${givenAnswers.name}</li>`;
	});

	console.log("list of correct:", green);
	console.log("list of wrong", red);

	/*
	givenAnswers.map((student) => {
		let li = document.createElement("li");
		li.innerHTML = student.name;
		if (student.correct) {
			li.classList.add("correct");
		} else {
			li.classList.add("wrong");
		}
		answersEl.appendChild(li);
	});

	*/
};

// Another round button
const newRound = () => {
	getNewEl.classList.remove("d-none");
	getNewEl.addEventListener("click", () => {
		scoreEl.classList.add("d-none");
		answerEl.innerText = "Your answer is:";
		guesses = 0;
		correctAnswers = 0;
		getNewEl.classList.add("d-none");
		quizEl.classList.remove("d-none");
		getStudent();
	});
};
