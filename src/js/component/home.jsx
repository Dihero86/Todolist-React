import React, { useState } from "react";
import AddToDO from "./addToDo.jsx";
import PrintToDo from "./printToDo.jsx";

//create your first component
const Home = () => {

	const [state, setState] = useState([]);
	const [done, setDone] = useState([]);

	const adding = (newToDo) => {
		setState([...state, newToDo])
	}

	const deleteToDo = (index, array) => {
		const newTodos = [...array];
		newTodos.splice(index, 1);
		if (array == state) {
			setState(newTodos)
		}
		else {
			setDone(newTodos)
		};
	}

	const toDoDone = (index) => {
		setDone([...done, state[index]]);
		const newTodos = [...state];
		newTodos.splice(index, 1);
		setState(newTodos);
	}

	let nuevafecha = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();

	return (
		<>
			<div className="containertodos">
				<h1>To-Do</h1>
				<AddToDO adding={adding} /> {/*funcion para agregar tarea*/}
				<div className="todocontainer">
					{state.map((tarea, index) => (<PrintToDo key={index} index={index} tarea={tarea} arrayToDo={state} toDoDone={toDoDone} deleteToDo={deleteToDo} eliminar={false} />))}
				</div>
				<p className="numberitems"><em>{state.length} item left</em></p>
			</div>
			<div className="containerdone">
				<h1>Completed</h1>
				<div className="todocontainer">
					{done.map((tarea, index) => (<PrintToDo key={index} index={index} tarea={tarea} arrayToDo={done} date={nuevafecha} deleteToDo={deleteToDo} eliminar={true} />))}
				</div>
				<p className="numberitems"><em>{done.length} items completed</em></p>
			</div>
		</>
	);
};

export default Home;
