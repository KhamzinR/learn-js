let msg = new Object();
	msg.loading = "Загрузка ...";
	msg.success = "Спасибо! Вы скоро с вами свяжемся!";
	msg.failure = "Что-то пошло не так!";
	elementsArray = document.querySelectorAll('.form-ajaxs');

let form = document.getElementsByClassName('main-form')[0];
	contactForm = document.getElementById('form');
	
	input = document.getElementsByTagName('input');
	statusMessage = document.createElement('div');
	statusMessage.classList.add('status');

	elementsArray.forEach(function(elem) {
		elem.addEventListener("submit", function(event) {
			event.preventDefault();
			elem.appendChild(statusMessage);
			
			
			let request = new XMLHttpRequest();

			request.open("POST", 'server.php');
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			let  formData = new FormData(elem);

			request.send(formData);

			request.onreadystatechange = function() {
				if ( request.readyState < 4 ) {
					statusMessage.innerHTML = msg.loading;
				} else if ( request.readyState === 4) {
					if (request.status == 200 && request.status < 300) {
						statusMessage.innerHTML = msg.success;
					} else {
						statusMessage.innerHTML = msg.failure;
					}
				}
				for ( let i = 0; i < input.length; i++) {
					input[i].value = '';
				}
			}
		});
	});

