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

                    /* Task three */

/* const minFun = function (a, b) {
    a = prompt('Enter first number ', [a]);
    b = prompt('Enter second number ', [b]);
    return alert(Math.min(a,b));
}
minFun(); */

/* const minFun = (a,b) => alert(Math.min(a,b));
minFun(3,5); */


                    /* Task four */

/* const isEven = num => num % 2 === 0;
alert(isEven(5)); */


                    /* Task five */

/* const strChar = function(){
    const str = prompt('Enter something string');
    delChar = str.slice(1, str.length - 1);
    alert(("After delete: ") + delChar);
}
strChar(); */


                    /* Task six */

/* const strChar = function(){
    const str = prompt('Enter something string');
    lowerStr = str.toLowerCase();
    alert(("After change: ") + lowerStr[0].toUpperCase() + lowerStr.substring(1));
}
strChar(); */


                    /* Task seven */

/*const letter = prompt('Enter something letter: ');
const someChar = (letter === letter.toUpperCase()) ?
    () => alert('Оууу май, большая буква!'):
    () => alert('Нет уж, маленькие буквы - скучно');
someChar(); */

                    /* Task eight */

/* const strOne = prompt('Enter something first string : ');
const strTwo = prompt('Enter something second string : ');
const sumStr = () => alert(strOne + ' ' + strTwo);
sumStr(); */


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