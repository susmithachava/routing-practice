// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="logo"
      />
      <h1>Wave</h1>
    </div>
    <div>
      <Link className="route-link" to="/">
        Home
      </Link>
      <Link className="route-link" to="/About">
        About
      </Link>
      <Link className="route-link" to="/contact">
        Contact
      </Link>
    </div>
  </div>
)
export default Header
