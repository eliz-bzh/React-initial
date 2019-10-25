import React, {Component} from 'react';

class CounterK extends Component{
    constructor(props){
        super(props);
        this.state = {value: 0};
    }

    render() {
        return(
            <div>
                <button onClick={()=> {
                    this.setState((ps)=>{
                        return {value: ps.value + 1};
                    })
                }}>+</button>
                <button onClick={()=>{
                    this.setState((ps)=>{
                        return {value: ps.value - 1};
                    })
                }}>-</button>
                <div>
                    {this.state.value};
                </div>

                <input type = "text" value={0} onChange={(event)=>{

                    this.setState({value: event.target.value});
                }}/>
            </div>
        )
    }
}

export default CounterK;