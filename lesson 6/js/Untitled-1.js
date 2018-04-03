
HTML тег: 
	onclick="alert('Вы нажали на кнопку')"

DOM:
	let btn = document.getElementsByTagName('button');
	btn[0].onclick = function() {
		alert('Вы нажали на кнопку');
	}

	let link = document.getElementsByTagName('a');

btn[0].addEventListener('click', function() {
	alert('Вы нажали на кнопку');
})

btn[0].addEventListener('mouseenter', function() { // наведение на элемент
	console.log('Вы навели на кнопку');
})

btn[0].addEventListener('mouseleave', function() { // потеря фокуса элемента
	console.log('Вы навели на кнопку');
})


btn[0].addEventListener('click', function(event) {
	console.log(event.type + event.target);
	//          событие       на элементе
})

link[0].addEventListener('click', function(event) {
	event.preventDefault(); // отмена стандарного события
	console.log(event.type + event.target);
})

