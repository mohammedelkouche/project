import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react' 

const Forms = ({setInputText,todos, setTodos,inputText})=> {
    const inputTextHandler = (e) =>{
        // console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitTodoHandler =(e) =>{
        e.preventDefault(); 
        // setTodos 
        setTodos([...todos,{text: inputText, completed: false, id: Math.random()*1000}]);
        // setInputText(""):when we submit  "state (inputText) will be empthy "  
        setInputText("");
    };
    const statusHandler = (e) => {
        console.log(e);
    } ;
    
  return (
    <div>
        <form>
            <input value={inputText} onChange={inputTextHandler} type = "text" className='todo-input' placeholder='Add a todo' />
            <button onClick={submitTodoHandler} className = "todo-button" type = "submit"><i class="icon-plus-sign-alt"></i>Add todo</button>
            <div className='select'>
                <select onChange={statusHandler} name = "todos" className="filter-todo" >
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
