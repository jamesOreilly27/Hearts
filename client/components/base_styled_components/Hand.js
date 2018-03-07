import React from 'react'
import styled from 'styled-components'
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
const Hand = ({ hand, user, sideHand }) => (
  <HandWrapper user={user} sideHand={sideHand}>
    <div>
      {user &&
        <div>
          <div>
            Pass Cards to the Left
          </div>
          <PassButton>
            Pass
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

export default Hand
