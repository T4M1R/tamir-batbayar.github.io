"use strict";

//Assignment 9 - Task #4
//It will print only on console if loginForm submitted
//It will print console and also show data in page if productform submitted
$(function(){
    $('form').submit(function(e){
        e.preventDefault();  
        const formId = $(this).attr("id");
        //It will be used as new element on ProductForm
        let newElement=null;
        if(formId==="productForm"){
            //Creating new DOM element <div>
            newElement = $("<div>", { "id": "newDiv", "class": "special" });
        }

        jQuery.each($( this ).serializeArray(), function(index, item) {
            console.log(item.name+ ": " + item.value);  
            if(formId==="productForm"){
                
                let p = $("<p>",{"text":item.name+ ": " + item.value});
                //Adding DOM paragraph to above the DOM div element.
                newElement.append(p);
            }
        });
        //Adding new builded DOM element to the HTML page. It's best way to add because we build HTML before the add. Not adding on iterator or each method.
        if(newElement!=null) $('#result').append(newElement);
    });
});

