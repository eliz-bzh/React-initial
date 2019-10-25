import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/counter';
import New from "./Components/counter/newCopmonent";
import HelloItem from "./Components/counter/classComponent";
import CounterK from "./Components/counter/counter1";
import ListItem from "./Components/counter/ListItem";
//import List from "./Components/counter/List";
import List from "./Components/TodoList/List";
const Data = [1,2,3];

function App() {
  return (
    <div className="App">
        <HelloItem/>
      /*<List data={Data}/>*/
    </div>
  );
}

export default App;
