import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const Container = styled.div`
    display: flex;
`

const Hand = props => (
    <Container>
        {props.hand.map(card => {
            return <Card key={card.sortValue} card={card}/>
        })}
    </Container>
)

export default Hand
