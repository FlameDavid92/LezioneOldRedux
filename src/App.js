import React from 'react';
import './App.css';
import Header from './Components/Header';
import TodoList from './Containers/myTodoList';
import AddTodo from './Containers/myAddTodo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }
  render() {
    return (
      <div className="App">
        <Header></Header>
        <AddTodo></AddTodo>
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;
