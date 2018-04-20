'use strict';

let popupBtn = document.getElementById('popup-btn'),
	readyBtn = document.getElementById('ready'),
	votingBtn = document.getElementById('voting'),
	crimeBtn = document.getElementById('crime'),
	resetBtn = document.getElementById('reset'),
	nameInput = document.getElementById('name'),
	ageInput = document.getElementById('age'),
	main = document.getElementsByClassName('main')[0],
	overlay = document.getElementsByClassName('overlay')[0],
	custom = document.getElementsByClassName('custom')[0],
	radioBtn = document.getElementsByClassName('radio')[0],
	customInfo = document.getElementsByClassName('custom-info')[0],
	customChar = document.getElementsByClassName('custom-char')[0],
	customStyle = document.getElementsByClassName('custom-style')[0];

let peopleInfo = {};
	peopleInfo.fio = '';
	peopleInfo.age = '';
	peopleInfo.sex = 'Мужской';
	peopleInfo.politic = '';
	peopleInfo.bio = '';

let sexPerson1 = 0, // тип пола кандидата по-умолчанию
	sexPerson2 = 3;

let peopleArr = [];



function getName() {
	let formName = document.getElementById('name').value;
	return formName;
};

function getAge() {
	let formAge = document.getElementById('age').value;
	return formAge;
};

function getBio() {
	let textBio = document.getElementById('bio').value;
	return textBio;
};

function radioCheck() {
	let radios = document.querySelectorAll('input[type="radio"]');
	for (let i = 0; i < radios.length; i++) {
		if ( radios[i].checked && radios[i].name === 'sex' ) {
			return radios[i].value;       
		}
	}
};

function selectCheck() {
	let s = document.getElementById('select');
	return s.options[s.selectedIndex].value;
};

function checkString(fio) {
	let reg = /^[а-яА-ЯёЁ. ]+$/;
	if (!reg.test(fio))
	{
		return false;
	}
	else
	{
		return true;
	}
}

