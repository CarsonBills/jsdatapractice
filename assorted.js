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



// w3 resource level 2: Functions
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

//6  

function findLongestWord(str){
	arr = str.split(' ')
	var longestWord = arr[0]
	for (i = 0; i < arr.length; i++) {
		if (longestWord.length < arr[i].length) {
			longestWord = arr[i]
		}
	}
	return longestWord
}

//7

function countVowels(string){
	string.toLowerCase()
	var vowelList = "aeiou"
	var counter = 0;
	for (i = 0; i < string.length; i++){
		if (vowelList.indexOf(string[i]) !== -1) { // This is interesting way to determin vowel
			counter ++
		}
	}
	return counter;
}

// 7 again 

function countVowels(string){
	return string.match(/[aeiou]/gi).length; // "g" is global search "i" is case insensitive
}

//8 

function determinePrime(int) {
	if (int === 1) {
		return "Not Prime."
	} else if (int === 2) {
		return "Prime."
	} else {
		for (i = 2; i < int; i++){
			if (int % i === 0) {
				return "Not Prime"
			}
		}
		return "Prime."
	} 
}

//9 

function determineType(arg) {
	if (typeof arg === "undefined"){
		return "undefined"
	} else {
		return typeof arg
	}
}

//10


//11

function secondHL(arr){
	var sortedArr = arr.sort()
	return "Second lowest: " + sortedArr[1] +
	" Second Highest: " + sortedArr[sortedArr.length-2]
}

//12

function numPerfect(num) { 
	var divisors = []
	var sum = 0
	for (i = 0; i < num; i++) {
		if (num % i === 0){
			divisors.push(i)
		}
	}
	for (j = 0; j < divisors.length; j++) {
		sum += divisors[j]
	}
	if (sum === num) {
		return "Perfect Number."
	} else {
		return "Not perfect Number."
	}
}

//12 again  Without the Carson level for loops
function numPerfect(num){
	var sum = 0;
	for (i = 1; i <= num/2; i++){
		if (num % i === 0){
			sum += i;
		}
	}
	if (sum === num){
		return "Perfect Number"
	}
	return "Not Perfect"
}

//13

function findFactors(num){
	var arr = []
	for (i = num/2; i > 1; i--){
		if (num % i === 0){
			arr.push(i)
		}
	}
	return arr.join(' ')
}

// 14

function getChange(num, arr){
	var coins = 0
	while (coins < num) {
		if (arr)
	}
}

//15

function powerUp(base, exponent){
	var ans = 1
	for (i = 1; i <= exponent; i++){
		ans *= base
	}
	return ans
}

//16

function uniqString(str){
	uniq = ""
	for (i = 0; i < str.length; i++){
		if(uniq.indexOf(str[i]) === -1){
			uniq += str[i]
		}
	}
	return uniq
}


//17 

function charTimes(str){
	letters = new Object
	for (i = 0; i < str.length; i++){
		var x = str[i];
		letters[x] = (isNaN(letters[x]) ? 1 : letters[x] + 1)
	}
	return letters
}


//18 

function binarySearch(target, array){
	var max = array.length-1;
	var min = 0;
	var guess;
	while (max >= min){
		guess = Math.floor((max+min)/2)
		if (array[guess] === target){
			return guess
		} else if (array[guess] > target){
			max = guess-1
		} else {
			min = guess+1
		}
	}
}

//19

//20

function returnRandomStr(int){
	var str = ""
	var charBank = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
	for (x = 0; x < int; x++){
		str += charBank.charAt(Math.floor(Math.random() * charBank.length))
	}
	return str
}

//21

function getSubsets(){

}

//22 

function getNumOccurrences(str, letter){
	var num = 0;
	for (x = 0; x < str.length; x++){
		if (str.charAt(x)===letter){
			num++
		}
	}
	return num
}

//23

