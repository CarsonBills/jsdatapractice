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

function allSubstrings(str){
	var response = []
	for (x = 0; x < str.length; x++){
		for (y = x+1; y <= str.length; y++) {
			var substring = str.substring(x, y);
			response.unshift(substring)
		}
	}
	return response.toString();
}

function alphabetize(str){
	return str.replace(/\W/g,"").split('').sort().join('')
}

function capitalize(str){
	arr = str.split(' ');
	caps = ""
	for (x=0; x<arr.length; x++){
		caps += arr[x].charAt(0).toUpperCase() + arr[x].slice(1) + " "
	}
	return caps.slice(0, -1)
}

function findLongest(str){
	var arr = str.split(' ');
	var longest = "";
	for (x = 0; x < arr.length; x++){
		if (arr[x].length > longest.length){
			longest = arr[x];
		}
	}
	return longest
}

function countVowels(str){
	var string = str.toLowerCase();
	var vowels = ["a", "e", "i", "o", "u"]
	var counter = 0;
	for (x = 0; x < string.length; x++){
		if (vowels.indexOf(string[x]) !== -1){
			counter++
		}
	}
	return counter
}

function checkPrime(num){
	for (x = 2; x < num; x++){
		if (num % x === 0){
			return "Not prime."
		}
	}
	return "Prime."
}

function getType(thing){
	return typeof(thing);
}

function makeMatrix(dimension){
	for (x = 0; x < dimension; x++){
		for (y = 0; y < dimension; y++){
			if (y === x){
				console.log("1");
			} else {
				console.log("0");
			}
			console.log("-------------")
		}
	}
}

function getLosers(arr){
	var sorted = arr.sort(function (a, b){
		return a - b;
	});
	console.log("sorted array " + sorted);
	var unique = [];
	for (x = 0; x <= sorted.length; x++){ // makes unique array
		if (sorted[x] !== sorted[x+1]){
			unique.push(sorted[x]);
		}
	}
	return "Second Lowest is : " + unique[1] + " Second Highest is : " + unique[unique.length-2]
}

function checkPerfect(num){
	var sum = 0;
	for (x = 1; x < num; x++){
		if (num % x === 0){
			sum += x
			if (sum === num){
				return "perfect number."
			}
		}
	}
	return "not perfect number"
}

function getFactors(num){
	var factors = []
	for (x = 1; x <= Math.floor(Math.sqrt(num)); x++){
		if (num % x === 0){
			factors.push(x)
			if (num/x !== x){
				factors.push(num/x)
			}
		}
	}
	factors.sort(function (a, b){
		return a b
	});
	return factors
}

function getCoins(amount, coins){
	if (amount === 0){
		return [];
	} else {
		if (amount >= coins[0]){
			left = (amount - coins[0]);
			return [coins[0]].concat(getCoins(left, coins));
		} else {
			coins.shift();
			return getCoins(amount, coins);
		}
	}
}


function getPower(base, exp){
	return Math.pow(base, exp) //duh.
}

function getPowerAgain(base, exp){
	var ans = 0;
	for (x = 1; x <= exp; x++){
		ans += (base * x)
	}
	return ans
}

function uniqueString(string){
	var uniq = ""
	for (x = 0; x < string.length; x++){
		if (uniq.indexOf(string[x]) === -1) {
			uniq += string[x]
		}
	}
	return uniq
}

function numOccurences(string){
	var ans = {}
	for (x = 0; x < string.length; x++){
		if (ans[string[x]] === undefined){
			ans[string[x]] = 1;
		} else {
			ans[string[x]]++
		}
	}
	return ans
}

function binarySearch(){

}

function getLargerNums(arr, elem){
	var ans = []
	for (x = 0; x < arr.length; x++){
		if (arr[x] > elem){
			ans.push(arr[x])
		}
	}
	return ans
}

function filterLarger(val){
	{
		return function(evalue, index, array) {
			console.log(array)
			return (evalue >= val);
		}
	}
}
var result = [11,45,4,31,64,10].filter(filterLarger(8))


function randomString(num){
	var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var res = ""
	for (x = 1; x <= num; x++){
		res += str[Math.floor(Math.random() * (str.length))]
	}
	return res
}

function getSubsets(len, arr){
	var res = [];
	for (x = 0; x < arr.length - len; x++){
		for (y = x+len; y < arr.length; y++){
			res.push(arr.slice(x, y))
		}
	}
	return res
}