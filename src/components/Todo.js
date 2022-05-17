import React from 'react';

const Todo = ({text}) =>{
    return(
        <div className="todo">
            <li className='todo-item'>{text}</li>
            <button className='complete-btn'><i class="icon-check-sign"></i></button>
            <button className='trash-btn'><i className="icon-trash"></i></button>
        </div>
    );
}
export default Todo ;