"use strict"

//Task 1
function getMax(x,y){
    if(x>y) return x;
    else return y;
}

console.log(getMax(2,3));

//Task 2
function maxOfThree(x, y, z){
    let r = x;
    if(r<y) r = y;
    else if(r<z) r = z;

    return z;
}

console.log(maxOfThree(2,3,5));

//Task 3
function isVowel(x){
    if(x === 'e' || x === 'y' || x === 'u' || x === 'i' || x === 'o' || x === 'a')
        return true;

    return false;
}

console.log(isVowel('a'));
console.log(isVowel('B'));
console.log(isVowel('asdf'));

//Task 4
function sum(x){
    let sum = 0;
    for(let i=0; i<x.length;i++)
        sum += x[i];
    return sum;
}

function multiply(x){
    let sum = 1;
    for(let i=0; i<x.length;i++)
        sum *= x[i];
    return sum;
}

console.log(sum([1,2,3,4]));
console.log(multiply([1,2,3,4]));

//Task 5
function reverse(str){
    let x = str.length-1;
    let reversed = '';
    while(x>=0){
        reversed += str.charAt(x);
        x--;
    }
    return reversed;
}

console.log(reverse('tamir'));

//Task 6
function findLongestWord(a){
    let result = a[0];
    for(let i=0; i<a.length; i++)
        if(result.length < a[i].length)
            result = a[i];

    return result;
}

console.log(findLongestWord(['tamir','bold','bat']));

//Task 7
function filterLongWords(a, index){
    return a.filter(function(elem, i, array){
        return elem.length > index;});
}

console.log(filterLongWords(['tamir','bold','bat'], 2));

//Task 8
function computeSumOfSquares(a){
    return a.reduce(function(prevVal, elem, i, a){
        return parseInt(prevVal) + parseInt(elem*elem);}, 0);
}

console.log(computeSumOfSquares([1, 2, 3]));

//Task 9 
function printOddNumbersOnly(a){
    return a.filter(function(elem, i, array){
        return parseInt(elem)%2 === 1;});
}

console.log(printOddNumbersOnly([1, 2, 3]));

//Task 10
function computeSumOfSquaresOfEvensOnly(a){
    return a.filter(function(elem, i, arr){
        return parseInt(elem)%2 === 0
    }).reduce(function(prev, curr, i, arr){
        return parseInt(prev) + parseInt(curr)*parseInt(curr);
    }, 0);
}

console.log(computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5]));

//Task 11
function sumReduce(x){
    return x.reduce(function(prev, curr, i, arr){
        return prev + curr;
    }, 0)
}

function multiplyReduce(x){
    return x.reduce(function(prev, curr, i, arr){
        return prev * curr;
    }, 1)
}

console.log(sumReduce([1,2,3,4]));
console.log(multiplyReduce([1,2,3,4]));

//Task 12
function findSecondBiggest(a){
    let max = a[0];
    let second = 0;    
    for (var i = 0, n = a.length; i < n; ++i) {
        var nr = +a[i]; // convert to number first    
        if (nr > max) {
            second = max; // save previous biggest value
            max = nr;
        } else if (nr < max && nr > second) {
            second = nr; // new second biggest value
        }
    }
    return second;
}

console.log(findSecondBiggest([19,9,11,0,12]));

//Task 13
function printFibo(n,a,b){
    let arr = [a, b];    
    if(n==1) return arr = [a];
    
    for (let i = 2; i < n; i++){
        arr.push(arr[i - 2] +  arr[i -1]);        
    }
    // console.log("Fibonacci sequence: ");
    // console.log(arr);
    return arr.join(',');
}

console.log(printFibo(1, 0, 1));
console.log(printFibo(2, 0, 1));


//Task 15
function showClock(){
    let id = "clock";
    let date = new Date;
    let year = date.getFullYear();
    let month = date.getMonth();
    let months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
    let d = date.getDate();
    let day = date.getDay();
    let days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    let h = date.getHours();
    if(h<10)
    {
            h = "0"+h;
    }
    let m = date.getMinutes();
    if(m<10)
    {
            m = "0"+m;
    }
    let s = date.getSeconds();
    if(s<10)
    {
            s = "0"+s;
    }
    let result = ''+days[day]+' '+months[month]+' '+d+' '+year+' '+h+':'+m+':'+s;
    document.getElementById(id).innerHTML = result;
    setTimeout('showClock();','1000');
    return true;
}
window.onload = showClock();