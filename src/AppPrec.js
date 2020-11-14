import React from 'react';
import './App.css';
import { createStore } from 'redux';

let todos = ["andare a fare la spesa", "andare dal commercialista", "andare dal medico"];

function storeReducer(precState = {}, action) {
  console.log(action);
  switch (action.type) {
    case 'ADD_TODO':
      return {todos : [
        action.todo, 
        ...precState.todos
      ]}
    case 'REMOVE_TODO':
      return {
        todos : [...precState.todos.slice(0,action.id),
          ...precState.todos.slice(action.id+1)]
      }  
    default:
      return { ...precState }
  }
}

const store = createStore(storeReducer, { todos: [...todos] });

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
    this.todoInput = React.createRef();
  }

  componentDidMount() {
    this.setState({ todos: [...store.getState().todos] });
    store.subscribe(()=>{
      this.setState({ todos: [...store.getState().todos] })
    });
  }

  addTodo = () => {
    const todoInputValue = this.todoInput.current.value;
    //invio l'azione allo store
    store.dispatch({
      type: 'ADD_TODO',
      todo: todoInputValue
    });
  }

  removeTodo = (index) => {
    store.dispatch({
      type: 'REMOVE_TODO',
      id: index
    });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TODO LIST</h1>
        </header>
        <input type="text" ref={this.todoInput}></input>
        <button onClick={this.addTodo}>Aggiungi</button>
        <ul>
          {
            this.state.todos.map((ele, i) => {
              return (
                <li key={i}>{ele} <button onClick={this.removeTodo.bind(null, i)}> - </button></li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
