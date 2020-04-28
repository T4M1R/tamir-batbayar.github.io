/*jshint esversion: 6 */
window.addEventListener('load', () => {
    "use strict";
    
    document.getElementById("btn").addEventListener("click",  function(){
        //alert("Hello, world!");     
        setInterval(increaseFontSize, 500);        
    });


    document.getElementById("myCheck").addEventListener("change", () => {
        //alert("Hello, world!");  
        if(document.getElementById("myCheck").checked){
            document.getElementById("text").classList.add("styled");
            document.getElementById("wrapper").classList.add("bg");
        }
        else{
            document.getElementById("text").classList.remove("styled");
            document.getElementById("wrapper").classList.remove("bg");
        }
    });


    document.getElementById("convert").addEventListener("click",  function(){
        const textEl = document.getElementById("text");
        let textStr = textEl.value;
        let strArr = textStr.split(" ");
        textStr = "";
        for(let i=0;i<strArr.length;i++){
            textStr += convertStr(strArr[i]);
        }
        textEl.value = textStr;      
    });


    document.getElementById("btnReplace").addEventListener("click",  function(){
        const textEl = document.getElementById("text");
        let textStr = textEl.value;   
        let strArr = textStr.split(" ");
        textStr = "";
        for(let i=0;i<strArr.length;i++){
            console.log(strArr[i].length);
            console.log(strArr[i]);
            if(strArr[i].length >= 5){
                textStr += "Malkovich ";
            }else{
                textStr += strArr[i] + " ";
            }
        }
        textEl.value = textStr;       
    });
});

function increaseFontSize(){
    "use strict";
    const element = document.getElementById('text');
    let style = window.getComputedStyle(element);
    let increasedSize = parseInt(style.fontSize) + 2;
    element.style.fontSize = increasedSize + "px";
}

function isVowel(ch){
    "use strict";
    return ['a', 'e', 'i', 'o', 'u'].indexOf(ch.toLowerCase()) !== -1;
}

function convertStr(str){
    "use strict";
    if(isVowel(str.charAt(0))){ 
        str += "-ay ";        
        console.log('Vowel');
        console.log(str);
    }
    else if(isNaN(str.charAt(0))){ 
        let tmp = str.charAt(0);
        str = str.substring(1);
        str = str + tmp + "-ay ";
    }
    return str;
}