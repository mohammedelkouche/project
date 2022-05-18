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
  const [status,setStatus] = useState("ALL") ;
  return (
  
    <div className="App">
      <header>
        <h1> TO DO LIST</h1>
      </header>
      <Forms  inputText = {inputText}
              todos = {todos} 
              setTodos = {setTodos}
              setInputText = {setInputText}
              setstatus = {setStatus} />
      <TodoList   todos = {todos}
                  setTodos = {setTodos} />



      {/* <div>
        <h1>Test Exemple </h1>
        <Contacts  />
        <TodoForm />
      </div> */}
    </div>
  );
}

export default App;
