import { useState } from 'react'

function MyForm({ addElem }) {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addElem(userInput)
        setUserInput("")
    }
    
    return (<form onSubmit={handleSubmit}>
            <input value={userInput} type="text" className="todo" onChange={handleChange} placeholder="Enter new task to add"/>        
            <button>Добавить</button>
        </form>)
}

export default MyForm