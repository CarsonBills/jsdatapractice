// JS Exercises  = Basic 
// http://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// 1

function getTimeDate(){
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	today = new Date();
	var dayName = days[today.getDay()];
	var ampm = (function () {
		if (today.getHours() < 12) {
			return "AM"
		} else {
			return "PM"
		}
	})();
	return "Today is: " + dayName + 
	". \nCurrent time is : " + 
	today.getHours() + " " + ampm + " : " + today.getMinutes() + " : " +
	today.getSeconds()
}

// 2

window.print()

//3 

function currentDate() {
	today = new Date();
	month = ("0" + today.getMonth()).slice(-2)
	date = ("0" + today.getDate()).slice(-2)
	return month + "/" + date + "/" + today.getFullYear()
}

//4

function areaTriangle(side1, side2, side3) {
	var p = (side1 + side2 + side3)/2
	var area = Math.sqrt(p*((p-side1)*(p-side2)*(p-side3)))
	return area
}

//5

function rotateString(str) {
	var arr = str.split('')
	for (i = 0; i < arr.length; i++){
		var letter = arr.pop();
		arr.push(letter);
	}
	return arr.join('')
}

//5 again using text nodes

function rotateString(str) {

}


//6 

function leapYear(year) {

	if (year % 400 === 0) {
		return year + " is a leap year."
	} else if ( year % 100 === 0) {
		return year + " is not a leap year."
	} else if (year % 4 === 0){
		return year + " is a leap year."
	} else {
		return year + " is not a leap year."
	}
}

//7 

function sundaysJan(start, end) {
	var years = []
	for (i = start; i <= end; i++) {
		var year = new Date(i, 0, 1)
		if (year.getDay() === 0) {
			years.push(year.getFullYear())
		}
	}
	return years
}

//8

function guessNumGame() {
 var secret = (Math.floor(Math.random()*10) +1)
 var guess = prompt("Guess a number, idiot.")
 while (guess != secret) {
 	guess = prompt("guess again")
 }
 	alert("win")
}

//9 

function daysUntilChristmas() {

}

//10

function mathUpInHere() {
	var res = prompt("* or %") 
	if (res === "*") {
		var first = prompt ("first num")
		var second = prompt ("second num")
		alert(first * second)
	} else if (res === "%") {
		var first = prompt ("first num")
		var second = prompt ("second num")
		alert(first / second)
	}
}

//11
	
function convertTemp() {
	var gotTemp = false
	while (gotTemp  === false){

		var f=0; var c=0; var k=0;
		var temp = prompt("Enter beginning Temp")
		var start = prompt("starting temp C, F, or K")
		if ( start === "F") {
			f = temp;
			c = (temp-32)*(5/9);
			k = c + 273.15;
			gotTemp=true
		} else if (start === "C") {
			c = temp;
			f = (temp*1.8)+32
			k = parseInt(temp) + 273.15
			gotTemp=true
		} else if ( start === "K") {
			k = temp;
			f = ((temp-273.15)*1.8)+32
			c = temp - 273.15
			gotTemp=true
		} 
	}
	alert("Ballsack" + "Celsius: "+ c +
	"Farenheit: " + f +
	"Kelvin: " + k)

}


//12

document.URL //WOW!!!


// COE questions:

//reverse array

function reverseArr1(arr1) {
	length = arr1.length
	newArr = []
	for (i = 0; i < length; i++) {
		var elem = arr1.pop()
		newArr.push(elem)
	}
	return newArr
}

function reverseArr2(arr) {
	for (i = 0; i < (arr.length)/2; i++) {
		var backElem = arr[(arr.length-1)-i]
		var frontElem = arr[i]
		arr[i] = backElem
		arr[(arr.length-1)-i] = frontElem
	}
	return arr
}

// array 1 - n, find duplicate
function findDup(arr) {
	var length = arr.length;
	var ideal = 0;
	var actual = 0;
	for (i = length-1; i > 0; i--) {
		ideal += i
	}
	for (j = 0; j < arr.length; j++){
		actual += arr[j]
	}
	return actual - ideal
}



// given array, find highest number, and lowest number to the left
function findHighAndLow(arr) {
	var highNum = arr[0]
	for (i = 0; i < arr.length; i++) {
		if (arr[i+1] > highNum) {
			highNum = arr[i+1]
		}
	}
	var lowNum = arr[0]
	for (j = 0; j < arr.indexOf(highNum); j++) {
		if (arr[j+1] < lowNum){
			lowNum = arr[j+1]
		}
	}
	return highNum + " " + lowNum
}



// w3 resource lvl 2
//1

function reverseNum(num) {
	arr = num.toString().split('')
	for (i = 0; i < (arr.length)/2; i++) {
		var leftElem = arr[i];
		var rightElem = arr[(arr.length-1)-i];
		arr[i] = rightElem;
		arr[(arr.length-1)-i] = leftElem;
	}
	return parseInt(arr.join(''))
}

//2

function stringPalindrome(string){
	var backwards = string.toLowerCase().replace(/\W/g,"").split('').reverse().join('')
	if (backwards === string){
		return "Palindrome."
	} else {
		return "Not palindrome."
	}
}

//3/////////
function stringCombo(str){

}

//4

function alphaSort(str){
	return str.split('').sort().join('');
}

//5

function capitalizeWords(str) {
	var arr = str.split(' ');
	var caps = "";
	for (i = 0; i < arr.length; i++){
		caps += (arr[i].charAt(0).toUpperCase()) + arr[i].slice(1) + " "
	}
	return caps.slice(0, -1);
}

//5 also

function capitalizeWords2(str) {
	var arr = str.split(' ');
	var newArray = [];
	for (i = 0; i < arr.length; i++){
		newArray.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
	}
	return newArray.join(' ')
}

