import React from 'react'
import styled from 'styled-components'

const Card = ({ card }) => (
	<div>
		{card.values.renderValue}
		{card.suit}
	</div>
)


export default Card
