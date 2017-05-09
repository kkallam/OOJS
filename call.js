var peopleObject = {
	legs: 2
};

var animalObject = {
	legs: 4
}

var printName = function(name){
		console.log(name + " has " + this.legs + " Legs!!");
}

printName.call(peopleObject, 'Man');
printName.call(animalObject, 'Animal');





