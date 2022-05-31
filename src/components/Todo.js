import React from 'react';
import {FaUserEdit} from "react-icons/fa";


const Todo = ({ text , todo , todos , setTodos , setEditTodo , setEditingText , editingText , editTodo}) =>{ 
        // -----Events------

    //  DELETE
    const deleteHandler = () => {
        setTodos(todos.filter((element) =>
            element.id !== todo.id 
        ));
            // console.log(todo) ;
    }
    //  COMPLETE
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id ){
                return {
                    // modifier only completed to be opposite 
                    ...item , completed : !item.completed
                };
            }
            return item ;
        } 
        )
        ) ;
    };
    //  Edit 
    function updatTodo(id){
        const updatedTodos = [...todos].map((index) =>{
            if(index.id === id){
                index.text = editingText
            }
            return index
        })
        setTodos(updatedTodos)
        setEditTodo(null)
        setEditingText("")
    }
    return(
        <div className="todo">
            {/* todo.completed ? "completed" : "" =>
                in case this is true add the class completed if it not add empty  */}
            {/* { HOW TO THIS CODE BELLOW RUN } */}
            {editTodo === todo.id ? 
            (<input 
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
                value={editingText}
            />) : 
            (<div><li className={`todo-item ${todo.completed ? "completed" : "" }`}>{text}</li></div>) }
            <div className='div-button'>     
                <button onClick={completeHandler} className='complete-btn'><i className="icon-check-sign"></i></button>
                <button onClick={deleteHandler} className='trash-btn'><i className="icon-trash"></i></button>
                {editTodo === todo.id ? 
                (     <button onClick={() =>updatTodo(todo.id)}>Save</button>)
                :
                (     <button onClick={() => setEditTodo(todo.id)} className='edit-btn'><FaUserEdit/></button>)}
            </div>
        </div>
    
    );
}
export default Todo ;