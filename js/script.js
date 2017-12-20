// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// an array of quote objects
var quotes = [
	{
		quote: "I'm gonna make him an offer he can't refuse.",
		source: "Don Vito Corleone",
		citation: "The Godfather",
		year: "1972",
		genre: "Crime Drama",
		color: "#ee8c8c"
	},
	{
		quote: "E.T. phone home.",
		source: "E.T.",
		citation: "E.T. The Extra-Terrestrial",
		year: "1982",
		genre: "Sci-Fi",
		color: "#8c8cee"
	},
	{
		quote: "I'll be back",
		source: "Terminator",
		citation: "The Terminator",
		year: "1984",
		genre: "Action Sci-Fi",
		color: "#8cee93"
	},
	{
		quote: "My mama always said life was like a box of chocolates. You never know what you're gonna get.",
		source: "Forrest Gump",
		citation: "Forrest Gump",
		year: "1994",
		genre: "Drama Romance",
		color: "#729aee"
	},
	{
		quote: "Here's Johnny!",
		source: "Jack Torrance",
		citation: "The Shining",
		year: "1980",
		genre: "Horror",
		color: "#eec172"
	},
	{
		quote: "Hello, gorgeous",
		source: "Fanny Brice",
		citation: "Funny Girl",
		year: "Romance Comedy",
		color: "#c172ee"
	},
	{
		quote: "Snap out of it!",
		source: "Loretta Castorini",
		citation: "Moonstruck",
		year: "1987",
		genre: "Romance Comedy",
		color: "#2fa7c5"
	},
	{
		quote: "I can be smart when it's important.",
		source: "Lorelei Lee",
		citation: "Gentlemen Prefer Blondes",
		year: "1953",
		genre: "Comedy Musical",
		color: "#351c75"
	}
];

// selects a random quote object from the quotes array
function getRandomQuote(){
	// select a random number between 1 and quotes length
	var randomNumber = Math.floor(Math.random() * quotes.length);
	console.log(randomNumber);
	// pluck the object from the array by index using random number
	var randomQuote = quotes[randomNumber];
	// return the random quote object
	return randomQuote;
}

// constructs a string containing the different properties of the quote object
function printQuote(){
	var randomQuote = getRandomQuote();
	var message;
	message = '<p class="quote"> '+randomQuote.quote+' </p><p class="source"> '+ randomQuote.source;
	if (randomQuote.citation !== '') {
		message += '<span class="citation">' + randomQuote.citation + '</span>';
	}
	if (randomQuote.year !== '') {
		message += '<span class="year">' + randomQuote.year + '</span>';
	}
	if (randomQuote.genre !== '') {
		message += '<span class="genre">, ' + randomQuote.genre + '</span>';
	}
	message += '</p>'
	document.getElementById('quote-box').innerHTML = message;
	document.body.style.backgroundColor = randomQuote.color;
}

// automate
var myVar = setInterval(printQuote, 5000);