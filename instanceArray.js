/*
  Your 3 Users will be the following.
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
};

//Create an Array called 'users' that will store all our instances of User.

var users = [];

//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

users.push(new User("Tyler", "tylermcginnis33@gmail.com", 'iLoveJS'));
users.push(new User("Cahlan", "cahlan@devmounta.in", 'iLoveHashtags'));
users.push(new User("Lenny", "lenny@theLenster.com", 'iLoveLentilSoup'));

console.log('Tyler\'s information is ');
//Console.log all of Tylers information

console.log("Name: " + users[0].name);
console.log("Email: " + users[0].email);
console.log("Password: " + users[0].pw);

console.log('Lenny\'s information is ');
//Now console.log all of Lennys information

console.log("Name: " + users[1].name);
console.log("Email: " + users[1].email);
console.log("Password: " + users[1].pw);

//Now create another instance of User using your own information and then add that to your users array.

var ty = new User("Ty", "crazysnoheadman@yahoo.com", "a34raa3");
users.push(ty);

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name.

var listUsers = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i].name);
  }
};

listUsers(users);