function firstUniq(str){
	var array = str.split('');
	var count = 0;
	for (x = 0; x <= array.length; x++){
		count = 0;
		for(y = 0; y <= array.length; y++){
			if (array[x] === array[y]){
				count++
			}
		}
		if (count < 2){
			return array[x]
		}
	}
}

//24

function bubbleSort(arr){
	var length = arr.length;
	var temp = ""
	for (x = 0; x < length; x++){
		for (y = 0; y<(length-x); y++){
			if (arr[y] > arr[y-1]){
				temp = arr[y];
				arr[y] = arr[y-1];
				arr[y-1] = temp;
			}
		}
	}
	return arr
}


function bubbleSort(arr){
	var length = arr.length
	var temp = ""
	for (x = 0; x < length; x++){
		for(y = 0; y < length - x; y++){
			if (arr[y] < arr[y-1]){
				temp = arr[y];
				arr[y] = arr[y-1];
				arr[y-1] = temp;
			}
		}
	}
	return arr
}

//25 

function longestString(arr){
	var longest = arr[0];
	for (x = 0; x < arr.length; x++){
		if (arr[x].length > longest.length){
			longest = arr[x]
		}
	}
	return longest
}

function secondlongestString(arr){
	arr.sort(function(a, b){
	  return b.length - a.length;
	});
return arr[1]
}


//26
function longestUniqString(str){
// http://stackoverflow.com/questions/9734474/find-longest-substring-without-repeating-characters
}


//27
function longestPalindrome(){

}

//29
function test(){
	console.log(arguments.callee.name)
}


function selectionSort(array){
	for (x = 0; x < array.length-1; x++){
		var max = x;
		for (y = x+1; y < array.length; y++){
			if (array[y] > array[max]){
				max = y;
			}
		}
		if (max != x){
			var tmp = array[max];
			array[max] = array[x];
			array[x] = tmp;
		}
	}
	return array
}


function selectionSort(arr){
	var length = arr.length;
	for (x = 0; x<length-1; x++){
		var min = x;
		for (y = x+1; y<length; y++){
			if (arr[y] > arr[min]){
				min = y;
			}
		}
		if (min != x) {
				var temp = arr[x];
				arr[x] = arr[min];
				arr[min] = temp;
		}
	}
	return arr
}


function printingRows(arr){
	for (x = 0; x<arr.length; x++ ){
		console.log("row "+x);
		for (y = 0; y<arr[x].length; y++){
			console.log(arr[x][y]);
		}
	}
}

function switchCase(str){
	var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	var lower = "abcdefghijklmnopqrstuvwxyz"
	var result = []
	for (x = 0; x<str.length; x++){
		console.log(upper.indexOf(str[x]))
		if (upper.indexOf(str[x]) === -1 ){
			result.push(str[x].toUpperCase());
		} else {
			result.push(str[x].toLowerCase());
		}
	}
	return result.join('')
}

function returnUniq(str){
	var result = "";
	for (x = 0; x < str.length; x++){
		if (result.indexOf(str[x]) === -1){
			result += str[x]
		}
	}
	return result
}

function colorArrays(colors, order){
	for (x = 0; x < colors.length; x++){
		if (x === 0){
			console.log("1"+order[1]+" choice is "+ colors[x]);
		} else if ( x === 1){
			console.log("2"+order[2]+" choice is "+ colors[x]);
		} else if ( x === 2){
			console.log("3"+order[3]+" choice is "+ colors[x]);
		} else {
			console.log(x+1 + order[0] + " choice is "+ colors[x]);
		}
	}
}

function evenDash(num){
	var str = num.toString();
	var result = [str[0]]
	for (x = 1; x < str.length; x++){
		if (str[x-1] % 2 == 0 && str[x] % 2 ==0){
			result.push("-", str[x])
		} else {
			result.push(str[x])
		}
	}
	return result.join("")
}

function findMode(arr){
	var obj = {};
	for (x = 0; x < arr.length; x++){
		if (obj)
	}
}

