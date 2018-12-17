//  Class for creating user 
class Person{

	constructor(firstname  , lastname ) {
		this.firstname = firstname; 
		this.lastname  = lastname;
	} 

	getPersonName(){
		return this.firstname+' '+this.lastname; 
	}

	getCurrentDate(){

		var date = new Date();
		return date.getHours()+ ':'+ date.getMinutes() + ':' + date.getSeconds();

	}
}