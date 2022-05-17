import React, {useState} from 'react' ;
import Contacts from './components/Contacts.js';
import Forms from './components/Forms.js';


function App() {
  const [inputText,setInputText] =  useState("") ;
  // const [todolist,setTodolist] =  useState(data) ;

  return (
  
    <div className="App">
      <h1>{inputText}</h1>
      <Contacts  />
      <Forms  setInputText={setInputText}/>
      
    </div>
  );
}

export default App;
