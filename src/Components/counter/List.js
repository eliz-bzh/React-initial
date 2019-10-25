import React from 'react';
import ListItem from "./ListItem";


const List = (props)=>{
    const list = props.data.map((item)=>(
    <li>
        <ListItem value={item}/>
    </li>
    ))
    return(
        <ul>
            {list};
        </ul>
    )
};

export default List;