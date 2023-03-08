import React from "react";

const PrintToDo = ({eliminar , date, index, tarea, toDoDone, deleteToDo, arrayToDo }) => {
  
    return (
        <div className="tododiv">
            {(!(eliminar) ? (<button onClick={() => toDoDone(index)}>DONE</button>):null)}
            <p>{tarea}</p>
            <p>{date}</p>
            <p className="deletediv" onClick={() => deleteToDo(index, arrayToDo)}>X</p>
        </div>
    )
}

export default PrintToDo;