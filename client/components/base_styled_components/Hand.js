import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Card from './Card'
import Button from './Button'

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


const Hand = ({ hand, user, sideHand, handCount }) => (
  <HandWrapper user={user} sideHand={sideHand}>
    <div>
      {user &&
        <div>
          <div>
            Select Cards to Pass
          </div>
          <PassButton>
            Pass {passWhere(handCount)}
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

const mapState = ({ handCount }) => ({ handCount })

export default connect(mapState)(Hand)
