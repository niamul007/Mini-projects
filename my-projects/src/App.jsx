import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PasswordValidator from './components/Locker.jsx'
import SecretToggle from './components/Toggle.jsx'
import Game from './Game/Game.jsx'
import HighLow from './High-Low/highLow.jsx'
import EmojiGame from './emoji-game/EmojiGame.jsx'

function App() {

  return (
    <>
    <EmojiGame />
    </>
  )
}

export default App
