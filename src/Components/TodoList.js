import React from 'react';
import Todo from './Todo';

export default function TodoList({todos, removeTodo}) {
    return (
        <ul>
            {
                todos.map((ele, i) => {
                    return (
                        <Todo key={i} id={i} todo={ele} removeTodo={removeTodo}></Todo>
                    )
                })
            }
        </ul>
    )
}