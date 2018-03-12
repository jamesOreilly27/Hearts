import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, GameplayArea } from './components'
import { dealCardsThunk } from './store'
import startHand, { makeDeck } from '../client/utils/deck'

class Main extends Component {
  constructor(props) {
  	super(props)

    this.state = { gameOn: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.deal(startHand(makeDeck(1)))
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
          <GameplayArea />
        }
      </div>
    )
  }
}

const mapState = state => state

const mapDispatch = dispatch => {
  return {
    deal(hands) {
      dispatch(dealCardsThunk(hands))
    }
  }
}

export default connect(mapState, mapDispatch)(Main)
