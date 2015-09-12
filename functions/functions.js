function reverseNum(num){
	var arr = num.toString().split('')
	return parseInt(arr.reverse().join(''))
}

function reverseNum(str){
	var arr = str.split('')
	for (x = 0; x < (arr.length)/2; x++){
		var temp = arr[x];
		arr[x] = arr[(arr.length-1)-x];
		arr[(arr.length-1)-x] = temp;
	}
	return arr.join('')
}

function reverseString(str){
	var reversed = []
	var arr = str.split('')
	for (x = 0; x < arr.length; x++){
		reversed.unshift(arr[x]);
	}
	return reversed.join('')
}

function checkPalindrome(str){
	var arr = str.split('').reverse()
	if (str === arr.join('') ){
		return "Yes Palindrome"
	} else {
		return "Not Palindrome"
	}
}

function allSubstrings(){
 // Have a counter that increases and feed the array through a for loop that uses 
 // substring to stamp out the substrings og the original string
}

function alphabetize(){
	
}

