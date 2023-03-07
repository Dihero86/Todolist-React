import React, { useState } from "react";
import AddToDO from "./addToDo.jsx";
import PrintToDo from "./printToDo.jsx";

//create your first component
const Home = () => {

	const [state, setState] = useState([])

	const adding = (newToDo) => {
		setState([...state, newToDo])
	}

	{/*const deleteToDo = (text) => {
   		const newTodos = state.filter((todo) => todo != text);
   		setState(newTodos);
	}*/}

	const deleteToDo = (index) => {
		const newTodos = [...state];
		newTodos.splice(index, 1);
		setState(newTodos);
	}

	
	return (
		<div className="generalcontainer">
			<h1>To-Do</h1>
			<AddToDO adding={adding} /> {/*funcion para agregar tarea*/}
			<div className="todocontainer">
				{state.map((tarea, index) =>(<PrintToDo key={index} tarea={tarea} deleteToDo={() => deleteToDo(index)} />))} {/*funcion para imprimir tareas*/}
			</div>
			<p className="numberitems"><em>{state.length} item left</em></p>
		</div>
	);
};

export default Home;
