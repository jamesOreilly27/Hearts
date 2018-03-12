import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Card from './Card'
import Button from './Button'
import passLeft from '../../utils/passingCards'

export const HandWrapper = styled.div`
  width: 80%;
  margin: ${props => props.sideHand ? 'none' : '0 auto'};
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  ${props => props.sideHand ? 'flex-direction: column' : ''};
`

const PassButton = Button.extend`
  background-color: #38A1F3;
  color: #FFF;
  text-align: center;
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

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
		passLeft(
			this.props.passCards,
			this.props.hands.user,
			this.props.hands.comp1,
			this.props.hands.comp2,
			this.props.hands.comp3
		)
  }
  
  render() {
    const { hand, user, sideHand, handCount } = this.props
    const passTo = passWhere(handCount)
    return (
    <HandWrapper user={user} sideHand={sideHand}>
      <div>
        {user &&
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
          return <Card key={card.sortValue} card={card} sideCard={sideHand}/>
        })}
      </Container>
    </HandWrapper>
    )
  }
} 

const mapState = ({ handCount, hands, passCards }) => ({ handCount, hands, passCards })

export default connect(mapState)(Hand)
