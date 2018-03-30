let matrix = +prompt('Сколько массив включить во внутрь arr? ','');
let sum = 0;
var arr = new Array(matrix);

for (let j = 0; j < matrix; j++) {
  arr[j] = new Array(5);
}

for (let j = 0; j < matrix; j++) {
		for (let n = 0; n < 5; n++) {
					arr[j][n] = Math.floor(Math.random() * 5) + 1;
		}
}

for (let j = 0; j < arr.length; j++) {
  for (let n = 0; n < arr.length; n++) {
      sum += arr[j][n];
  }
  
}

console.log(sum);