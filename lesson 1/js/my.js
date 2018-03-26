var myBudget = 0;
    myNameShop = "";
 	mainList = {};
	
	mainList = {
		budget: 50000,
		nameShop: "Pixels",
		shopGoods: ['робот','машинка','кукла'],
		employers: {
			name: "Fedor",
			family: "Boggen",
			age: 25,
			sex: "male",
		},
		open: true
	}
myBudget = +prompt("Ваш бюджет (руб)?");
console.log(myBudget);

myNameShop = prompt("Название вашего магазина?");
console.log(myNameShop);

mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");
console.log(mainList.shopGoods[0]);

mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?");
console.log(mainList.shopGoods[1]);

mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?");
console.log(mainList.shopGoods[2]);

alert("Бюджет на 1 день: "+myBudget/30+" руб.");

