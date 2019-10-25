import React, {Component} from 'react';

class HelloItem extends Component{
    constructor(props){
        super(props);
        this.state = {cont: "Now"};
        console.log("constructor(props)");
    }

    componentDidMount() {
        console.log('DidMount');
    }

    componentWillMount() {
        console.log('WillMount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("DidUpdate");
    }

    render(){
        console.log("render");
        return(
            <div>
                <h1>{this.state.cont}</h1>
                <button onClick={()=>{console.log('Hello'); this.setState({cont: 'change'})}}>Add</button>

            </div>
        );
    }
}

export default HelloItem;