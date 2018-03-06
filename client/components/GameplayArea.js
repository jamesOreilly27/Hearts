import React from 'react'
import styled from 'styled-components'
import {Hand, HandContainer } from '../components'

const Container = styled.div`
  width: 96vw;
  height: 96vh;
  margin: 1.5vh 1.5vw;
`

const Comp2Container = HandContainer.extend`
	margin: 0 auto;
`
const Comp1Container = HandContainer.extend`
	margin-left: -15em;
	margin-top: 14em;
	transform: rotate(90deg);
`
const Comp3Container = HandContainer.extend`
	margin-left: 24em;
	margin-top: -3.9em;
	transform: rotate(-90deg);
`
const UserContainer = HandContainer.extend`
	margin: 12.5em auto 0;
`

const GameplayArea = ({ hands }) => {
  return (
    <Container>
			<Comp2Container>
				<Hand hand={hands.comp2} />				
			</Comp2Container>
			
			<Comp1Container>
				<Hand hand={hands.comp1} />
			</Comp1Container>
			
			<Comp3Container>
				<Hand hand={hands.comp3} />
			</Comp3Container>
			
      <UserContainer>
				<Hand hand={hands.user} />
			</UserContainer>
    </Container>
  )
}

export default GameplayArea
