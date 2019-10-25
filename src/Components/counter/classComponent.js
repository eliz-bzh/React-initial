import React, {Component} from 'react';

class HelloItem extends Component{
    constructor(props){
        super(props);
        this.state = {cont: "Now", date: new Date()};
        console.log("constructor(props)");
    }

    componentWillMount() {
        console.log('WillMount');
        clearInterval(this.timerID);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("DidUpdate");
    }

    componentDidMount() {
        console.log('DidMount');
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render(){
        console.log("render");
        return(
            <div>
                {this.state.date.toLocaleTimeString()}
                <h1>{this.state.cont}</h1>
                <button onClick={()=>{console.log('Hello'); this.setState({cont: 'change'})}}>Add</button>
            </div>
        );
    }
}

export default HelloItem;