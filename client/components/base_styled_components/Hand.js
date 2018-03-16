import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Card from './Card'
import Button from './Button'
import passCards from '../../utils/passingCards'
import { passCardsThunk, incrementHandCountThunk, clearPasscardsThunk } from '../../store'

export const HandWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.user ? 'column' : 'row'};
  align-items: ${props => (props.user || props.sideHand) ? 'center' : ''};
  justify-content: ${props => (props.user || props.sideHand) ? '' : 'center'}
`
//margin: ${props => props.sideHand ? 'none' : '0 auto'};
const Container = styled.div`
  display: flex;
  justify-content: center;
  ${props => props.sideHand ? 'flex-direction: column' : ''};
`

const PassButton = Button.extend`
  background-color: #38A1F3;
  color: #FFF;
  text-align: center;
  margin-bottom: .5em;
`

const passWhere = (handCount) => {
  const check = handCount % 4
  if(check === 0) return 'left'
  if(check === 1) return 'right'
  if(check === 2) return 'across'
}


class Hand extends Component {
  constructor(props) {
    super(props)
    this.state = { donePassing: false }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
		this.props.completePass(
      passCards(
      this.props.handCount,
			this.props.passCards,
			this.props.hands.user,
			this.props.hands.comp1,
			this.props.hands.comp2,
			this.props.hands.comp3
      )
    )

    this.props.incrementHandCount(this.props.handCount)
    this.props.resetUserPassCards()
    this.setState({ donePassing: true })
  }
  
  render() {
    const { hand, user, sideHand, handCount } = this.props
    const passTo = passWhere(handCount)
    return (
    <HandWrapper user={user} sideHand={sideHand}>
      <div>
        {user && !this.state.donePassing &&
          <div>
            <div>
              Select Cards to Pass
            </div>
            <PassButton onClick={this.handleClick}>
              Pass {passTo}
            </PassButton>
          </div>
        }
      </div>
      <Container sideHand={sideHand}>
        {hand.map(card => {
          return <Card
            key={card.sortValue}
            card={card}
            sideCard={sideHand}
            donePassing={this.state.donePassing}
          />
        })}
      </Container>
    </HandWrapper>
    )
  }
} 

const mapState = ({ handCount, hands, passCards }) => ({ handCount, hands, passCards })

const mapDispatch = dispatch => {
  return {
    completePass(newHands) {
      dispatch(passCardsThunk(newHands))
    },
    incrementHandCount(int) {
      dispatch(incrementHandCountThunk(int))
    },
    resetUserPassCards() {
      dispatch(clearPasscardsThunk())
    }
  }
}

export default connect(mapState, mapDispatch)(Hand)
