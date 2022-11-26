import React from 'react'
import { useState } from 'react';
import AddToDo from './AddToDo';
import TodoList from './TodoList';
import { format } from 'date-fns'


// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();

// today = mm + '/' + dd + '/' + yyyy;

function ToDoApp() {
    const [todos, setTodos] = useState(initialTodos);

    function handleAddTodo(text) {
        setTodos([...todos, {
            id: nextID++,
            todoText: text,
            done: false
        }]
        );
    }

    function handleTodoChange(updatedTodo) {
        setTodos(todos.map(t => {
            if (t.id === updatedTodo.id) {
                return updatedTodo;
            }
            else
                return t;
        }));

    }

    function handleTodoDelete(updatedTodo) {
        setTodos(todos.filter((t) => t.id !== updatedTodo.id));
    }
    return <>
        <h3>{format(new Date(), 'MMM dd, yyyy')}</h3>
        <h2>To Do's:</h2>
        <AddToDo onAddTodo={handleAddTodo} />
        <TodoList todos={todos} onTodoChange={handleTodoChange} onTodoDelete={handleTodoDelete} />
    </>
}

let nextID = 4;
const initialTodos = [
    { id: 1, todoText: "Learn Javascript", done: true },
    { id: 2, todoText: "Build Spotify Clone using Javascript", done: true },
    { id: 3, todoText: "Learn React", done: false },
];


export default ToDoApp