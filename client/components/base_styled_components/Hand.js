import React, { Component } from 'react'
import styled from 'styled-components'
import Card from './Card'

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

const Hand = ({ hand, user, sideHand, handCount }) => (
  <HandWrapper user={user} sideHand={sideHand}>
    <Container sideHand={sideHand}>
      {hand.map(card => {
        return <Card
          key={card.sortValue}
          card={card}
          sideCard={sideHand}
        />
      })}
    </Container>
  </HandWrapper>
)  

export default Hand
