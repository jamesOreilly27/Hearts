import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {Hand, HandWrapper, TrickArea } from '../components'

const Wrapper = styled.div`
  width: 96vw;
  height: 96vh;
	margin: 1.5vh 1.5vw;
`

const MiddleContainer = styled.div`
	width: 96vw;
	display: flex;
	justify-content: space-between;
`

const Comp2Container = HandWrapper.extend`
	margin: 0 auto;
`
const Comp1Container = HandWrapper.extend`
	width: 10vw;
`
const Comp3Container = HandWrapper.extend`
	width: 10vw;
`
const UserContainer = HandWrapper.extend`
	margin: 0 auto;

`

const GameplayArea = ({ hands }) => {
  return (
    <Wrapper>
			<Comp2Container>
				<Hand hand={hands.comp2} />				
			</Comp2Container>
			
			<MiddleContainer>
				<Comp1Container sideHand>
					<Hand hand={hands.comp1} sideHand/>
				</Comp1Container>
				<TrickArea>
					Hello World!
				</TrickArea>
				<Comp3Container sideHand>
					<Hand hand={hands.comp3} sideHand/>
				</Comp3Container>
			</MiddleContainer>
			
      <UserContainer>
				<Hand hand={hands.user} user/>
			</UserContainer>

    </Wrapper>
  )
}

const mapState = ({ hands }) => ({ hands })

export default connect(mapState)(GameplayArea)
