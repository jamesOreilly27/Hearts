import React, { Component } from 'react'
import { Button, GameplayArea } from './components'
import startHand, { makeDeck } from '../gameUtils'

class Main extends Component {
  constructor(props) {
  	super(props)

    this.state = { gameOn: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const createdHands = startHand(makeDeck(1))
    const user = createdHands.player1Hand
    const comp1 = createdHands.player2Hand
    const comp2 = createdHands.player3Hand
    const comp3 = createdHands.player4Hand
		
		this.setState({
      gameOn: true,
      hands: {
        user,
        comp1,
        comp2,
        comp3
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
          <GameplayArea hands={this.state.hands} />
        }
      </div>
    )
  }
}

export default Main
