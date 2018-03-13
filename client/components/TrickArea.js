import React from 'react'
import styled from 'styled-components'

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
const TrickArea = props => {
	return (
		<Wrapper>
			<Container>
				<TopCard> Hello </TopCard>
				<MiddleContainer> 
					<div> Hello </div>
					<div> World! </div>
				</MiddleContainer>
				<BottomCard> HelloWorld </BottomCard>
			</Container>
		</Wrapper>
	)
}

export default TrickArea
