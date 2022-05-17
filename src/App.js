import React, {useState} from 'react' ;
// import TodoForm from './components/ConpenExemple/TodoForm.js';
// import Contacts from './components/ConpenExemple/Contacts.js';
import Forms from './components/Forms.js';
import TodoList from './components/TodoList.js';



function App() {
  // setInputText this is the function that update inputText
  const [inputText,setInputText] =  useState("") ;
  const [todos,setTodos] =  useState([]) ;

  return (
  
    <div className="App">
      <header>
        <h1> TO DO LIST</h1>
      </header>
      <Forms  inputText={inputText}
              todos={todos} 
              setTodos={setTodos}
              setInputText={setInputText}/>

      <TodoList todos={todos} />



      {/* <div>
        <h1>Test Exemple </h1>
        <Contacts  />
        <TodoForm />
      </div> */}
    </div>
  );
}

export default App;
