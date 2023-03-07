import React, { useState } from "react";

const AddToDO = ({ adding }) => {

    const [toDo, setToDo] = useState("");

    const oncha = (e) => {
        const tarea = e.target.value;
        setToDo(tarea)
    }

    const guardar = (event) => {
        if (event.key === "Enter") {
            event.preventDefault()
            const newToDo = event.target.value;
            ((newToDo !== "" && (newToDo.length) > 3) ? adding(newToDo) : "")
            setToDo("");
        }
    }

    return (
        <input onKeyDown={guardar} name="newtodo" type="text" onChange={oncha} value={toDo} placeholder="ToDo (4 letters minimum)" />
    )
}

export default AddToDO;