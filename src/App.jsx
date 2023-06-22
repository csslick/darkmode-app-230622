import { useState } from 'react'
import './App.css'
import Page from './components/Page';

function App() {
  const [darkmode, setDarkmode] = useState(false)

  const handleDarkmode = () => {
    setDarkmode(!darkmode);
    console.log(darkmode);
  }

  return (
    <Page 
      darkmode={darkmode} 
      setDarkmode={setDarkmode}
      handleDarkmode={handleDarkmode}
    />
  )
}

export default App
