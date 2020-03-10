import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css"; 

const todos = [
  {
    task: "Go to the store",
    id: 1,
    completed: false
  },
  {
    task: "Clean room",
    id: 2,
    completed: false
  },
  {
    task: "Do the dishes",
    id: 3,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: todos,
      task: ''
    };
  }

clearCompleted = () => {
  this.setState({
    todos: this.state.todos.filter(todo => !todo.completed)
  })
}

  toggleCompleted = (clickedTodoId) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === clickedTodoId) {
          return {
            ...todo, completed: !todo.completed
          }
        } else {
          return todo;
        }
      })
    })
  }

  addNewTodo = (todoText) => {
    const newTodo = {
      task: todoText,
      id: Date.now,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Todo List!</h1>
        <TodoForm addNewTodo={this.addNewTodo} />
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} clearCompleted={this.clearCompleted} />
      </div>
    );
  } 
}

export default App;