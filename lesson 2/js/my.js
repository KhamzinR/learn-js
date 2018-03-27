var myBudget = +prompt("Ваш бюджет (руб)?");
var myNameShop = prompt("Название вашего магазина?");
let i = 0;

var mainList = {
		budget: myBudget,
		nameShop: myNameShop,
		shopGoods: [],
		employers: {},
		open: true
	}


for (let i=0 ; i<3 ; i++) {
	mainList.shopGoods[i] = prompt("Какой тип товаров будем продавать?");
}

// i = 0;
// do {
// 	mainList.shopGoods[i] = prompt("Какой тип товаров будем продавать?");
// 	i++;
// }
// while (let i<3 )

// i = 0;
// while (let i<3 ) {
// 	mainList.shopGoods[i] = prompt("Какой тип товаров будем продавать?");
// 	i++;
// }


console.log(mainList);

alert("Бюджет на 1 день: "+mainList.budget/30+" руб.");

