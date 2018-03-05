import React, { Component } from 'react'
import { Button, GameplayArea } from './components'
import startHand, { makeDeck } from '../gameUtils'

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gameOn: false,
            hands: {}
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        const hands = startHand(makeDeck(1))
        const player1 = hands.player1Hand
        const player2 = hands.player2Hand
        const player3 = hands.player3Hand
        const player4 = hands.player4Hand
        this.setState({
            gameOn: true,
            hands: {
                player1,
                player2,
                player3,
                player4
            }
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
                    <GameplayArea />
                }
            </div>
        )
    }
}

export default Main
