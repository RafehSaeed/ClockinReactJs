
// Nesting components 
// Using functional and class components
// Notes about states etc 



class Button extends React.Component{  //es6


	handleClick = () =>{
		this.props.onClickFunction(this.props.incrementValue);
	}

	render(){
		return(
			<button onClick={this.handleClick}>
				+{this.props.incrementValue}
			</button>
		);
	}
}

//  no state component so use function componenet syntax

const Result = (props) => {
	return(
		<div>{props.value}</div>

		);
}

class App extends React.Component{

	state = {
			counter:0
		}

	incrementCounter = (incrementValue) => {
		this.setState((state)=> ({
				counter : this.state.counter + incrementValue
			}));	
	}

	render() {

		return (
				<div>
					<Button incrementValue={1} onClickFunction={this.incrementCounter}/>
					<Button incrementValue={3} onClickFunction={this.incrementCounter}/>
					<Button incrementValue={4} onClickFunction={this.incrementCounter}/>
					<Result value={this.state.counter}/>
				</div>
			);
	}
}


ReactDOM.render(<App/> , clock)


// class Button extends React.Component{  //es5

// 	state = {
// 			counter:0 ,
// 			mangos: 0
// 		}

// 	handleClick(){
// 		this.setState(function(state){
// 			return {counter : this.state.counter +=1} 
// 			});
// 		this.checkCounter(this.state.counter,this.state.mangos)
// 	}

// 	checkCounter(count,mangos){
// 		console.log('Mango is at' + mangos)
// 		if (count == 10) {
// 			console.log('Counter is at 10')
// 		}
// 	}

// 	render(){
// 		return(
// 			<button onClick={this.handleClick.bind(this)}>
// 				{this.state.counter}
// 			</button>
// 		);
// 	}
// }


// ReactDOM.render(<Button label="Do"/> , clock)
