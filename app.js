// Variables
const imageEl = document.querySelector(".studentImage");
const buttonsEl = document.querySelector(".studentButtons");
const optionBtnEl = document.querySelector(".optionBtn");
const scoreEl = document.querySelector(".score");
const answerEl = document.querySelector(".answer");
const getNewEl = document.querySelector("getNew");

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
const shuffleStudent = (students) => {
	for (let i = students.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = students[i];
		students[i] = students[j];
		students[j] = temp;
	}
};

// variable for pointing out the right answer
let correctStudent = "";

// function for picking out students for one round. Adds image and four buttons
const getStudent = () => {
	shuffleStudent(students);

	// picks out 4 students in new array
	const chosenStudents = students.slice(0, 4);

	// variable for highlighted and shuffled student
	correctStudent = students[0];
	// sets image in html
	imageEl.src = correctStudent.image;

	// shuffling the four students again for making it harder to figure out a pattern
	shuffleStudent(chosenStudents);

	// picks out names from students array and saves them
	const randomStudents = chosenStudents.map((students) => students.name);

	// place names in buttons
	randomStudents.forEach((student) => {
		buttonsEl.innerHTML += `<button class="optionBtn btn btn-lg text-light text-center m-2">${student}</button>`;
	});
};

// const getScore = () => {};
// game starts here
getStudent();

// variable for number of guesses
let guesses = 0;
// variable for numbers of times user is correct
let correctAnswers = 0;

let clicked = false;

// click event for buttons with students
buttonsEl.addEventListener("click", (e) => {
	if (e.target.tagName === "BUTTON") {
		// adds one with each guess
		guesses++;
		// console.log(e.target.innerText);
		console.log("Times guessed:", guesses);

		if (e.target.innerText === correctStudent.name) {
			answerEl.innerText = "Your answer is: On point!";
			// adds one point if answer is correct
			correctAnswers++;
			// buttonsEl.setAttribute("class", "correct");
			// console.log(e.target.innerText);
			console.log("Number of correct guesses", correctAnswers);
		} else {
			answerEl.innerText = "Your answer is: Disapointing....";
			// buttonsEl.setAttribute("class", "wrong");
			// console.log(e.target.innerText);
		}

		// shows result after guessing student and scrolls up to top for user to see
		scrollTo(0, 0);
		scoreEl.querySelector("span").textContent = `${correctAnswers}/10`;
		scoreEl.classList.remove("d-none");
	}
});
