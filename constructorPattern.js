var peopleConstructor = function(name, age){


	this.name = name;
	this.age = age;

	this.printPerson = function(){
		console.log(this.name + " is " + this.age + " years old now");
	};
	console.log("Welcome to Constructor Pattern");
};

var person1 = new peopleConstructor('koti',34);
var person2 = new peopleConstructor('Venny',31);

person1.printPerson();
person2.printPerson();