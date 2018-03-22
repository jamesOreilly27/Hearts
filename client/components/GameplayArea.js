import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {Hand, HandWrapper, TrickArea } from '../components'

const Wrapper = styled.div`
  width: 96vw;
  height: 96vh;
	margin: 1.5vh 1.5vw;
	display: flex;
	flex-direction: column;
	align-items: space-between;
`

const MiddleContainer = styled.div`
	margin: 1em 0;
	display: flex;
	justify-content: space-between;
`

const Comp2Container = styled.div`
	display: flex;
	justify-content: center;
`
const Comp1Container = styled.div`

`
const Comp3Container = styled.div`

`
const UserContainer = styled.div`
	display: flex;
	justify-content: center;
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
				<TrickArea />
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
