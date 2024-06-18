import { useEffect, useState } from 'react';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import './App.css';

function App() {
    const [todos, setTodos] = useState([
    
    ]);
    const [todoValue, setTodoValue] = useState('');

    function persist(newList) {
        localStorage.setItem('todos', JSON.stringify(newList));
    }

    function handleAddTodo(newTodo) {
      if (newTodo.trim() !== "") {
        const newTodoList = [...todos, newTodo];
        persist(newTodoList);
        setTodos(newTodoList);
    }
    }

    function handleDeleteTodo(index) {
        const newTodoList = todos.filter((_, todoIndex) => todoIndex !== index);
        persist(newTodoList);
        setTodos(newTodoList);
    }

    function handleEditTodo(index) {
        const valueToBeEdited = todos[index];
        setTodoValue(valueToBeEdited);
        handleDeleteTodo(index);
    }

    useEffect(() => {
        const locaLTodos = localStorage.getItem('todos');
        if (locaLTodos) {
            setTodos(JSON.parse(locaLTodos));
        }
    }, []);

    return (
        <>
            <h1 className='text-center font-bold text-3xl'>Gestion des taches</h1>
            <TodoInput handleAddTodo={handleAddTodo} todoValue={todoValue} setTodoValue={setTodoValue} />
            <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} />
        </>
    );
}

export default App;
