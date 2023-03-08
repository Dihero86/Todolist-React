import React, { useState } from "react";

const AddToDO = ({ adding }) => {

    const [toDo, setToDo] = useState("");

    const handleChange = (e) => {
        setToDo(e.target.value);
    }

    const guardar = (event) => {
        if (event.keyCode === 13) {
            const newToDo = event.target.value;
            if (newToDo !== "" && (newToDo.length) > 3){
                adding(newToDo);
                setToDo("");
            }
        }
    }

    return (
        <input onKeyDown={guardar} name="newtodo" type="text" onChange={handleChange} value={toDo} placeholder="ToDo (4 letters minimum)" />
    )
}

export default AddToDO;