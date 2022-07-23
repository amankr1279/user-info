import React, { Component } from "react";

class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email_id: '',
            mob_num: ''
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        //alert("You entered " + String(event.target.value));
    }
    handleSubmit = (event) => {
        console.log("In form", this.state);
        alert("You have submitted", this.state)
        fetch('http://127.0.0.1:3001/submit-form', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(this.state)
        }).then((response) => {
            console.log(response);
            return response.json();
        })

        event.target.reset();
        event.preventDefault();
    }
    render() {
        return (
            <div className="information">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">User Name: </label>
                    <input type='text' name="username" onChange={this.handleChange}></input>

                    <label htmlFor="email_id">Email Id : </label>
                    <input type='text' name="email_id" onChange={this.handleChange}></input>

                    <label htmlFor="mob_num">Mobile Number: </label>
                    <input type='text' name="mob_num" onChange={this.handleChange}></input>

                    <br></br>
                    <br></br>
                    <input type="submit" value="Submit"></input>

                </form>
            </div>
        )
    }
}

export default MyForm;