import './Logo.css'
import logo from '../../assets/logo.png'

function Logo() {

  return (
    <div className="logoContainer">
        <img className="logoImage" src={logo}></img>
    </div>
  )
}

export default Logo
