import React from 'react'

function Header(props) {
  const {darkmode, handleDarkmode} = props;
  console.log('Header:', props);
  return (
    <header>
      <h1>Header</h1>
      <button onClick={handleDarkmode}>Dark mode</button>
    </header>
  )
}

export default Header