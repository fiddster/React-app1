import React from 'react'
import { Routes } from './routes/Routes'
import { NavigationBar } from './components/navigationbar/NavigationBar'
import { UserProvider } from './shared/provider/UserProvider'

function App() {
  return (
    <UserProvider>
      <Routes>
        <NavigationBar />
      </Routes>
    </UserProvider>
  )
}

export default App