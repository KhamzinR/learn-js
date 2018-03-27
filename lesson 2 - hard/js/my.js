let week = ["Понедельник",
			"Вторник",
			"Среда",
			"Четверг",
			"Пятница",
			"Суббота",
			"Воскресенье"];
	arr = [];

var	 date = date || new Date();

day = date.getDay()-1;

for (let i = 0; i < week.length; i++) {
	if (i == day) {
		document.write('<p><i>'+week[i]+'</i></p>');
		continue;
	}	
	if (i < 5) {
  		document.write('<p>'+week[i]+'</p>');
  	} 
  	else 
  	{
  		document.write('<p><b>'+week[i]+'</b></p>');
  	}
}


for (let i = 0; i <7 ; i++) {
	arr[i] = prompt ('Введите число:');
	if ((arr[i].charAt(0) == 3) || (arr[i].charAt(0) == 7)){
		console.log(arr[i]);
	}
}

