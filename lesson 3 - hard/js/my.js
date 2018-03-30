let str = "урок-3-был слишком легким";

// Первая буква "Прописная"
str = str.charAt(0).toUpperCase() + str.slice( 1 );
console.log( str );

// Заменить все тире на пробелы
str = str.replace( /-/g, ' ' );
console.log(str);

str = str.replace( /легким/, '' );
str = str.slice( 0, str.length-3 ) + 'oo';
alert(str);

let arr = [20, 33, 1, 'Человек', 2, 3];
let sum = 0;

for (let i = 0; i < arr.length -1; i++) {
		if (typeof(arr[i]) == 'number') {
				sum += Math.cbrt(arr[i]);
		}	
}

console.log("Сумма кубов элементов:" + sum.toFixed(2));