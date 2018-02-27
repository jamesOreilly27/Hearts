import React, { Component } from 'react'
import { Button } from './components'

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gameOn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({ gameOn: true })
    }

    render() {
        return (
            <div>
                {!this.state.gameOn ?
                    <div>
                        <h1> Play Hearts! </h1>
                        <Button onClick={this.handleClick}>
                            Start Game
                        </Button>
                    </div>
                :
                    <h1> Hello World </h1>
                }
            </div>
        )
    }
}

export default Main
