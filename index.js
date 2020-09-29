function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(`HELLO`)
}

function logWhisper(string) {
  console.log(`hello`)
}

var uppercase = "HELLO"
uppercase.toUpperCase() === uppercase
var lowercase = 'hello!'
lowercase.toLowerCase() === lowercase
var mixedCase = 'Hi there!'
mixedCase.toLowerCase() === mixedCase
mixedCase.toUpperCase() === mixedCase

function sayHitoGrandma(string) {
if (lowercase === "hello") {
  console.log("I can't hear you!")
  return string.toUpperCase(`I can't hear you!`)
} else if (uppercase === "HELLO") {
  console.log("YES INDEED!")
  return string.toLowerCase(`YES INDEED!`)
} else if (mixedcase === "I love you, Grandma") {
  console.log("I love you, too.") 
  return string.toMixedCase(`I love you, too.`)
}
}
