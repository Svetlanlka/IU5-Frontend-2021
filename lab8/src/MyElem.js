function MyElem({ elem, toggleElem, deleteElem }) {
    return (
        <div key={elem.id} className="todo_elem">
            <div className={elem.done ? "todo_text todo_done" : "todo_text"} onClick={() => toggleElem(elem.id)}>
                {elem.text}
            </div>
            <div className="block_delete">
                <span className = "text_delete">delete</span>
                <input type="checkbox" className="todo_delete" onClick={() => deleteElem(elem.id)}></input>
            </div> 
        </div>
    )
}

export default MyElem