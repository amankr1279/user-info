import React, { Component } from 'react';

class Display extends Component {
    constructor(props) {
        super(props);
    }

    handleChange = (event) => {

        fetch("http://127.0.0.1:3001/users").then((response) => {
            response.json().then((data) => {
                console.log(data);
            })
        })
    }


    render() {
        return (
            <div>
                <button onClick={this.handleChange}>Show Users</button>
            </div>
        )
    }
}

export default Display;