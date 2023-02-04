import React from "react";

const List = (props) => {

    return (
        <>
        <div className="list-style">
         <li className="list-items">{props.text}
         <button className="btn" onClick={
           () => props.onSelect(props.id)
         }>❌</button>
         </li>
         </div>
         </>
    )
};

export default List;