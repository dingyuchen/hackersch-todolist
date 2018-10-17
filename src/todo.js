import React, { Component } from 'react';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "insert task here",
            id: 0
        }
    }

    handleSubmit(event) {
        
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <textarea value={this.state.value}/>
                    <input type="submit" value="Add task" />
                </form>
                Todo: <ul></ul>
            </div>
        )
    }
}

export default Main;