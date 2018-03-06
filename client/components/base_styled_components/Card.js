import React from 'react'
import styled from 'styled-components'

const colorProvider = suit => {
	if(suit === 'Diamonds' || suit === 'Hearts') return 'red'
	return 'black'
}

const CardContainer = styled.div`
	height: 4em;
	width: 3em;
	border: 2px solid black;
	text-align: center;
	margin: 0 .2em 0;
`

const truncate = string => {
	return string.slice(0, 3)
}

const Card = ({ card }) => (
	<CardContainer style={{ color: colorProvider(card.suit)}}
	>
		<div>
			{card.values.renderValue}
		</div>
		<div>
			{truncate(card.suit)}
		</div>
	</CardContainer>
)


export default Card
