// JS Intro
console.log("Hello world!"); //when index is worked this appears in f12

// Variables
var a = 10; // number
// a can be changed to a string etc later
var b = 3.14; // number
var c = "Javascript"; // string

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);

console.log(a,b,c);

var firstnum = 10;
var secondnum = "20";
var result=firstnum + secondnum
console.log(result, typeof result); // prints 1020
// because of automatic type conversion
// turning both into strings
result = firstnum-secondnum;
console.log(result, typeof result); // prints -10
// because of automatic type conversion
// turning both into numbers

// HOISTING (!) asked in interviews
var num1;
console.log(num1, typeof num1); // prints undefined
num1 = 20;
deneme();
// prints "Hello from function"
function deneme() {
  console.log("Hello from function");
}

// BOOLEAN
var bool1 = true;
console.log(bool1, typeof bool1);
var bool2 = false;
console.log(bool2, typeof bool2);

if (age) {
    age >= 18 ? console.log("You can drive") : console.log("You can't drive");
    // age is not defined yet
}

// UNDEFINED DATA
var userName;
console.log(username, typeof username); // undefined

// NULL
var isNull = null;
console.log(isNull, typeof isNull); // object

// OBJECT
var user = {
    name : "Sinem",
    age: 22,
    isActive : true,
    grades: {
        math:90,
        physics:100,
    },
    favFruits: ["banana", "strawberry"],
};
console.log(user, typeof user);
console.log(user.name, typeof user.name);

// ARRAY
var fruits = ["banana","strawberry","pineapple"];
console.log(fruits, typeof fruits);
console.log(fruits[0], typeof fruits[0]);
console.log(fruits[fruits.length-1]);

// FUNCTIONS
function hello(){
    console.log("Hello world!");
}
hello();
console.log(hello, typeof hello);

// DATE
var date = new Date();
console.log(date, typeof date);

var a = [10];
var b = a;
console.log("1-",a,b); // 1- 10 10
a = [20];
console.log("2-",a,b); // 2- 20 10
console.log("3-",a*b) // 3- 200

var a = [10,20,30,40,50];
var b = a; //reference type
console.log("1-",a,b); // 1- 10,20,30,40,50 10,20,30,40,50
a[0] = 0;
a.push(60);
console.log("2-",a,b); // 2- 0,10,20,30,40,50,60 0,10,20,30,40,50,60

// SCOPE
var a = 10;
function scope(){
    var b = 20;
    console.log(a,b);
}
scope();
if (true) {
    var c = 30;
}
{
    var d = 40;
}
console.log(a,b,c,d); // Scope cannot see c and d (not defined anywhere in code)

// TYPE CONVERSIONS
var a = 5;
console.log(a, typeof a);
var a = String(a);
console.log(a, typeof a);
var a = Number(a);
console.log(a, typeof a);

var a = 5 + "5";
console.log(a, typeof a);
var a = 5 - "5";
console.log(a, typeof a);

// OPERATORS
// Arithmetic
console.log(10+5, 10-5, 10/5, 10*5);
console.log(10%3); //remainder
console.log(10**5); //exponent
console.log(10**0.5); //square root

// MATH FUNCTIONS
let sonuc;
sonuc = Math.PI;
sonuc = Math.round(3.6);
sonuc = Math.ceil(3.2);
sonuc = Math.floor(3.9);
sonuc = Math.sqrt(sonuc);
sonuc = Math.random();

// STRING FUNCTIONS
var mystr = "Hello World";
console.log(mystr);
console.log(mystr.length);
console.log(mystr.toUpperCase());
console.log(mystr.toLowerCase());
console.log(mystr.indexOf("World"));
console.log(mystr.lastIndexOf("World"));
console.log(mystr.slice(0,5));
console.log(mystr.replace("World","Sinem"));
console.log(mystr.concat(" ", "Gençer"));
console.log(mystr.trim());
console.log(mystr.split(" "));
console.log(mystr.charAt(0));
console.log(mystr.includes("World"));
console.log("isim ","\nsoyisim"); // new line
console.log("isim ","\tsoyisim"); // tab
console.log("isim ","\bsoyisim"); // backspace

// TEMPLATE LITERALS
var name = "Sinem";
var surname = "Gençer";
value = `İsim: ${name}
Soyisim: ${surname}`;
console.log(value);

value = `
<ul>
    <li> İsim: ${name} </li>
    <li> Soyisim: ${surname} </li>
</ul>
`
// ARRAYS
const langs = ["Python","Java","JavaScript","C#"];
const numbers = [43, 22, 35, 4, 12, 80, 50, 8, 99];
console.log(langs, langs.length);
console.log(langs[0]);
console.log(numbers[numbers.length-1]);
console.log(numbers.sort());
// and more

// OBJECTS
const person = {
    name: "Sinem",
    age: 22,
    isActive: true,
    favFruits: ["banana", "strawberry"],
    favLangs: ["Python","Java","JavaScript","C#"],
    favNumbers: [43, 22, 35, 4, 12, 80, 50, 8, 99],
};
console.log(person.name);
console.log(person.favFruits);

// DATE
const date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTime());

// COMPARISON OPERATORS
value = 1 == 2; // Is equal? False
value = 1 === 2; // Is value and type equal? False
value = a != b; // Is not equal? True
value = a !== b; // Is not equal? True
value = 1 < 2; // Is less than? True
value = 1 > 2; // Is greater than? False

// AND OPERATOR
value = a > 0 && b > 0; // Both are true? True
value = a > 0 && b < 0; // One is false? False
// OR OPERATOR
value = a > 0 || b > 0; // At least one is true? True
value = a > 0 || b < 0; // At least one is true? True

// CONDITIONS
if (a > 0) {
    console.log("a is positive");
} else {
    console.log("a is negative");
}

if (a > 0) {
    console.log("a is positive");
} else if (a < 0) {
    console.log("a is negative");
} else {
    console.log("a is zero");
}

// SWITCH CASE
const islem = 4;
switch (islem) {
    case 1:
        console.log("Toplama");
        break;
    case 2:
        console.log("Çıkarma");
        break;
    case 3:
        console.log("Çarpma");
        break;
    case 4:
        console.log("Bölme");
        break;
    default:
        console.log("Geçersiz işlem");
        break;
}

// LOOPS
for (let i = 0; i < 10; i++) {
    console.log(i); // can also use break or continue in if statements
}

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// FUNCTIONS
function hello(name) {
    //console.log("Hello world!");
    return `Hi ${name}`;
}
console.log(hello("Sinem"))

// ARROW FUNCTION
const square = (x) => x * x;
console.log(square(5));

// WHILE LOOP
let i = 0;
while (i>10) {
    console.log(i);
    i++;
}

do {
    console.log(i);
    i--;
} while (i>0);

langs.forEach(function(lang,index)
{
    console.log(index + " - " + lang);
})

// MAP FUNCTION
langs.map(function(lang,index){
    console.log(index + " - " + lang);
})
