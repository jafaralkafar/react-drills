import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }
    handleChange(val) {
        this.setState({ username: val})
    }
    handleChange1(val) {
        this.setState({ password: val})
    }

    handleClick() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render() {
        return (
            <div>
                <input type='text' placeholder='username' onChange={e=> this.handleChange(e.target.value)}/>
                <input type='text' placeholder='password' onChange={e=> this.handleChange1(e.target.value)}/>
                <button onClick={()=>this.handleClick()}>Login</button>
            </div>
        )
    }
}