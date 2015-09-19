function factorial(num){
	var result = num;
	for(x = num - 1; x > 0; x--){
		result *= x
		console.log(result);
	}
	return result;
}