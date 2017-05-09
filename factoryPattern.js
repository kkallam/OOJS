var peopleFactory = function(name, age){
	console.log("Welcome to Factory Pattern");
	var temp = {};

	temp.age = age;
	temp.name = name;
	temp.printPerson = function(){
		console.log(this.name + " is "+ this.age + " years old");
	}
	return temp;
	
};


var person1 = peopleFactory('koti',34);
var person2 = peopleFactory('Vennela',31);
person1.printPerson();
person2.printPerson();