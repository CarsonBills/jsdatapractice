function checkArray(input){
	return typeof(input);
}

var clonedArray = function cloneArray(arr){
	return arr.slice(0);
}

function firstElem(arr, len){
	if (len === undefined){
		return arr[0];
	} else if (len < 0){
		return [];
	} else {
		return arr.slice(0, len);
	}
}

function lastElem(arr, len){
	if (len === undefined || len === 0){
		return arr[arr.length - 1]
	} else if (len < 0){
		return [];
	} else {
		return arr.slice(-len, arr.length)
	}
}

function joinElems(arr){
	return arr.join(',')
}

function dashEvens(num){
	var arr = num.split('');
	var result = [arr[0]];
	for (x = 1; x < arr.length; x++){
		if ((arr[x-1] % 2 === 0) && (arr[x] % 2 === 0)){
			result.push("-", arr[x]);
		} else {
			result.push(arr[x]);
		}
	}
	return result.join('');
}

function getMostFreq(arr){
	var modeMap = {};
	var maxEl = arr[0], maxCount = 1;
	for (var x = 0; x < arr.length; x++){
		var temp = arr[x];
		if (modeMap[temp] === undefined){
			modeMap[temp] = 1;
		} else {
			modeMap[temp]++;
		}
		if(modeMap[temp] > maxCount){
			maxEl = temp;
			maxCount = modeMap[temp]
		}
	}
	return "The most common element is " + maxEl + ". It appeared " + maxCount + " times."
}

function removeFalsy(arr){  //when needing to delete items in array during iteration, go backwards
	var length = arr.length
	for (x = length; x >= 0; x--){
		if (!!arr[x] === false) {
			arr.splice(x, 1);
		}
	}
	return arr
}

function unionArr(arr1, arr2){
	arr3 = arr1;
	while (arr2.length > 0){
		var x = arr3.length-1;
		console.log("loop    " + arr2.length)
		if (arr3[x] <= arr2[0]){
			arr3.splice(x+1, 0, arr2.shift()) 
			console.log("if   " + arr2.length)
		} else if (x === 0){
			arr3.splice(0, 0, arr2.shift());
		}
			x--
	}
	return arr3
}

