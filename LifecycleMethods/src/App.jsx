 import React,{Component} from "react";
import Counter from "./Components/Counter";
 class App extends Component{

    constructor(){
        super()
        // initialize variable before mounting
        this.state={
            count :0
        }
    }
    componentDidMount(){
        console.log("ComponentDidMount runs when component is first rendered"
        )
    }

    increment(){
        this.setState({count:this.state.count+1})
    }

    componentWillUnmount(){
        console.log('ComponentWillUnmount: Component Removed');
        
    }

    render(){
        return(
            <>
            <div>Learning Life cycle methods</div>
            <div>
            {/* {
                this.state.count
            } */}
            <Counter number={this.state.count}/>
            </div>
            {/* <button onClick={this.increment.bind(this)}>Click me</button>  to ensure that the function has the correct this context when it's invoked */}
            <button onClick={()=>this.increment()}>Click me</button>
            </>
        )
    }
 }

 export default App