import React, { useState } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import List from "./List";

const Lists = (props) => {

  //Adding item to input and list
  const[input, setInput]= useState("");
  const[items, setItems]= useState([]);

  const itemEvent = (event) =>{
    setInput(event.target.value);
  }
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, input]
    });
    setInput(" ");
  };

  //deleting item from list
  const deleteItems = (id) =>{
   setItems((oldItems) =>{
    return oldItems.filter((arrayElement, index) =>{
      return index !==id;
    });
  })
};

//clear button to clear all items
const clearAll = () =>{
   setItems([])
}


  return (
    <div>
      <h2 className="App-header">Edit List</h2>
      <div className="d-flex justify-content-center">
        <Card className="w-50">
          <CardHeader className="card-header">          
          <div className="header"><b>Item Name *</b></div>
            <input type="text" placeholder=" " className="items" value={input} onChange={itemEvent}></input>
            <button className="btn btn-primary btn-additon" onClick={listOfItems}>Add</button>
            <div className="disclosure">To get started, add 1 or more items</div>
          </CardHeader>
          <CardBody className="list-body">
          {items.length>=1 && <div className="list-heading"><h4>Inventory list</h4></div>}
            <ol>
              {
                items.map((input, index) => {
                return <List 
                key={index}
                id={index}
                text={input}
                onSelect={deleteItems}/>
              })}
              {items.length>=1 && <button className="btn-clear" onClick={clearAll}>Clear All</button>}
            </ol>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export { Lists };
