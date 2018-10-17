import React, { Component } from 'react';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "Add task here",
            id: 0,
            todos: [],

        }
    }

    handleSubmit(event) {
        // let {value, id, todos} = this.state;
        this.setState((state, props) => ({
            value: "Add task here",
            id: state.id + 1,
            todos: state.todos.concat([
                {
                    value: state.value,
                    id: state.id,
                    completion: false,
                }
            ])
        }));
        console.log(this.state.todos);
        event.preventDefault();
    }

    handleInputChange(event) {
        // let { value } = this.state;
        this.setState({
            value: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <textarea value={this.state.value} onChange={(e) => this.handleInputChange(e)} />
                    <input type="submit" value="Add task" />
                </form>
                Todo: 
                <ul>
                    {this.state.todos.map((task)=> (<li>
                        {/* {task.id} */}
                        {task.value}
                        {/* {task.completion.toString()} */}
                    </li>))}
                </ul>
            </div>
        )
    }
}

export default Main;