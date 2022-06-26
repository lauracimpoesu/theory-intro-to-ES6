//// 1/33 TEMPLATE LITERALS
let word1 = 'Dylan';
let word2 = 'Israel';
let num1 = 2;
let num2 = 3;

// const fullName = `${word1} ${word2}`;
let example = `${word1} ${word2}`;
// console.log(fullName);

console.log(example);
document.getElementById('example').innerText = example;



//// 2/33 DESTRUCTURING OBJECTS 
const player = {
	name: 'Lebron James',
	club: 'LA Lakers', 
	address: {
		city: 'Los Angeles'
	}
};

console.log(player.club); // shows LA LAKERS
console.log(player.address.city); // shows Los Angeles
//like this it's too much, so we do Decustructuring, like this:

const { name, club, address: { city } } = player;
// so now instead of using player.name or player.club i can just call it name or club | without the player.
//see:
console.log(`${name} plays for ${club}`); // Lebron James plays for LA Lakers 
console.log(`${name} lives in ${city}`); // Lebron James lives in Los Angeles



//// 3/33 destructuring objects CHALLENGE
const student = {
	name: 'Kyle',
	age: 24,
	projects: {
		diceGame: "Two player dice game using JavaScript"
	}
}

const { name, age, projects: { diceGame } } = student;
console.log(`${name} has ${age} years old and has this game of: ${diceGame}`);



//// 4/33 DESTRUCTURING ARRAYS
let [firstName, middleName, lastName] = ['Dylan', 'Coding God', 'Israel'];
lastName = 'Clements';
console.log(lastName); 



//// 5/33 OBJECT LITERAL 
function addressMaker(city, state) {
		//defining a new variable of the address - at first as an empty object 
	//const newAddress = {newCity: city, newState: state}; // now setting a property called newCity with the value of city and state (with the property newState)
	 	// Commenting the line above because we can do it like this:
	const newAddress = {city, state}; // JavaScript will assign it AUTOMATICALLY without being repetitive like before (in the past)

	console.log(newAddress) // consoling the newAddress
}

addressMaker('Austin', 'Texas'); 



//// 6/33 object literal CHALLENGE
// Combining Template Literal, Objects Literal and Destructuring
//console.log the new city & new state
// initial exercise | b e f o r e:
function addressMaker(address) {
	const { city, state, country } = address; 
	const newAddress = {
		city,
		state,
		country: 'United States'
	};
	console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
}

addressMaker({city: 'Austin', state: 'Texas'}); 



//// 7/33 FOR OF LOOP
let incomes = [62000, 67000, 75000]; 
let total = 0; 
// we might want to ITERATE the incomes variable's values and add it to the total variable value with the For Loop


for (const income of incomes) { // this is saying: take EACH ELEMENT of Incomes (with the income) and do something with it (in this case does the total)
	console.log(income);
	total += income;
}

console.log(total);

// Another Example
let fullName = "Dylan Coding God Israel"; 
	for (const names of fullName) {
		console.log(names);
	}



//// 8/33 for of loop CHALLENGE
const students = [
	{ name: 'John', city: 'New York' },
	{ name: 'Peter', city: 'Paris' },
	{ name: 'Kate', city: 'Sidney' }
];
	for (const student of students) {
		console.log(`${student.name} lives in ${student.city}`);
	}



//// 9/33 SPREAD OPERATOR 
let contacts = ["Mary", "Joel", "Danny"];
let personalFriends = contacts;
console.log(personalFriends); 
contacts.push("John");
console.log(contacts);
// Creating a Real New Array | (and not just referencing it as before) | make a COPY of the array like this: 
//let personalFriends = [ ...contacts ]; // i'm making a new copy of that array 
// i can also do this: (adding a new value)
//let personalFriends = ["David", ...contacts, "Lily"]; // added everything #cool

//As for OBJECTS:
let person = {
	name: 'Adam',
	age: 25,
	city: 'Manchester'
} 

let employee = {
	...person,
	salary: 50000,
	position: 'Software Developer'
};
console.log(employee);



//// 10/33 spread operator CHALLENGE
const shoppingList = ["eggs", "milk", "butter"];
const shoppingBasket = [...shoppingList, "bananas", "watermelon"];
console.log(shoppingBasket);




//// 11/33 REST OPERATOR | that gives us the ability of getting the Arguments OUT of our function, and it's used when we don't know how many things will be
function add(...nums) {
	console.log(nums);
}

add(4, 5, 6, 12);



//// 12/33 ARROW FUNCTIONS
// the old style - Function Declaration: 
function breakfastMenu() {
	return "I'm going to scrambled eggs for breakfast";
}
// Anonymous Functions:
const lunchMenu = function() {
	return "I'm going to eat pizza for lunch";
}

// the new #ES6 - Arrow Functions:
// = () => {    }
const dinnerMenu = food => `I'm going to eat a ${food} for dinner`;
console.log(dinnerMenu("chicken salad"));



//// 13/33 DEFAULT PARAMS
const leadSinger = (artist = "someone") => {
	console.log(`${artist} is the lead singer of Coldplay`);
}
leadSinger("Chris Martin");



//// 14/33 default params CHALLENGE
const foodList = (food = "something") => {
	console.log(`I'm going to buy ${food} from the grocery shop`);
}
foodList("milk"); 



//// 15/33 includes()
let numArray = [1,2,3,4,5];
console.log(numArray.includes(0));



//// 16/33 includes() CHALLENGE
const listIngredients = ["flour", "sugar", "eggs", "butter"];

if (listIngredients.includes("chocolate")) {
	console.log("We are going to make a chocolate cake")
} else {
	console.log("We can't make a chocolate cake because we are missing the ingredient chocolate");
}



