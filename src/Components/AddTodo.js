import React from 'react';

export default function AddTodo({ addTodo }) {
    let todoInput
    return (
        <>
            <input ref={nodoDOM => todoInput = nodoDOM} type="text"></input>
            <button onClick={() => {
                addTodo(todoInput.value);
                todoInput.value = ''
            }}>Aggiungi</button>
        </>
    )
}