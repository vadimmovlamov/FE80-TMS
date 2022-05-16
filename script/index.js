<<<<<<< HEAD
/* const fun = function (value) {
    if (value > 10 && value != 5) return 'error';
    if (value = 5) return 'its middle';
    if (value === 1) return 'lower';
    if (value = 6) return 'upper';
    if (value <= 20) return 'its midle';
}
console.log(fun(30)); */


/* const rename = 'max';
const name = function(max){
    if (max === rename) return 'hi max';
} */


const name = function(max){
    if (max === 'max') return 'hi max';
    /* if (max != 'max') return 'error'; */
    if (max === 1) return 'number';
}
console.log(name(1));

=======
                    /* Task one */

/* 
function sayHello(name) {
    if (name === 'Oleg') {
        alert('Hello, Oleg!');
    } else if (name === 'Adrian') {
        alert('good evening, Adrian!');
    } else if (name === 'Vadim') {
        alert('Hi, pretty boy! Do you remember me?');
    } else {
        alert('Hello, hippopotamus =)');
    }
}

function sayHello(name) {
    if (name === 'Oleg') return alert('Hello, Oleg!');
    if (name === 'Adrian') return alert('good evening, Adrian!');
    if (name === 'Vadim') return alert('Hi, pretty boy! Do you remember me?');
    if (name !== 'Oleg' && 'Adrian' && 'Vadim') return alert('Hello, hippopotamus =)');
}

function sayHello(name) {
    const message = (name === 'Oleg') ? 'Hello, Oleg!' : 
    (name === 'Adrian') ? 'good evening, Adrian!!' :
    (name === 'Vadim') ? 'Hi, pretty boy! Do you remember me?' :
    'Hello, hippopotamus =)';
    alert(message);
} 

const messageHi = function (name){
    res = prompt('Enter name (Oleg or Adrian or Vadim or smb', [name]);
    if (res === 'Oleg') return alert('Hello, Oleg!');
    if (res === 'Adrian') return alert('good evening, Adrian!');
    if (res === 'Vadim') return alert('Hi, pretty boy! Do you remember me?');
    if (res !== 'Oleg' && 'Adrian' && 'Vadim') return alert('Hello, hippopotamus =)');
}
messageHi();
*/

/* const messageHi = (name) =>{
    res = prompt('Enter name (Oleg or Adrian or Vadim or smb', [name]);
    if (res === 'Oleg') alert('Hello, Oleg!');
    if (res === 'Adrian') alert('good evening, Adrian!');
    if (res === 'Vadim') alert('Hi, pretty boy! Do you remember me?');
    if (res !== 'Oleg' && 'Adrian' && 'Vadim') alert('Hello, hippopotamus =)');
}
messageHi(); */
const messageHi = function(name){
    name = document.getElementById("strname").value;
    if (name === 'Oleg') {
        text = 'Hello, Oleg!';
    } else if (name === 'Adrian') {
        text = 'good evening, Adrian!';
    } else if (name === 'Vadim') {
        text = 'Hi, pretty boy! Do you remember me?';
    } else {
        text = 'Hello, hippopotamus =)';
    }
    document.getElementById("reportname").innerHTML = text;
}

                    /* Task two */

/* const hypTriangleOne = (a, b) => alert('Triangle hypotenuse is ' + Math.round(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))));
hypTriangleOne(3, 3); 

const hypTriangleTwo = function(a,b){
    a = prompt('Enter the side of the triangle "a" ', [a]);
    b = prompt('Enter the side of the triangle "b" ', [b]);
    return alert('Triangle hypotenuse is ' + Math.round(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))));
}
hypTriangleTwo();

*/
const hypTriangle = function(a,b){
    a = document.getElementById("anum").value;
    b = document.getElementById("bnum").value;
    text = 'Triangle hypotenuse is ' + Math.round(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));
    document.getElementById("reporttrian").innerHTML = text;
}

                    /* Task three */

/* const minFun = function (a, b) {
    a = prompt('Enter first number ', [a]);
    b = prompt('Enter second number ', [b]);
    return alert(Math.min(a,b));
}
minFun(); */

/* const minFun = (a,b) => alert(Math.min(a,b));
minFun(3,5); */

const minFun = function (a, b) {
    a = document.getElementById("numo").value;
    b = document.getElementById("numt").value;
    text = Math.min(a,b);
    document.getElementById("rort").innerHTML = text;
}


                    /* Task four */

/* const isEven = num => num % 2 === 0;
alert(isEven(num)); */

const isEven = function(num){
    num = document.getElementById("enum").value;
    if (num % 2 === 0) {
        text = 'This number ' + num +  ' is Even';
    } else{
        text = 'This number ' + num +  ' is not Even';
    }
    document.getElementById("rprt").innerHTML = text;
}

                    /* Task five */

/* const strChar = function(){
    const str = prompt('Enter something string');
    delChar = str.slice(1, str.length - 1);
    alert(("After delete: ") + delChar);
}
strChar(); */
const strCharDel = function(){
    const dstr = document.getElementById("dstr").value;
    delChar = dstr.slice(1, dstr.length - 1);
    text = ("After delete: ") + delChar;
    document.getElementById("re").innerHTML = text;
}

                    /* Task six */

/* const strChar = function(){
    const str = prompt('Enter something string');
    lowerStr = str.toLowerCase();
    alert(("After change: ") + lowerStr[0].toUpperCase() + lowerStr.substring(1));
}
strChar(); */
const strChar = function(){
    str = document.getElementById("wstr").value;
    lowerStr = str.toLowerCase();
    text = ("After change: ") + lowerStr[0].toUpperCase() + lowerStr.substring(1);
    document.getElementById("repor").innerHTML = text;
}

                    /* Task seven */

/*const letter = prompt('Enter something letter: ');
const someChar = (letter === letter.toUpperCase()) ?
    () => alert('Оууу май, большая буква!'):
    () => alert('Нет уж, маленькие буквы - скучно');
someChar(); */

const someChar = function(){
    letter = document.getElementById("char").value;
    if(letter === letter.toUpperCase()){
        text = 'Оууу май, большая буква!';
    }else{
        text = 'Нет уж, маленькие буквы - скучно';
    }
    document.getElementById("repo").innerHTML = text;
}

                    /* Task eight */

/* const strOne = prompt('Enter something first string : ');
const strTwo = prompt('Enter something second string : ');
const sumStr = () => alert(strOne + ' ' + strTwo);
sumStr(); */

const sumStr = function(){
    fstrOne = document.getElementById("fstr").value;
    sstrTwo = document.getElementById("sstr").value;
    text = fstrOne + ' ' + sstrTwo;
    document.getElementById("rep").innerHTML = text;
}

                    /* Task nine */

/* const strOne = prompt('Enter something string : ');
const numTwo = prompt('Enter something number : ');
const value = function (a, b) {
    if (strOne.length > numTwo) {
        return alert('String is too long!');
    }
    return alert(strOne);
}
value(); */

const func = function() {
    strOne = document.getElementById("str").value;
    numTwo = document.getElementById("num").value;
    if (strOne.length > numTwo) {
        text = "String is too long!";
    } else {
        text = strOne;
    }
    document.getElementById("report").innerHTML = text;
}
>>>>>>> 8a5e0436d94019ef53183837ae14f51e6c04dad5