//// 17/33 LET & CONST
const example = [];
example.firstName = 'Dylan';
console.log(example); 
*/



/* //// 18/33 IMPORT & EXPORT 
// let's say i'm on a different file right now; example.js :
export const data = [1,2,3];
// now importing it into this file (the second file, the one i want to import the export on file 1)
import { data } from './example.js';
let updatedData = data;
data.push(5);
console.log(updatedData); 



//// 19/33 import & export CHALLENGE 
import { add } from './export.js';
let result = add(2, 2);
console.log(result); 



//// 20/33 padStart() & padEnd()
let example = 'Dylan Israel';  

console.log(example.padStart(10, 'a'));
console.log(example.padEnd(10, 'a'));



//// 21/33 padStart() & padEnd() CHALLENGE
let example = 'YouTube.com/CodingTutorials360';

// console.log(example.padStart(100).length);
console.log(example.padEnd(1)); 



//// 22/33 CLASSES
export class Animal { // we've DEFINED a Class here that doesn't do anything yet
	// and now we need to BUILD an INSTANCE of this using the CONSTRUCTOR
	constructor(type, legs) {
		this.type = type;
		this.legs = legs;
			// the constructor here is really just assigning those values to our Animal Class
	}

	makeNoise(sound = 'Loud Noise') {
		console.log(sound);
	}

	get metaData() {
		return `Type: ${this.type} Legs: ${this.legs}`;
	}

	static return10() {
		return 10;
	}
}

// Let's we want to add a Dog here or a Lion or a Zebra - but we do not want to re-replicate somethings of the previous Class, we want to add another one on it
// well we can define a new class here that EXTENDS the previous Animal generic big class | INHERITING the Constructor 
export class Cat extends Animal {
	makeNoise(sound = "meow");
	console.log(sound);
}



//// 24/33 classes CHALLENGE 
class Player {
	contructor(name, country) {
		this.name = name; 
		this.country = country;
	}

	introduce() {
		console.log(`${this.name} was born in ${this.country}`);
	}
}

const messi = new Player("Messi", "Argentina");

messi.introduce();


class TennisPlayer extends Player {
	constructor(name, country, age) {
		super(name, country);
		this.age = age;
	}

	playTennis() {
		console.log(``);
	}

	playTennis() {
		console.log(`${this.name} is ${this.age} years old and knows how to play Tennis`);
	}
}


roger.introduce();
const roger = new TennisPlayer("Roger Federer", "Spain", 38);



//// 25/33 TRAILING COMMAS 
function add(param1,) {
	const example = {
		name: 'Dylan', 
	}
	console.log(example);
}
add(2);



//// 26/33 PROMISES
// 1) Mostly used on NETWORK REQUESTS such as trying to FETCH some DATA from an API
// 2) or they can be used for some ASYNCHRONOUS Functions that i'm trying to run 
const buyFlightTicket = () => { // values of the promise will be stored in this buyFlightTicket | With 3 possible Outcomes: 1. Pending 2. Successful 3. Rejected 
	return new Promise( (resolve, reject) => { // returning a new promise
		setTimeout( () => {
			const error = false;

			if(error) {
				reject("Sorry your payment was not successful")
			} else {
				resolve("Thank you, your payment was successful")
			}
		}, 3000) // 3000 is 3 seconds
	}) 
} 

buyFlightTicket()
.then( (success) => console.log(success) )
.catch( (error) => console.log(error) ); 



//// 27/33 challenge PROMISES
const userData = () => {
	return new Promise( (resolve, reject) => {
		const error = true;introduce

		if(error) {
			reject('500 Level Error');
		} else {
			resolve({
				firstName: 'Dylan',
				age: 32,
				email: 'dylansememail@gmail.com'
			})
		}
	} )
}

userData
.then((data) => console.log(data))
.catch((error) => console.log(error)); 




//// 28/33 INTRODUCTION: FETCH
// for API Calls | no longer needing jQuery anymore
fetch('https://jsonplaceholder.typicode.com/comments/1')
	.then(response => response.json())
	.then(data => console.log(data)) 



fetch('https://jsonplaceholder.typicode.com/comments', {
	method: "POST",
	body: JSON.stringify({
		postId: 1,
		name: 'Dylan',
		email: 'dylansemail3100@gmail.com',
		body: 'That was dope!'
	})
})
.then(response => response.json())
.then(data => console.log(data))



//// 29/33 fetch CHALLENGE 
// GET:
fetch(fetch('https://jsonplaceholder.typicode.com/comments/1')
	.then((response) => response.json())
	.then((data) => console.log(data))

// POST
fetch('https://jsonplaceholder.typicode.com/comments', {
        {
            method: 'POST',
            body: JSON.stringify({
            	name: 'Commen 105',
            	email: 'dylansemeail@gmail.com',
            	body: 'Dopes comment in the game',
            	postId: 1 
            })
        }
    })
    .then((response) => response.json())
    .then((data) => console.log(data))



//// 30/33 ASYNC & AWAIT 
const photos = [];

async function photoUpload() {
	let uploadStatus = new Promise((resolve, reject) => {
		setTimeout(() => {
			photos.push("Profile Pic");
			resolve("Photo Uploaded")
		}, 3000)
	})

	let result = await uploadStatus;

	console.log(result);
	console.log(photos.length);
}

photoUpload();




//// 31/33 async & await CHALLENGE
const apiUrl = "https://api.chucknorris.io/jokes/random";

async function getJoke() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    console.log(data.value);
}

getJoke(); 



//// 32/33 SETS IN ES6 
const exampleSet = new Set([1,1,1,1,2,2,2,2]);

exampleSet.add(5);
console.log(exampleSet.delete(5));
console.log(exampleSet.has(5));

exampleSet.clear();

console.log(exampleSet.size); 


















































