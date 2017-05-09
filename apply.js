var peopleObject = {
	think: 'Yes'
};

var animalObject = {
	think: 'No'
}

var printName = function(name, gen){
	if(gen =="people"){
		console.log(name + " is " + gen + " Catagory and, Thniking ?? " + this.think);
	}else{
		console.log(name + " is " + gen + " Catagory and, Thniking ?? " + this.think);
	}
}

var arr1 = ['koti','people'];
var arr2 = ['Bunny','Animal'];

printName.apply(peopleObject, arr1);
printName.apply(animalObject, arr2);

