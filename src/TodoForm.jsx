import {useState} from 'react';
import TodoItem from './TodoItem';

const TodoForm = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState(["Complete React Js", "Complete Context API "]);

    const addTodoItem = (todoItem) => {
        setTodos([...todos, todoItem]);
        setTodo("");
    }

    const deleteTodoItem = (todoItem) => {
        const newItems = todos.filter(todo => todo !== todoItem);

        setTodos(newItems);
    }

    const updateTodoItem = (todo, updatedTodo) => {
        const newItems = todos.map(currtodo => {
            if(currtodo === todo) {
                return updatedTodo;
            }
            else {
                return currtodo;
            }
        })

        setTodos(newItems);
    }

    const handleKeyPress = (event) => {
        if(event.key === "Enter") {
            addTodoItem(todo);
        }
    }

    return (
        <div style = {{marginTop : "15px"}}>
            <input onKeyDown = {(e) => handleKeyPress(e)} placeholder = "Add Your Todo Here" style = {{paddingLeft : "25px", width : "400px", height : "40px", borderRadius : "5px", border : "1px solid black"}}type = "text" value = {todo} onChange = {(e) => setTodo(e.target.value)} />  
            <div style = {{marginTop : "2 5px"}}>
                {
                    todos.length > 0 && 
                    <div>
                        {todos.map((todo) => {
                            return <div>
                                <TodoItem updateTodoItem = {updateTodoItem} deleteTodoItem = {deleteTodoItem} todo = {todo} todos = {todos} setTodos = {setTodos}> </TodoItem>
                            </div>
                        })}
                    </div>
                }
            </div>
        </div>
    )
}

export default TodoForm;