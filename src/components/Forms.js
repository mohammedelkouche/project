import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react' 

function Forms() {
    const input = (text) =>{
        console.log(text);
    }
  return (
    <div>
        <form>
            <input onChange={input} type = "text" className='todo-input' />
            <button className = "todo-button" type = "submit">submit</button>
            <div className='select'>
                <select name = "todos" className="filter-todo" >
                    <option value = "">-Choose an option -</option>
                    <option value = "all">ALL</option>
                    <option value = "completed">completed</option>
                    <option value = "Uncompleted">Uncompleted</option>
                </select> 
            </div>
        </form>
    </div>
  )
} 

export default Forms ;
