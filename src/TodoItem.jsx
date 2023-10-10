import {useState} from 'react';

const TodoItem = ({todo, todos, setTodos, deleteTodoItem, updateTodoItem}) => {
    console.log(todo);
    
    const [editMode, setEditMode] = useState(false);
    const [editingTodo, setEditingTodo] = useState(todo);

    const handleKeyPressItem = (e) => {
        if(e.key === "Enter") {
            console.log(todo, editingTodo);
            updateTodoItem(todo, editingTodo);
            setEditMode(false);
        }
    }
    
    return (editMode === true) ? 
        <div>
            <input onKeyDown = {(e) => handleKeyPressItem(e)} placeholder = "Add Your Todo Here" style = {{paddingLeft : "25px", width : "400px", height : "40px", borderRadius : "5px", border : "1px solid black"}}type = "text" value = {editingTodo} onChange = {(e) => setEditingTodo(e.target.value)} /> 
        </div> 

    : (
        <div style = {{display : "flex", justifyContent : "space-between", marginTop : "15px"}}>
            <div style = {{width : "300px", height : "40px", paddingLeft : "10px", marginTop : "10px"}}>
                {todo}
            </div>

            <div>
                <button onClick = {() => setEditMode(true)}style = {{marginLeft : "5px", height : "40px"}}> Edit </button>
                <button onClick = {() => deleteTodoItem(todo)}style = {{marginLeft : "5px", height : "40px"}}> Delete </button>
            </div>
        </div>
    )
}

export default TodoItem;