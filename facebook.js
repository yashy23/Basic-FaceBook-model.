var database = [
{
	username: "yash",
	password: "thakkar"
},
{
	username: "john",
	password: "secret"
},
{
	username: "karan",
	password: "super"
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

function isUserValid(username, password){
for (var i=0; i < database.length; i++){
		if (database[i].username === username && database[i].password === password){
			return true;
		} 
		
	}
	return false;
}


function signIn (username, password){
	if (isUserValid(username, password)){
		console.log(newsFeed);
	}	else {
			alert("Sorry, wrong username or password");
	}
}

signIn(userNamePrompt, passwordPrompt);