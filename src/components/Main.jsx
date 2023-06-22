import React from 'react'

function Main(props) {
  const {darkmode} = props;
  return (
    <main>
      <h1>main</h1>
      <ul>
        <li><img src="images/일론.jpg" width="500" alt="일론" />다크모두쥐!</li>
        <li><img src="images/000101.png" alt="000101" /></li>
      </ul>
    </main>
  )
}

export default Main