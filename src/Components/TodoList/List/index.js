import React from 'react';
import ListItem from "../../TodoList/ListItem";

const List= ({data})=>{
    const list= data.map((item, index)=>{
        return (
        <li key={index}>
            <ListItem text={item}/>
        </li>
        )
    });
    return(
        <ul>
            {list}
        </ul>
    )
}

export default List;