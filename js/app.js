'use strict';

console.log("hello world");

let username = prompt("whats your username?");

console.log(username + " is a cool name");

let sports = prompt("do Angel like sports?").toLocaleLowerCase();

if (sports === 'y' || sports === 'yes') {
  alert("Correct, Angel does like sports!");
} else {
  alert("Wrong, Angel does like sports!");
}
