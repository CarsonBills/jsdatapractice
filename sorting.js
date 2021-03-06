
function insertionSort(arr){
	for (x = 0; x < arr.length; x++){
		var temp = arr[x];
		for (y = x - 1; y >= 0 && (arr[y] > temp); y--){
			arr[y + 1] = arr[y]
		}
		arr[y + 1] = temp;
	}
	return arr
}



function selectionSort(arr){
	var length = arr.length;
	for (x = 0; x<length-1; x++){
		var min = x;
		for (y = x+1; y<length; y++){
			if (arr[y] < arr[min]){
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




function insertionSort(arr){
	var length = arr.length;
	for (x = length-1; x >= 0; x--){
		var tmp = arr[x];
		for (y = x + 1; y >= 0 && (arr[y] < tmp); y++){
			arr[y-1] = arr[y];
		}
		arr[y-1] = tmp

	}
	return arr
}


function bbbbbleSort(arr){
	for (x = 0; x < arr.length; x++){
		for (y = 0; y < arr.length - x; y++){
			if (arr[y] < arr[y-1]){
				var temp = arr[y];
				arr[y] = arr[y-1];
				arr[y-1] = temp;
			}
		}
	}
	return arr
}

function allSortsOfSorts(arr){
	for (s = 0; s < arr.length-1; s++){
		var max = s;
		for (t = s+1; t < arr.length; t++){
			if (arr[t] > arr[max]){
				max = t;
			}
		}
		if (max !== s){
			var temp = arr[s];
			arr[s] = arr[max];
			arr[max] = temp;
		}
	}
	return arr
}



function sortingSorts(arr){
	for (x = 0; x < arr.length - 1; x++){
		var max = x;
		for (y = x + 1; y < arr.length; y++){
			if (arr[max] > arr[y]){
				max = y;
			}
		}
		if (max !== x) {
			var temp = arr[max];
			arr[max] = arr[x];
			arr[x] = temp;
		}
	}
	return arr
}


//Shellsort : 
//  https://www.youtube.com/watch?v=qzXAVXddcPU


function bubbleSort(arr){
	for (x = 0; x < arr.length; x++){
		for (y = 0; y < (arr.length - x); y++){
			if (arr[y-1] > arr[y]){
				var temp = arr[y];
				arr[y] = arr[y-1];
				arr[y-1] = temp;
			}
		}
	}
	return arr
}

function sleectionSeot(a){
	for (x = 0; x < a.length-1; x++){
		var min = x;
		for (y = x+1; y < a.length; y++){
			if (a[min] > a[y]){
				min = y;
			}
		}
		if (min != x){
			var temp = a[min];
			a[min] = a[x];
			a[x] = temp;
		}
	}
	return a
}

function insfrtonSot(arr){
	for (x = 0; x < arr.length; x++){
		var tmp = arr[x];
		for (y = x - 1; y >= 0 && (arr[y] > tmp); y--){
			arr[y+1] = arr[y]
		}
		arr[y + 1] = tmp;
	}
	return arr
}

function bbbbbbble(arr){
	for (x = 0; x < arr.length; x++){
		for (y = 0; y < arr.length; y++){
			if (arr[y] > arr[y+1]){
				var temp = arr[y];
				arr[y] = arr[y+1];
				arr[y+1] = temp;
			}
		}
	}
	return arr
}

function selectsort(arr){
	for (x = 0; x < arr.length-1; x++){
		var max = x;
		for (y = x+1; y < arr.length; y++){
			if (arr[y] > arr[max]){
				max = y;
			}
		}
		if (max != x){
			var temp = arr[x];
			arr[x] = arr[max];
			arr[max] = temp;
		}
	}
	return arr
}

function inserSort(arr){
	for (x = 0; x < arr.length; x++){
		var temp = arr[x];
		for (y = x - 1; y >= 0 && (arr[y] > temp); y--){
			arr[y + 1] = arr[y];
		}
		arr[y + 1] = temp;
	}
	return arr
}

function shellSort(){

}

function quickSort(){
	
}

function bsort(arr){
	for (x = 0; x < arr.length; x++){
		for (y = 0; y < (arr.length-x); y++){
			if (arr[y-1] < arr[y]){
				var temp = arr[y];
				arr[y] = arr[y-1];
				arr[y-1] = temp;
			}
		}
	}
	return arr
}

function insertSort(arr){ // least to greatest
	for (x = 0; x < arr.length; x++){
		var temp = arr[x];
		for  (y = x-1; y >= 0 && (arr[y] > temp); y--){
			arr[y+1] = arr[y] // shift arr[y] up one level
			console.log(arr + "  -  ARRAY")
		}
		arr[y+1] = temp  // if second for loop is not triggered these values are already the same
		console.log(y + "WHAT IS THIS VALUE")
		console.log(arr[y+1] + "" + temp)
		console.log(arr + "  -  ARRAY AT END")
	}
	return arr
}

function quickSort(arr){
	if (arr.length === 0){
		return []
	}
	var pivot = arr[0];
	var left = [];
	var right = [];
	for (var i = 1; i < arr.length; i++){
		if (arr[i] < pivot){
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return quickSort(left).concat(pivot, quickSort(right));
}
