import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react' 

const Forms = ({setInputText,todos, setTodos,inputText})=> {
    const inputTextHandler = (e) =>{
            // console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitTodoHandler =(e) =>{
        e.preventDefault(); 
        if(inputText !== ""){
                // setTodos 
            setTodos([...todos,{text: inputText, completed: false, id: Math.floor(Math.random()*1000)}]);
                // setInputText(""):when we submit  "state (inputText) will be empthy "      
            setInputText("");
        }
        
    };
    
  return (
    <div>
        <form>
            <input className="input todo-input" value={inputText} onChange={inputTextHandler} type = "text"  placeholder='Add a todo' />
            <button onClick={submitTodoHandler} className = "todo-button" type = "submit"><i class="icon-plus-sign-alt"></i>Add todo</button>
        </form>
    </div>
  )
} 

export default Forms ;
