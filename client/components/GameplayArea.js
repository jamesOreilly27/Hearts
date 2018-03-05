import React from 'react'
import styled from 'styled-components'
import Hand, { HandContainer } from '../components'

const Container = styled.div`
    width: 96vw;
    height: 96vh;
    border: 2px dotted black;
    margin: 1.5vh 1.5vw;
`

// const Player1Container = HandContainer.extend`

// `
// const Player2Container = HandContainer.extend`

// `
// const Player3Container = HandContainer.extend`

// `
// const Player4Container = HandContainer.extend`

// `

const GameplayArea = props => {
    console.log('PROPS', props.hands)
    return (
        <Container>
            Hello From Gameplay Area!
        </Container>
    )
}

export default GameplayArea
