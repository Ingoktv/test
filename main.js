function cal() {
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let result = document.getElementById("result");
    let su = parseInt(num1.value) + parseInt(num2.value) ;
    result.innerHTML = su;
   
}
function del() {
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let result = document.getElementById("result");
    let su = parseInt(num1.value) - parseInt(num2.value) ;
    result.innerHTML = su;
   
}
function vel() {
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let result = document.getElementById("result");
    let su = parseInt(num1.value) * parseInt(num2.value) ;
    result.innerHTML = su;
   
}


function tel() {
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let result = document.getElementById("result");
    let su = parseInt(num1.value) / parseInt(num2.value) ;
    result.innerHTML = su;
   
}


function kel() {
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let result = document.getElementById("result");
    let su = parseInt(num1.value) % parseInt(num2.value) ;
    result.innerHTML = su;
   
}
function cum() {
    let cum1 = document.getElementById("cum1");
 
    let result2 = document.getElementById("result2");
    let su = parseFloat(cum1.value) * 27.17;
    result2.innerHTML = su.toFixed(2) + String(" THB");
   
}
function cuml() {
    let cum2 = document.getElementById("cum2");
 
    let result3 = document.getElementById("result3");
    let su = parseFloat(cum2.value) / 27.17 ;
    result3.innerHTML = su.toFixed(2) + String(" SGD");
   
}










function add(a, b, c, d) {
    return a + b + c + d;
}
let sum = add(11, 5, 5, 5);
document.getElementById("demo").innerHTML = sum;


function add2(a, b, c, d) {
    return a - b - c - d;
}
let sum2 = add2(11, 5, 5, 5);
document.getElementById("demo2").innerHTML = sum2;


function add3(a, b, c, d) {
    return a * b * c * d;
}
let sum3 = add3(11, 5, 5, 5);
document.getElementById("demo3").innerHTML = sum3;


function add4(a, b, c, d) {
    return a / b / c / d;
}
let sum4 = add4(11, 5, 5, 5);
document.getElementById("demo4").innerHTML = sum4;


function add5(a, b, c, d) {
    return a % b % c % d;
}
let sum5 = add5(11, 5, 5, 5);
document.getElementById("demo5").innerHTML = sum5;


function add6(a, b, c, d) {
    return a ** b ** c ** d;
}
let sum6 = add6(11, 5, 5, 5);
document.getElementById("demo6").innerHTML = sum6;