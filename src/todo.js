import React from "react";
import './App.css';
import List from "./List";
import { useState } from "react";


export default function Todo(){

   const [currentItem , setCurrentItem] = useState();
   const [itemList , updateItemList] =useState([]);
   

const onChangeHandler =e =>{
    console.log("current value ", e.target.value);
    setCurrentItem(e.target.value);
    e.preventDefault();
};

const addItemToList=()=>{
    updateItemList([...itemList , {item:currentItem,key:Date.now()}]);
    // console.log("item list", itemList);
    setCurrentItem("");
    
};

const handleKeypress = e => {
    //it triggers by pressing the enter key
  if (e.keyCode === 13) {
    addItemToList();
  }
};


    return(
            
        <div className="App">
            <h1>Todo List</h1>
            <header className="App-wraper">
                <div className="wraper">
                   <div className="Input-Wrapper">
                      <input placeholder="Add items..." value={currentItem} onKeyPress={handleKeypress}
                      onChange={onChangeHandler}  />
                      <button onClick={addItemToList} type="submit">+</button> 
                    </div>
                    <List itemList={itemList} updateItemList={updateItemList} />
                </div>
            </header>
            </div>
        
    );
}

