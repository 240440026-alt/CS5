const z = {
    re: 1,
    im: 3,
    show() {
        console.log(`${this.re} + ${this.im}i`);
    },
};

z.show();
console.table(z);

class Complex {
    re;
    im;
    constructor(re,im) {
        this.re = re;
        this.im = im;
    }
    show() {
        console.log(`${this.re} + ${this.im}i`);
    }
    add(other) {
        return new Complex(this.re + other.re, this.im + other.im);
    }
    mul(other) {
        return new Complex(this.re * other.re - this.im * other.im, this.re * other.im + this.im * other.re);
    }
    get abs() {
        return Math.sqrt(this.re**2 + this.im**2);
    }
    get arg() {
        return Math.atan2(this.im, this.re);
    }
}

const z1 = new Complex(1,2);
const z2 = new Complex(3,4);
z1.show();
console.table(z1);
z1.add(z2).show();
z1.mul(z2).show();
console.log(z1.abs);
console.log(z1.arg);

const openButton1 = document.querySelector('#openButton1');
const closeButton1 = document.querySelector('#closeButton1');
const message1 = document.querySelector('#message1');

openButton1.addEventListener('click', () => {
    message1.classList.remove('hidden1');
    console.log('複素数の和を開きました.');
});

closeButton1.addEventListener('click', () => {
    message1.classList.add('hidden1');
    console.log('複素数の和を閉じました.');
});

const openButton2 = document.querySelector('#openButton2');
const closeButton2 = document.querySelector('#closeButton2');
const message2 = document.querySelector('#message2');

openButton2.addEventListener('click', () => {
    message2.classList.remove('hidden2');
    console.log('複素数の積を開きました.');
});

closeButton2.addEventListener('click', () => {
    message2.classList.add('hidden2');
    console.log('複素数の積を閉じました.');
});

const openButton3 = document.querySelector('#openButton3');
const closeButton3 = document.querySelector('#closeButton3');
const message3 = document.querySelector('#message3');

openButton3.addEventListener('click', () => {
    message3.classList.remove('hidden3');
    console.log('複素数の絶対値を開きました.');
});

closeButton3.addEventListener('click', () => {
    message3.classList.add('hidden3');
    console.log('複素数の絶対値を閉じました.');
});

const openButton4 = document.querySelector('#openButton4');
const closeButton4 = document.querySelector('#closeButton4');
const message4 = document.querySelector('#message4');

openButton4.addEventListener('click', () => {
    message4.classList.remove('hidden4');
    console.log('複素数の偏角を開きました.');
});

closeButton4.addEventListener('click', () => {
    message4.classList.add('hidden4');
    console.log('複素数の偏角を閉じました.');
});
