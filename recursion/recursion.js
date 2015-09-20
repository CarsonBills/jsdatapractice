function factorial(num){
	var result = 1;
	for (x = 2; x <= num; x++){
		result *= x;
	}
	return result;
}

function gCD(first, second){
	var fDiv = [];
	var sDiv = [];
	for (x = 1; x < (first/2); x++){
		if (first % x === 0){
			fDiv.push(x);
		}
	}
	for (y = 1; y < (second/2); y++){
		if (second % y === 0){
			sDiv.push(y);
		}
	}
}

function gcd(a,b){ 
	if (b == 0)
   {return a}
 	else
   {return gcd(b, a % b)}
}