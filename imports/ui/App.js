import React, { Component } from 'react';
import Task from "./Task";

export default class App extends Component{
    getTasks() {
        return [
            {_id: 1, text: 'Tarea 1'},
            {_id: 2, text: 'Tarea 2'},
        ];
    }

    renderTasks() {
        return this.getTasks().map((task) => (
            <Task key={task._id} task={task} />
        ))
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Tareas</h1>
                    <ul>{this.renderTasks()}</ul>
                </header>
            </div>
        );
    }

}

