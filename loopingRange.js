function range (start, end, step) {
  var number = [];
	if (start <= end && step > 0) {
		for (let i = start; i <= end; i = i + step) {
			number.push(i);
		}
		return number;
	} else {
		return number;
	}
	
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-9, 3, 3));