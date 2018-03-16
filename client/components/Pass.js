import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Button } from '../components'
import passCards from '../utils/passingCards'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const PassButton = Button.extend`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #38A1F3;
  color: #FFF;
  margin-bottom: .5em;
`
class Pass extends Component {
  constructor(props) {
		super(props)
	}

	passWhere(handCount) {
		const check = handCount % 4
		if(check === 0) return 'left'
  	if(check === 1) return 'right'
  	if(check === 2) return 'across'
	}
	
	render() {
		const passTo = this.passWhere(this.props.handCount)
		return (
			<Wrapper>
				<div> Select 3 Cards </div>
				<PassButton onClick={this.props.handleClick}>
					Pass {passTo}
				</PassButton>
			</Wrapper>
		)
	}
}

const mapState = ({ handCount }) => ({ handCount })

export default connect(mapState)(Pass)
