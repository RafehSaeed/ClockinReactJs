

//Creating users via the user class 
let user1 = new Person('Rafeh', 'Saeed');
let user2 = new Person('Ahmed', 'Saeed');
var boolean  = true;

function greet(user){

	if(typeof user!= 'undefined'){
		return renderGreeting(user).userGreeting();
	}else{
		return renderGreeting().strangerGreeting();	
	}
}
//  Revealing module pattern for greeting 
var renderGreeting  = function(user){

	function userGreeting(){
		return  <h1>Nice meeting you {user.getPersonName()} ! </h1>
	}

	function strangerGreeting(){
		return  <h1>Nice meeting you Stranger!</h1>

	}

	function printCurrentTime(user,boolean){

		var clock_component ;
		if(boolean){
			clock_component =  <h1 className="red">{user.getCurrentDate()}</h1>
		}
		else{
			clock_component =  <h1 className="green" >{user.getCurrentDate()}</h1>
		}

		return <span><h4>Hi {user.getPersonName()} the time is...</h4>{clock_component}</span>;
	}
	return{
		userGreeting  : userGreeting, 
		strangerGreeting : strangerGreeting,
		printCurrentTime : printCurrentTime
	};
}


// Main()

// initClock
setInterval(function(n){
	var clock = renderGreeting().printCurrentTime(user1,boolean);
	boolean = !boolean
	ReactDOM.render(clock,document.getElementById('clock'));
},1000)


