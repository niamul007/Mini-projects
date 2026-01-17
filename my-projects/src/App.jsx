import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import PasswordValidator from './components/Locker.jsx'
import SecretToggle from './components/Toggle.jsx'
import Game from './Game/Game.jsx'
import HighLow from './High-Low/highLow.jsx'
import EmojiGame from './emoji-game/EmojiGame.jsx'
import BudgetList from './list/List.jsx'
import KanbanBoard from './Unknown/Known.jsx'
import FinanceDashboard from './Dashboard/Dashboard.jsx'
import PracticeLab from './Practice_set/All.jsx'
import FinancePro from './Practice_set/FinanceTab.jsx'

function App() {

  return (
    <>
    {/* <PracticeLab /> */}
    {/* <FinanceDashboard /> */}
    {/* <KanbanBoard /> */}
    <FinancePro />
    </>
  )
}

export default App
