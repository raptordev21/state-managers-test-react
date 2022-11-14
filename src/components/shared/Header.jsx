import { useNavigate } from 'react-router-dom'
import './Header.css'

function Header() {
  const navigate = useNavigate()

  const goToHome = () => {
    navigate('/')
  }

  return (
    <div className='Header'>
      <div onClick={() => { goToHome() }} className='logo'>State Managers</div>
      <div></div>
    </div>
  )
}

export default Header