import React from 'react'
import styled from 'styled-components'
import {Hand, HandContainer } from '../components'

const Container = styled.div`
  width: 96vw;
  height: 96vh;
  margin: 1.5vh 1.5vw;
`

const Player1Container = HandContainer.extend`
	margin: 0 auto;
`
const Player2Container = HandContainer.extend`
	margin-left: -15em;
	margin-top: 14em;
	transform: rotate(90deg);
`
const Player3Container = HandContainer.extend`
	margin-left: 24em;
	margin-top: -3.9em;
	transform: rotate(-90deg);
`
const Player4Container = HandContainer.extend`
	margin: 12.5em auto 0;
`

const GameplayArea = ({ hands }) => {
  return (
    <Container>
      <Player1Container>
				<Hand hand={hands.player1} />
			</Player1Container>
			
			<Player2Container>
				<Hand hand={hands.player2} />
			</Player2Container>
			
			<Player3Container>
				<Hand hand={hands.player3} />
			</Player3Container>
			
			<Player4Container>
				<Hand hand={hands.player4} />				
			</Player4Container>
    </Container>
  )
}

export default GameplayArea

//transform: rotate(90deg);