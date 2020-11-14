export function storeReducer(precState = {}, action) {
    console.log(action);
    switch (action.type) {
        case 'ADD_TODO':
            return {
                todos: [
                    action.todo,
                    ...precState.todos
                ]
            }
        case 'REMOVE_TODO':
            return {
                todos: [...precState.todos.slice(0, action.id),
                ...precState.todos.slice(action.id + 1)]
            }
        default:
            return { ...precState }
    }
}