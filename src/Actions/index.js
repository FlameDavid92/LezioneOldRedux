
export const addTodo = (todoInputValue) => {
    return{
        type: 'ADD_TODO',
        todo: todoInputValue
    };
}

export const removeTodo = (index) => {
    return {
        type: 'REMOVE_TODO',
        id: index
    };
}