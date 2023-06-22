import React from 'react'
import Header from './Header'
import { useContext } from 'react'
import { Context } from '../Context';
import Main from './Main'

function Page() {
  const { darkmode } = useContext(Context);

  return (
    <div className={darkmode ? 'App darkmode' : 'App'}>
      <Header />
      <Main darkmode={darkmode} />
    </div>
  )
}

export default Page