import { useState } from 'react';
import './App.css';
import TodoList from './components/Todo/List/TodoList';

function App() {

  const [todos, setTodos] = useState(
    [
			
			{
				"text": "Code furiously",
				"done": true
			},
			{
				"text": "Promote Mavo",
				"done": false
			}
		]
  )

  return (
    <div className="App">
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
