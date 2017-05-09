var peopleProto = function(){

};


peopleProto.prototype.age = 0;
peopleProto.prototype.name = "no name";

peopleProto.prototype.printProto = function(){
	console.log(this.name + " is " + this.age + " years old...");
};

var person1 = new peopleProto();
person1.name = "koti kallam";
person1.age = 34;

person1.printProto();



var person2 = new peopleProto();
person2.name = "Vennela";
person2.age =31;
person2.printProto();