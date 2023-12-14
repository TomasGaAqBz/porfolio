import { useState } from 'react'


import NavBar from './components/navbar/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar></NavBar>
    </div>
  )
}

export default App
