import React from 'react'
import TodoItem from '../TodoItem';
import "../../style.css";

export default function TodoList({todos,setTodos}) {
    console.log("todos",todos);
    //console.log("setTodos",setTodos);
  return (
    <div style={{marginTop:"200px"}}>
        <section className="todoapp">
            <header className="header">
                <h1>Yapılacaklar</h1>
                <form>
                    <input className="new-todo" placeholder="Yapılması Gerekenler" autoFocus />
                </form>
            </header>
            
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">
                    Tümünü tamamlandı olarak işaretle
                </label>

                <ul className="todo-list">
                    
                    {
                        todos.map((todo)=>{
                            return <TodoItem key={todo.text} todo={todo} />
                        })
                    }
                   
                </ul>
            </section>

            <footer className="footer">
                <span className="todo-count">
                    <strong>{todos.filter(x=>!x.done).length}</strong>
                    tane kaldı
                </span>

                <ul className="filters">
                    <li>
                        <a href="#/" className="selected">Hepsi</a>
                    </li>
                    <li>
                        <a href="#/">Aktif</a>
                    </li>
                    <li>
                        <a href="#/">Tamamlandı</a>
                    </li>
                </ul>

                <button className="clear-completed">
                    Tamamlananları Temizle
                </button>
            </footer>
        </section>

    </div>
  )
}
