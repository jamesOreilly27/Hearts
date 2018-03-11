import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { newPassCardThunk } from '../../store'

const colorProvider = suit => {
	if(suit === 'Diamonds' || suit === 'Hearts') return 'red'
	return 'black'
}

const CardContainer = styled.button`
	margin: ${props => props.sideCard ? '.2em 0' : '0 .2em'};
	border: 1px solid black;
	text-align: center;
	color: ${props => colorProvider(props.suit)};
	font-size: ${props => props.sideCard ? '.7em' : '.9em'}
`

const truncate = string => {
	return string.slice(0, 3)
}

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedForPass: false
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		this.props.passCards.length < 3 ? 
			this.props.selectCard(this.props.card) 
			:
			alert('You have already selected 3 cards')

		this.setState({ selectedForPass: true })
	}

	render() {
		const { card, sideCard, selectCard } = this.props
		return (
			<CardContainer suit={card.suit} sideCard={sideCard}onClick={this.handleClick}>
				{console.log(this.state)}
				<div>
					{card.values.renderValue}
				</div>
				<div>
					{truncate(card.suit)}
				</div>
			</CardContainer>
		)
	}
} 

const mapState = ({ passCards }) => ({ passCards })

const mapDispatch = dispatch => {
	return {
		selectCard(card) {
			dispatch(newPassCardThunk(card))
		}
	}
}

export default connect(mapState, mapDispatch)(Card)
