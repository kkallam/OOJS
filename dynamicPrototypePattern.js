
var peopleDynamicProto = function(name,age){
	this.name = name;
	this.age = age;
	if(typeof this.printPeopleDynamicProto !== 'function'){

		peopleDynamicProto.prototype.printPeopleDynamicProto = function(){
			console.log(this.name + " is " + this.age + " Old ...");
		};
	}
	
};

var person1 = new peopleDynamicProto('koti', 33);
person1.printPeopleDynamicProto();
console.log(person1);
var person2 = new peopleDynamicProto('ven', 31);
person2.printPeopleDynamicProto();
console.log(person2);


