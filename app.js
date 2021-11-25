// Variables
const highscoreEl = document.querySelector(".highscore");
const scoreEl = document.querySelector(".score");
const imageEl = document.querySelector(".studentImage");
const buttonsEl = document.querySelector(".studentButtons");
const resultEl = document.querySelector(".result");
const getNewEl = document.querySelector("#getNew");
const quizEl = document.querySelector(".theQuiz");
const answersEl = document.querySelector(".resultList");
const scoreboxEl = document.querySelector(".scorebox");

// Array with students
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

// variable for pointing out the right answer
let currentStudent = "";
// variable for number of guesses
let guesses = 0;
// variable for numbers of times user is correct
let correctAnswers = 0;
// an array for tracking the users' guesses
let givenAnswers = [];
// variable for keeping track of highscore
let highscore = 0;

///////////////////////////////////////////////////////

// The Fisher-Yates algorithm (shuffles arrays)
const shuffleStudent = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
};

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

	// console.log(currentStudent);
};

// game starts here
getStudent();

// function for keeping track of correct guesses and pushing into new array
const correctChoice = (studentObj) => {
	// do all the things related to the users' correct choice
	givenAnswers.push(studentObj);
	resultEl.innerHTML = `<p class="answer correct">Your answer was on point!</p>`;
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
	resultEl.innerHTML = `<p class="answer wrong">Your answer was disapointing!</p>`;
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
		// console.log("Times guessed:", guesses);

		let studentObj = {
			name: currentStudent.name,
			image: currentStudent.image,
		};

		// if statement divides correct and incorrect answers
		if (e.target.innerText === currentStudent.name) {
			studentObj.correct = true;
			correctChoice(studentObj);
			// console.log(studentObj);
		} else {
			studentObj.correct = false;
			// studentObj.givenChoice = e.target.innerText;
			// studentObj.correctChoice = currentStudent.name;
			incorrectChoice(studentObj);
			// console.log(studentObj);
		}

		// shows result after 10 guesses
		if (guesses === 10) {
			showResult();
			newRound();
		}
		// console.log("You clicked on:", e.target.innerHTML);
		// console.log("Correct student:", currentStudent.name);
	}
});

// function for showing result
const showResult = () => {
	// filters out the wrong given answers and displays correct name with correct image
	scoreboxEl.classList.remove("d-none");
	givenAnswers.filter((student) => {
		if (student.correct === false) {
			answersEl.innerHTML += `<div class="card" style="width: 18rem;">
			<img src="${student.image}" class="card-img-top" alt="student">
			<div class="card-body">
			  <p class="card-text wrong text-center">${student.name}</p>
			</div>
		  </div>`;
		}
	});

	// checking if it's a new highscore
	if (correctAnswers > highscore) {
		highscoreEl.innerHTML = `<p class="highscore display-6">Well done! Your new highscore is: ${correctAnswers}</p>`;

		highscore = correctAnswers;
	} else {
		highscoreEl.innerHTML = `<p class="highscore display-6">No new highscore. Better luck next time!</p>`;
	}

	// shows result after guessing student
	scoreEl.querySelector("span").textContent = `${correctAnswers}/${guesses}`;
	scoreEl.classList.remove("d-none");
	resultEl.innerText = "Wanna go for another round?";
	quizEl.classList.add("d-none");
	// console.log("show me the result!");
	// console.log("givenAnswers", givenAnswers);
};

// Another round button resets all stats execpt highscore
const newRound = () => {
	getNewEl.classList.remove("d-none");
	getNewEl.addEventListener("click", () => {
		highscoreEl.innerHTML = `<p class="highscore display-6">Current highscore: ${highscore}</p>`;
		scoreEl.classList.add("d-none");
		resultEl.innerText = "";
		guesses = 0;
		correctAnswers = 0;
		answersEl.innerHTML = "";
		givenAnswers = [];
		getNewEl.classList.add("d-none");
		quizEl.classList.remove("d-none");
		scoreboxEl.classList.add("d-none");
		getStudent();
	});
};
