const string= "The revolution will not be televised"
console.log(string);

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined);

const song = "Fight the youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${score/highestScore*100}%`;
console.log(output);

const newline= `One day you finally knew
what you had to do, and began`;

console.log(newline);

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);

text = "HELLO WORLD";
console.log(text.charAt(0));
console.log(text.charCodeAt(0))

let char = text[0];
console.log(char)

let string1 = "Hello";
let string2 = "World!";
let string3 = string1.concat(" ", string2);
console.log(string3);

text = "It's a wonderful world!";
let part = text.slice(7,16);
console.log(part);
console.log(text.slice(7));
console.log(text.slice(-1));

text = "prince harry";
console.log(text.toUpperCase());

text = "PRINCE HARRY";
console.log(text.toLowerCase());

let text1 = "Hello World!     ";
console.log(text1.trim());
console.log(text1.trimStart());
console.log(text1.trimEnd());

text = "5";
let padded = text.padStart(4,"0");
console.log(padded);
console.log(text.padEnd(10,"#"));

text = "I'm Back!";
let newText = text.repeat(3);
console.log(newText);

text = "Please visit Microsoft!";
newText = text.replace("Microsoft", "Blackrock");
console.log(newText);

text = "world";
text.split(",") 




