function printType(value) {
    console.log(`${value}の型は${typeof value}`);
}

const showCurrentTime = () => {
    console.log(new Date());
}

console.log('演習8-2-1');

const arr=[1, 'a', 3.4, '五'];
console.table(arr);

for(let i=0; i<arr.length; i++){
    console.log(`${i}番目の要素は${arr[i]}`);
}

console.log('演習8-2-3');
arr.forEach(printType);

console.log('演習8-2-4');
const arr_num = [1,3,7];
console.table(arr_num.map(x=>x**2));

console.log('演習8-2-5');
arr.forEach((value, index) => {
    console.log(`${index}番目の要素は${value}`);
});

const openButton = document.querySelector('#openButton');
const closeButton = document.querySelector('#closeButton');
const message = document.querySelector('#message');

openButton.addEventListener('click', () => {
    message.classList.remove('hidden');
    console.log('メッセージが開きました.');
});

closeButton.addEventListener('click', () => {
    message.classList.add('hidden');
    console.log('メッセージを閉じました.');
});
