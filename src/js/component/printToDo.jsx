import React from "react";

const PrintToDo = (props) => {

    return (
        <div className="tododiv">
            <p>{props.tarea}</p>
            <p className="deletediv" onClick={props.deleteToDo}>X</p>
        </div>
    )
}

export default PrintToDo;