import React, { Component } from 'react'
class Button extends Component {

    handleClick() {

    }

    render() {
        return <button onClick = { this.handleClick }
        type = "button"
        id = "myBtn" > Save < /button>
    }
}

export default Button