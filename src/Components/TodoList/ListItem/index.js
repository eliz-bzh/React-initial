import React from 'react';
import Style from "./Style.module.css";

class ListItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {isImportant: false, isDone: false};
    }

    onChangeisDone=()=>{
        this.setState((ps)=>{
            return{
                isDone: !ps.isDone
            }
        })
    }
    onChangeisImportant=()=>{
        this.setState((ps)=>{
            return {
                isImportant: !ps.isImportant
            }
        })
    }


    render() {
        return (
            <div>
                    <div className={(this.state.isDone ? Style.isDone : null) + " " + (this.state.isImportant ? Style.isImportant : null)}>
                        {this.props.text}
                    </div>
                    <button onClick={this.onChangeisImportant}>Important</button>
                    <button onClick={this.onChangeisDone}>Done</button>
            </div>
        );
    }
}

export default ListItem;