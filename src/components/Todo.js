import React from 'react';
import {FaUserEdit} from "react-icons/fa";


const Todo = ({ text , todo , todos , setTodos , setEditTodo }) =>{ 
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
    const EditHandler = () => {
        setEditTodo(todos.find((index) =>{
            if(index.id === todo.id ){
                return {
                    // modifier only completed to be opposite 
                    ...index , completed : !index.completed
                };
            }
            return index ;
        }
    ));
    }

    return(
        <div className="todo">
            {/* todo.completed ? "completed" : "" =>
                in case this is true add the class completed if it not add empty  */}
            <div>    
                <li className={`todo-item ${todo.completed ? "completed" : "" }`}>{text}</li>
            </div>
   
            <div className='div-button'>    
                <button onClick={completeHandler} className='complete-btn'><i class="icon-check-sign"></i></button>
                <button onClick={deleteHandler} className='trash-btn'><i className="icon-trash"></i></button>
                <button onClick={EditHandler} className='edit-btn'><FaUserEdit/></button>
            </div>
        </div>
    );
}
export default Todo ;