import { useState } from 'react'
import './App.css'
import Page from './components/Page';
import { Context } from './Context';

function App() {
  const [darkmode, setDarkmode] = useState(false)
  const handleDarkmode = () => {
    setDarkmode(!darkmode);
    console.log(darkmode);
  }

  return (
    // 전역 state 변수들 
    <Context.Provider value={{darkmode, setDarkmode, handleDarkmode}}>
      <Page />
    </Context.Provider>  
  )
}

export default App
