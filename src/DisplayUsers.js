import React, { Component } from 'react';

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }
    handleChange = (event) => {
        //console.log("Fetching...")
        fetch("http://127.0.0.1:3001/users").then((response) => {
            response.json().then((data) => {
                //console.log(data);
                this.setState({
                    items: data,
                    isLoaded: true
                });
                // for (let index = 0; index < data.length; index++) {
                //     const element = data[index];
                //     console.log(element);
                // }
            })
        })
        //{ console.log(this.state.items) }
        var x = document.getElementById('btn');
        var y = document.getElementById('userData');
        if (x.innerHTML == `Show Users`) {
            x.innerHTML = `Hide Users`;
            y.style.display = `block`;
        }
        else {
            x.innerHTML = `Show Users`;
            y.style.display = `none`;
        }
    }

    render() {
        return (
            <div>
                <button id='btn' onClick={this.handleChange}>Show Users</button>
                <div className='m-5' id='userData'>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.items.map((val) => (
                                <tr>
                                    <td>{val.uname}</td>
                                    <td>{val.umobile}</td>
                                    <td>{val.umail}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h2>Total Users: {this.state.items.length}</h2>
                </div>
            </div>
        )
    }
}

export default Display;