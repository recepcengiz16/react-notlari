import React, { useState } from 'react'
import "../../style.css";

const TodoItem = ({todo}) => {
    const [todoItem, setTodoItem] = useState(todo);
  return (
    <div>
        <li className={todo.done ? "completed":""}>
            <div className="view">
                <input 
                    className="toggle"
                    type="checkbox"
                    checked={todoItem.done}
                    onChange={(e)=>{
                        console.log("e",e);
                        setTodoItem({...todoItem,done:e.target.checked});
                    }}
                />
                <label>{todo.text}</label>
                <button className="destroy"></button>
            </div>
        </li>
    </div>
  )
}

export default TodoItem;