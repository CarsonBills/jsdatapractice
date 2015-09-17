function insertionSort(arr){
	var length = arr.length;
	for (x = 0; x < length; x++){
		var tmp = arr[x];
		for (y = x - 1; y >= 0 && (arr[y] > tmp); y--){
			arr[y+1] = arr[y]
		}
		arr[y+1] = tmp;
		console.log(arr)
		console.log(y)
		console.log("---------------------")
		console.log(arr[x] + "  and   " + arr[y])
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



