let myBudget,
				myNameShop,
				time,
				price;

let mainList = {
		budget: myBudget,
		nameShop: myNameShop,
		shopGoods: [],
		employers: {},
		open: true,
		discount: false,
		shopItems: [],
		chooseShopGoods:function chooseShopGoods() {
						for (let i=0 ; i<3 ; i++) {
									let a = prompt("Какой тип товаров будем продавать?");

									if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '') {
										console.log("Все верно!");
										mainList.shopGoods[i] = a;
									}
								}
						},
		workTime: function workTime(time) {
				if (time < 0) {
						console.log('Такого не может быть!');
				} else if (time > 8 && time < 20) {
						console.log('Время работать!');
						mainList.open = true;
				} else if (time < 24) {
						console.log('Уже слишком поздно!');
				} else {
						console.log('В сутках только 24 часа!');
				} 
		},
		dayBudget: function start () {
					while ( isNaN(myBudget) || myBudget == "" || myBudget == null) {
						myBudget = +prompt("Ваш бюджет (руб)?");
					}

					myNameShop = prompt("Название вашего магазина?").toUpperCase();
					time = 21;
				},
			systemDiscont:	function systemDiscont(discount) {
					if (discount) {
						return price = price * 0.8;
					}
				},
				hiringEmployees: function hiringEmployees() {
					for (let i = 0; i < 4; i++) {
							 let sName = prompt("Имя сотрудника: ");
								if (sName != "" && sName	!= null) {
											mainList.employers[i] = { name: sName, num: i}
								} 
								else {
								 i = i - 1 ;
								}
						}
				},
				chooseShopItems: function chooseShopItems() {
						let items = prompt('Перечислите через запятую товары','');
						mainList.shopItems = items.split(",");
						mainList.shopItems.push(prompt('Подождите, еще ',''));
						mainList.shopItems.sort();
				},
				viewShopItems: function viewShopItems(arr) {
						arr.forEach(function(item, i, arr) {
						  alert("У нас вы можете купить: " + (i+1) + ": " + item);
						});
				},
				sostavShop: function sostavShop() {
					for (var key in mainList) {
						 console.log( "Наш магазин включает в себя: " + key + " значение: " + mainList[key] );
						}
				}
}

console.log(mainList);



