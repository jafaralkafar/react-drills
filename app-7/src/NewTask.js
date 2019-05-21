import React, {Component} from 'react'

export default class NewTask extends Component {
    constructor() {
        super()

        this.state = {
            input: ''
        }
        
    }

    handleInputChange(val) {
        this.setState({ input: val })
    }
    handleAdd=()=> {
        this.props.add(this.state.input)
        this.setState({ input: ''})
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.input}
                    placeholder='New Task'
                    onChange={e => this.handleInputChange(e.target.value)}
                />
                <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }
}