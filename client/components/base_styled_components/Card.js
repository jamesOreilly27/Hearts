import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
	height: 8em;
	width: 3em;
	border: 2px solid black;
	text-align: center;
`

const Card = ({ card }) => (
	<CardContainer>
		<div>
			{card.values.renderValue}
		</div>
		<div>
			{card.suit}
		</div>
	</CardContainer>
)


export default Card
