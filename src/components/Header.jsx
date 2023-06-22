import { useContext } from 'react'
import { Context } from '../Context'

function Header() {
  // context 사용하기(사용할 변수 꺼냄)
  const { handleDarkmode } = useContext(Context);

  return (
    <header>
      <h1>Header</h1>
      <button onClick={handleDarkmode}>Dark mode</button>
    </header>
  )
}

export default Header