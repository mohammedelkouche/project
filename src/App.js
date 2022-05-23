import React, {useState} from 'react' ;
// import TodoForm from './components/ConpenExemple/TodoForm.js';
// import Contacts from './components/ConpenExemple/Contacts.js';

import Forms from './components/Forms.js';
import TodoList from './components/TodoList.js';



function App() {
  // inputText : the value that i wrhite in in input 
  // setInputText : this is the function that update inputText
  const [inputText,setInputText] =  useState("") ;
  // todos : the List that exist in the setTodos function 
  // setTodos: this is the function that a todos list  is included 
  const [todos,setTodos] =  useState([]) ;
  const [editTodo,setEditTodo] = useState(null) ;
  return (
  
    <div className="App">
      <div className='d-flex align-items-center justify-content-center'>
        <div className='div-form'>
          <header>
            <h1> TO DO LIST</h1>
          </header>
          <Forms  inputText = {inputText}
                  todos = {todos} 
                  setTodos = {setTodos}
                  setInputText = {setInputText}
                  editTodo = {editTodo}
                  setEditTodo = {setEditTodo}
                  />
          <TodoList   todos = {todos}
                      setTodos = {setTodos} 
                      setEditTodo = {setEditTodo}
                      />
          {/* <div>
            <h1>Test Exemple </h1>
            <Contacts  />
            <TodoForm />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
