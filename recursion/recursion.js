function factorial(num){
	if (num === 0){
		return 1;
	} else {
		return num * factorial(num - 1);
	}
}

function gCD(first, second){
	if (!second){
		return first
	}
	return gCD(second, first % second);
};

var range = function(a, b){
	if (b - a === 2){
		return [a+1];
	}
	var list = range(a, b-1);
	list.push(b-1);
	return list;
}

var getSum = function(arr){
	if (arr.length === 1){
		return parseInt(arr);
	} else {
		return arr.pop() + getSum(arr);
	}
}

var fibNums = function(num){
	if (num === 1){
		return [0, 1];
	} else {
		var s = fibNums(num - 1);
		s.push(s[s.length - 1] + s[s.length-2]);
		return s;
	}
};