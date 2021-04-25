import { useState } from 'react'
import MyElem from './MyElem'
import MyForm from './MyForm'

function App() {
  const [todos, setTodos] = useState([])

  const handleToggle = (id) => {
    setTodos([...todos.map((elem) => 
        elem.id === id ? { ...elem, done: !elem.done } : {...elem })
    ])
  }

  const addElem = (inputText) => {
    if (inputText) {
      const newValue = {
        id: Math.random().toString(36).substr(2,9),
        text: inputText,
        done: false }
      setTodos([...todos, newValue])
    }
  }

  const deleteElem = (id) => { setTodos([...todos.filter((elem) => elem.id !== id)]) }

 
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <MyForm addElem={addElem} />
      {todos.map((elem) => {
        return (<MyElem elem={elem} key={elem.id} toggleElem={handleToggle} deleteElem={deleteElem}/>)
      })}
      <h2>Count of elements: {todos.length}</h2>
    </div>
  );
}

export default App