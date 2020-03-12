import React from "react";

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            todo: ''
        };
    };

    handleChanges = e => {
        this.setState({
           todo: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewTodo(this.state.todo);
        this.setState({
            todo: ''
        })
    }

    render() {
        return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <input type="text" name="todo" value={this.state.todo} onChange={this.handleChanges} placeholder="Add your todo" />
                <button className="todo-button" type="submit">Add Todo</button>
            </form>
        )
    }
}

export default TodoForm;