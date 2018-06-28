import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: 'Walk the cat', isCompleted: true, isDeleted: false },
        { description: 'Throw the dishes away', isCompleted: false, isDeleted: false },
        { description: 'Buy new dishes', isCompleted: false, isDeleted: false }
      ],
      newTodoDescription: ''
    };
  }

handleChange(e) {
  this.setState({ newTodoDescription: e.target.value })
}

handleSubmit(e) {
  e.preventDefault();
  if (!this.state.newTodoDescription) { return }
  const newTodo = { description: this.state.newTodoDescription, isCompleted: false, isDeleted: false };
  this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
}

toggleComplete(index) {
  const todos = this.state.todos.slice();
  const todo = todos[index];
  todo.isCompleted = todo.isCompleted ? false : true;
  this.setState({ todos: todos });
}

deleteTodo(index) {
  const todolist = this.state.todos.slice();
  console.log(todolist);
  const todoitem = todolist[index];
  console.log(todoitem);
  todoitem.isDeleted = todoitem.isDeleted ? false : true;
  const newtodolist = todolist.filter(todo => todo.isDeleted === false);
  this.setState({ todos: newtodolist });
}


  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo key={index} description={todo.description} isCompleted={todo.isCompleted} isDeleted={todo.isDeleted} toggleComplete={ () => this.toggleComplete(index) } deleteTodo={ () => 
this.deleteTodo(index) } />
          )}
        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;

