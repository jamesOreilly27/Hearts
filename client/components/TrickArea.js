import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { passCardsThunk, incrementHandCountThunk, clearPasscardsThunk, flipPassSwitch, setFullLeadThunk } from '../store'
import passCards from '../utils/passingCards'
import { findTwoOfClubs } from '../utils/playingHand'
import { Pass } from '../components'

const Wrapper = styled.div`
	display: flex;
	align-items: center;
`

const Container = styled.div`
	width: 45vw;
	height: 45vh;
	border: 1px solid black;
	border-radius: .3em;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`
const TopCard = styled.div`
	display: flex;
	justify-content: center;
`

const MiddleContainer = styled.div`
	display: flex;
	justify-content: space-between;
`

const BottomCard = styled.div`
	display: flex;
	justify-content: center;
`
class TrickArea extends Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		this.props.completePass(
      passCards(
      	this.props.handCount,
				this.props.passCards,
				this.props.hands.user,
				this.props.hands.comp1,
				this.props.hands.comp2,
				this.props.hands.comp3
			),
			this.props.handCount
		)
	}

	render() {
		return (
			<Wrapper>
				{!this.props.donePassing ?
					<Pass handleClick={this.handleClick}/>
					:
					<Container>
						<TopCard> Hello </TopCard>
						<MiddleContainer> 
							<div> Hello </div>
							<div> World! </div>
						</MiddleContainer>
						<BottomCard> HelloWorld </BottomCard>
					</Container>
				}
			</Wrapper>
		)
	}
}

const mapState = ({ hands, passCards, handCount, donePassing, leadPlayer }) => ({ hands, passCards, handCount, donePassing, leadPlayer })

const mapDispatch = (dispatch) => {
	return {
		completePass(newHands, int) {
			dispatch(passCardsThunk(newHands))
			dispatch(incrementHandCountThunk(int))
			dispatch(clearPasscardsThunk())
			dispatch(flipPassSwitch(true))
			dispatch(setFullLeadThunk('Clubs', findTwoOfClubs(newHands)))
		},
		incrementHandCount(int) {
			dispatch(incrementHandCountThunk(int))
		},
		resetUserPassCards() {
			dispatch(clearPasscardsThunk())
		}
	}
}

export default connect(mapState, mapDispatch)(TrickArea)
