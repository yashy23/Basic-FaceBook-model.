var database = [
{
	username: "yash",
	password: "thakkar"
}
];

var newsFeed = [
{
	username: "Bobby",
	timeline: "what the hell is this"
},
{
	username: "Sally",
	timeline: "I want a business"
}
];

var userNamePrompt = prompt("what's your username?");
var passwordPrompt = prompt("what's your password?");

function signIn (user, pass){
	if (user === database[0].username && pass === database[0].password){
		console.log (newsFeed);
	} else {
		alert("Sorry, wrong username or password");
	}
}

signIn(userNamePrompt, passwordPrompt);