function checkAge(age) {
	if ( /[^[0-9]/.test(age) ){
		return false
	} 
	else
	{
		return true
	}
}


function hiddenMain() {
	let mainWrapper  = document.querySelector('.custom-info');
		//mainSelect = document.getElementById("select").children[0];
	//clearForm();
		document.getElementById('select').options[0].selected=true;
		document.getElementById('male').checked=true;
		sexPerson1 = 0; sexPerson2 = 3;
		slideSkinIndex = 1;
		slideClothesIndex = 1;
		slideHairIndex = 1;
		createPerson();
	  for (let i = 0; i < mainWrapper.childNodes.length; i++) {
	  	if ( mainWrapper.childNodes[i].tagName != 'SELECT') {
	  		mainWrapper.childNodes[i].value = '';
	  	}
	  }

	overlay.style.display = 'none';
	main.style.display = 'none';
	custom.style.display = 'flex';
	customInfo.style.display = 'block';
	customChar.style.display = 'block';
	customStyle.style.display = 'block';


}

function showMain() {

	main.style.display = 'block';
	custom.style.display = 'none';
}

function createCard(peopleInfo) {
	
	let newCard = document.getElementsByClassName('main-cards-item')[1].cloneNode(true),
   		mainWrapper  = document.getElementsByClassName('main-cards')[0],
		photoImg = newCard.getElementsByClassName('photo')[0],
		allCard = document.getElementsByClassName('main-cards-item'),
		constructHuman = document.getElementsByClassName('construct')[0].cloneNode(true);
		
		constructHuman.classList.add('photo');
	for (let i = 0; i < newCard.children.length; i++) {

		if ( newCard.children[i].className == 'age') {
			newCard.children[i].textContent = peopleInfo.age;
		}

		if ( newCard.children[i].className == 'name') {
			newCard.children[i].textContent = peopleInfo.fio;
		}

		if ( newCard.children[i].className == 'sex') {
			newCard.children[i].textContent = peopleInfo.sex;			
		}

		if ( newCard.children[i].className == 'views') {
			newCard.children[i].textContent = peopleInfo.politic;
		}

		if ( newCard.children[i].className == 'bio') {
			newCard.children[i].textContent = peopleInfo.bio;
		}

		if ( newCard.children[i].className == 'candidate-block') {
			//  if (peopleInfo.sex == 'Мужской') {
 			//  	photoImg.classList.remove('photo-2');
 			//  	photoImg.classList.add('photo-1');
 			//  }
 			//  else
 			//  {
  			//  	photoImg.classList.remove('photo-1');
 			//  	photoImg.classList.add('photo-2');				
 			// }
			
			// photoImg.remove();	
			// newCard.children[i].appendChild(constructHuman);
			
			newCard.children[i].replaceChild(constructHuman,photoImg)
				

		}
		
	}

	showMain();

	if (allCard.length>2) {
		mainWrapper.replaceChild(newCard, allCard[2])
	} 
	else
	{
		mainWrapper.appendChild(newCard);
	}
};

let slideSkinIndex = 1,
	slideClothesIndex = 1,
	slideHairIndex = 1,
	skinBlock = document.getElementsByClassName('skin')[0],
	skinSliders = document.getElementsByClassName('skin-color'),
	skinBtnPrev = skinBlock.childNodes[1],
	skinBtnNext = skinBlock.childNodes[skinBlock.childNodes.length - 2],
	
	hairBlock = document.getElementsByClassName('hair')[0],
	hairSliders = document.getElementsByClassName('hair-style'),
	hairBtnPrev = hairBlock.childNodes[1],
	hairBtnNext = hairBlock.childNodes[hairBlock.childNodes.length - 2],

	clothesBlock = document.getElementsByClassName('clothes')[0],
	clothesSliders = document.getElementsByClassName('clothes-style'),
	clothesBtnPrev = clothesBlock.childNodes[1],
	clothesBtnNext = clothesBlock.childNodes[clothesBlock.childNodes.length - 2];


let personSkin = document.getElementById('person-skin'),
	personClothes = document.getElementById('person-clothes'),
	personHair = document.getElementById('person-hair');

//slider('skin',slideSkinIndex);

function sliderSkin(index) {
	let ind = 0;


	if (index > skinSliders.length) {
		slideSkinIndex = 1;
	};

	if (index < 1) {
		slideSkinIndex = skinSliders.length;
	};

	for (let i = 0; i < skinSliders.length; i++) {
		skinSliders[i].style.display = 'none';
	}

	skinSliders[slideSkinIndex - 1].style.display = 'block';

	pSkin(slideSkinIndex);
}	

function sliderHair(index) {
	let ind = 0;


	if (index > hairSliders.length - sexPerson2) {
		slideHairIndex = 1+ sexPerson1;
	};

	if (index < 1+ sexPerson1) {
		slideHairIndex = hairSliders.length - sexPerson2;
	};

	for (let i = 0; i < hairSliders.length; i++) {
		hairSliders[i].style.display = 'none';
	}

	hairSliders[slideHairIndex - 1].style.display = 'block';

	pHair(slideHairIndex);
}	

function zeroResult() {
	let zeroProgress = document.getElementsByClassName('progress-bar'),
		resultCount = document.getElementsByClassName('result-count');

		for ( let i = 0; i < zeroProgress.length; i++) {
			zeroProgress[i].style.height = 0;
			resultCount[i].childNodes[0].textContent = '0%';
		}
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
	rand = Math.round(rand);
	
    return rand;
  }

function honestVoting(random2) {
	let zeroProgress = document.getElementsByClassName('progress-bar'),
		resultCount = document.getElementsByClassName('result-count'),
		random = 0, random3 = 0;

		if (random2 != 0 ) { random3 = 25;}

		for ( let i = 0; i < zeroProgress.length; i++) {
			if (i<2) {
				random = randomInteger(2, 100-random2); 
				random2 += random;
				if (100-random2 == 0) { // Проверка, чтобы не было 0% у кандидата, минимум 1%
					random -= 1;
					random2 -= 1;
				}
			}
			else
			{
				random = 100-  random2 + random3;
			}
			
			zeroProgress[i].style.height = `${random}%`;
			resultCount[i].childNodes[0].textContent = `${random}%`;
		}
}

function sliderClothes(index) {
	
	if (index > clothesSliders.length - sexPerson2) {
		slideClothesIndex = 1+ sexPerson1;
	};

	if (index < 1  + sexPerson1) {
		slideClothesIndex = clothesSliders.length - sexPerson2;
	};

	for (let i = 0; i < clothesSliders.length; i++) {
		clothesSliders[i].style.display = 'none';
	}

	clothesSliders[slideClothesIndex-1].style.display = 'block';

	pClothes(slideClothesIndex);
}	

skinBtnPrev.addEventListener('click', function() {
	sliderSkin(slideSkinIndex -= 1);

});

skinBtnNext.addEventListener('click', function() {
	sliderSkin(slideSkinIndex += 1)
});

hairBtnPrev.addEventListener('click', function() {
	sliderHair(slideHairIndex -= 1);

});

hairBtnNext.addEventListener('click', function() {
	sliderHair(slideHairIndex += 1)
});

clothesBtnPrev.addEventListener('click', function() {
	sliderClothes(slideClothesIndex -= 1);

});

clothesBtnNext.addEventListener('click', function() {
	sliderClothes(slideClothesIndex += 1)
});



function pHair(index) {
	personHair.style.background = `url('img/hair/construct/hair-${index}.png') center no-repeat`;
	personHair.style.backgroundSize = "cover";
}

function pSkin(index) {
	personSkin.style.background = `url(img/skin/skin-${index+sexPerson1}.png) center no-repeat`;
	personSkin.style.backgroundSize = "cover";
}

function pClothes(index) {
	personClothes.style.background = `url('img/clothes/construct/clothes-${index}.png') center no-repeat`;
	personClothes.style.backgroundSize = "cover";	
}

function createPerson() {
	sliderHair(slideHairIndex);
	sliderSkin(slideSkinIndex);
	sliderClothes(slideClothesIndex);
}


radioBtn.addEventListener('click', function(event) {
	
	sexPerson1 = 0; sexPerson2 = 3;
	
	if ( event.target && event.target.id == 'female') {
		sexPerson1 = 3; sexPerson2 = 0;
	};

	createPerson();

});

popupBtn.addEventListener('click', function() {
	hiddenMain();
});

function isEmpty(str) {
	if (str.trim() == '') 
	  return true;
	  
	return false;
}

readyBtn.addEventListener('click', function() {
	peopleInfo.fio = getName();
	peopleInfo.age = getAge();
	peopleInfo.sex = radioCheck();
	peopleInfo.politic = selectCheck();
	peopleInfo.bio = getBio();
	if (isEmpty(peopleInfo.fio) || isEmpty(peopleInfo.age) || isEmpty(peopleInfo.bio)) {
		alert('Внесите все данные в обязательные поля');
	}
	else
	{
		zeroResult();
		createCard(peopleInfo);
	}
});

votingBtn.addEventListener('click', function() {
	honestVoting(0);
});

crimeBtn.addEventListener('click', function() {
	honestVoting(25);
});

resetBtn.addEventListener('click', function() {
	hiddenMain();
});

nameInput.addEventListener('blur', function() {
	if ( !checkString(this.value) || this.value.length > 250 || this.value.length < 1) {
		alert('Недопустимые символы! \nДопустимы только кирилические символы.\nВведите заново ФИО.');
		this.value = ' ';
		this.focus();
	} 
	
});

ageInput.addEventListener('blur', function() {
	if (!checkAge(this.value) || this.value >100 || this.value <= 35 ) {
		alert('Недопустимые значения!\nВозраст от 35 до 100 лет\nВведите возраст заново.');
		this.value = 35;
		this.focus();
	};
});