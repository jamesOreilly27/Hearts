import React from 'react'
import styled from 'styled-components'
import Card from './Card'

export const HandContainer = styled.div`
  display: flex;
`

const Hand = props => (
  <HandContainer>
    {props.hand.map(card => {
      return <Card key={card.sortValue} card={card}/>
    })}
  </HandContainer>
)

export default Hand
