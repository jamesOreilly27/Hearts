import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const Container = styled.div`
    display: flex;
    margin-top: 80vh;
`

const Hand = props => (
    <Container>
        {props.hand.map(card => {
            return <Card key={card.sortValue} card={card}/>
        })}
    </Container>
)

export default Hand
