var x = new Object();
var y = {};
//console.log(x);
//console.log(y);


var pizza = {
	crust : 'thin',
	toppings : 3,
	hasBacon: true,

	howManyToppings: function(){
		return this.toppings;
	}
};

console.log(pizza.crust);
console.log(pizza.howManyToppings());

pizza.price = '12$';

console.log(pizza.price);
console.dir("Before deleting a property: ");
console.log(pizza);
delete pizza.crust;

console.dir("After deleting a property: ");
console.log(pizza);