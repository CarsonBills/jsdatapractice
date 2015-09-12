function displayCurrent(){
	var now = new Date();
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var today = days[now.getDay()]
	return "Today is : " + today + "      Current time is : " + 
	now.getHours() + " : " + now.getMinutes() + " : " + now.getSeconds();
}

function printWindow(){
	window.print();
}

function printDate(){
	var now = new Date();
	return now.getMonth() + "-" + now.getDate() + "-" + (now.getYear() + 1900)
}

function areaTriangle(a,b,c){
	var p = ((a+b+c)/2)
	var area = Math.sqrt(p*(p-a)*(p-b)*(p-c))
	return area
}

function reverseString(str){
	var arr = str.split('');
	for(x = 0; x < arr.length; x++){
		arr.unshift(arr.pop());
		console.log(arr.join(''));
	}
}

function reverseString(str){
	for(x=0; x < str.length; x++){
		str = str[str.length-1] + str.substring(0, str.length-1)
		console.log(str)
	}
}

function leapYears(int){
	if(int % 4 === 0){
		if (int % 100 === 0){
			if (int % 400 === 0){
				return "not leap year"
			} else {
				return "leap year"
			}
		} else {
			return "leap year"
		}
	} else {
		return "not leap year"
	}
}

function findSundays(){
	for (x = 2014; x < 2051; x++){
		var year = new Date("1/1/"+x);
		if (year.getDay() === 0){
			console.log(year.getYear()+1900)
		}
	}
}

function guessGame(){
	var fin = false
	var num = Math.ceil((Math.random() * 10))
	while(fin === false){
		var answer = prompt("Guess number")
		if (answer < num) {
			alert("higher")
		} else if ( answer > num ){
			alert("lower")
		} else {
			alert("win")
			fin = true
		}
	}
}

function daysUntilChristmas(){
	var days = 0
	var today = new Date()
	var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 24]
	var month = today.getMonth()
	for (x = month+1; x < months.length; x++){
		days += months[x]
	}
	return days  + (months[today.getMonth()] - today.getDate());
}

function getURL(){
	window.location.href
}







