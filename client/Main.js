import React, { Component } from 'react'
import { Button } from './components'
import startHand, { makeDeck } from '../gameUtils'

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gameOn: false,
            player1Hand: [],
            player2Hand: [],
            player3Hand: [],
            player4Hand: []
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        const hands = startHand(makeDeck(1))
        const player1Hand = hands.player1Hand
        const player2Hand = hands.player2Hand
        const player3Hand = hands.player3Hand
        const player4Hand = hands.player4Hand
        this.setState({
            gameOn: true,
            player1Hand,
            player2Hand,
            player3Hand,
            player4Hand
        })
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
                    <h1> 
                        Hello World
                    </h1>
                }
            </div>
        )
    }
}

export default Main
