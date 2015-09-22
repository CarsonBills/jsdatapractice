function getLarger(){
	if (a > b || a === b){
		return a
	} else {
		return b
	}
};

function getSign(a,b,c){
	var product = a * b * c;
	if (product < 0){
		return "The sign is -";
	} else if (product > 0){
		return "The sign is +";
	} else {
		return "product is zero.";
	}
}

function getLargest(a,b,c,d,e){
  // just a bunch of coditionals
}