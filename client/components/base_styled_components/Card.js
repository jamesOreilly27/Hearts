import React from 'react'
import styled from 'styled-components'

const colorProvider = suit => {
	if(suit === 'Diamonds' || suit === 'Hearts') return 'red'
	return 'black'
}

const CardContainer = styled.div`
	height: ${props => props.sideCard ? '1.5em' : '3em'};
	width: 3em;
	border: 2px solid black;
	text-align: center;
	margin: ${props => props.sideCard ? '.2em 0' : '0 .2em'};
	color: ${props => colorProvider(props.suit)};
`

const truncate = string => {
	return string.slice(0, 3)
}

const Card = ({ card, sideCard }) => (
	<CardContainer suit={card.suit} sideCard={sideCard}>
		<div>
			{card.values.renderValue}
		</div>
		<div>
			{truncate(card.suit)}
		</div>
	</CardContainer>
)


export default Card
