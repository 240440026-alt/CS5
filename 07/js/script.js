console.log('これは外部ファイルから読み込まれました');
let x=1;
const y=2;
x +=3;

let str='こんにちは';
console.log(typeof x);
console.log(typeof str);
console.log(' ==による比較:\t', '1'==1);
console.log(' ===による比較:\t', '1'===1);

const testElem = document.querySelector('#test');
testElem.textContent = 'さようなら';

const now = new Date();
const hours = 9;

const greetingElem = document.querySelector('#greetings');
if (hours>=5 && hours<10){
    greetingElem.textContent = 'おはようございます';
} else if(hours>=10 && hours<18){
    greetingElem.textContent = 'こんにちは';
} else {
    greetingElem.textContent = 'こんばんは';
}

