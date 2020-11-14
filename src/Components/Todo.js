import React from 'react';

export default function Todo({id,todo,removeTodo}){
    return(
        <li key={id}>{todo} <button onClick={() => removeTodo(id)}> - </button></li>
    )
}