import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const Hand = props => (
    <div>
        {props.hand.map(card => {
            console.log(card)
            return <Card key={card.sortValue} card={card}/>
        })}
    </div>
)

export default Hand
