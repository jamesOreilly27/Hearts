import React from 'react'
import { Button } from './components'

const handleClick = () => {
    console.log('Hello World!!')
}

const Main = () => {
    return (
        <div>
            <h1> Play Hearts! </h1>
            <Button onClick={handleClick}>
                Start Game
            </Button>
        </div>
    )
}

export default Main
