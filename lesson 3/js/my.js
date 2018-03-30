let myBudget,
				myNameShop,
				time,
				price;

let employers = [];


function systemDiscont(discount) {
	if (discount) {
		return price = 0.8;
	}
}

function hiringEmployees() {
	for (let i = 0; i < 4; i++) {
			 let sName = prompt("Имя сотрудника: ");
				if (sName != "" && sName	!= null) {
							employers[i] = { name: sName, num: i}
				} 
				else {
				 i = i - 1 ;
				}

	}
}

function start () {
	while ( isNaN(myBudget) || myBudget == "" || myBudget == null) {
		myBudget = +prompt("Ваш бюджет (руб)?");
	}

	myNameShop = prompt("Название вашего магазина?").toUpperCase();
	time = 21;
}

// start();


let mainList = {
		budget: myBudget,
		nameShop: myNameShop,
		shopGoods: [],
		employers: {},
		open: true,
		discount: false
}

function chooseShopGoods() {
	for (let i=0 ; i<3 ; i++) {
		let a = prompt("Какой тип товаров будем продавать?");

		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '') {
			console.log("Все верно!");
			mainList.shopGoods[i] = a;
		}
	}
}

// chooseShopGoods();
// console.log(mainList);
// alert("Бюджет на 1 день: "+mainList.budget/30+" руб.");

hiringEmployees();
console.log(employers);
