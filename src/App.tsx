import React from 'react'
import './App.css'
import { useItems } from './graphql/hooks'

const App = () => {
  const { items } = useItems()
  return (
    <div className="App">
      <header className="App-header">
        {items && items.map(item => <div key={item?.name}>{item?.name}</div>)}
      </header>
    </div>
  )
}

export default App
