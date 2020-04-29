"use strict";

//Task 6
const countModule = function(){
	let counter = 0;	
	function add(){
		counter+=1;
	}
	function reset(){
		counter = 0;
	}
	return{
		add: add,
		reset: reset(),
		value: counter
	}
}

/*Task 7 
- Task 6's free variable is 'counter'.
- Free variable is a variable which is used in the function, 
but it is not the local parameter nor parameters 
of that function.
*/

//Task 8 
const countModule = function(){
    let counter = 0;
    let adder = 0;
	function add(){
		counter += adder;
	}
	function reset(){
		counter=0;
	}
	function makeAdder(inc){
		adder = inc;
	}
	return{
		add: add,
		reset: reset,
		makeAdder: makeAdder,
		value: counter
	}
}


/*Task 9
- "Module Pattern" is the solution. 
It's using function closure so that means 
we can use our variable as function variable 
also can access to the global variable inside the function.

(function(params) {
//here we'll put the JS code
statements; 
}(params));*/

//Task 10
const Employee = (function(){
	let name;
	let age;
	let salary;
	
	const getAge = function(){
		return age;
	};
	const getSalary = function(){
		return salary;
	};
	const getName = function(){
		return name;
	};
	const setAge = function(newAge){
		age = newAge;
	};
	const setSalary = function(newSalary){
		salary = newSalary;
	};
	const setName = function(newName){
		name = newName;
	};
	const increaseSalary = function(percentage){
		salary = getSaraly + getSaraly()*percentage/100;
	};
	const incrementAge = function(){
		age = getAge() + 1;
	};
	return{
		setAge: setAge,
		setSalary: setSalary,
		setName: setName,
		increaseSalary: increaseSalary,
		incrementAge: incrementAge
	};
})();


//Task 11
Employee.setAddress = function(newAddress){
	address = newAddress;
}

Employee.getAddress = function(){
	return address;
}