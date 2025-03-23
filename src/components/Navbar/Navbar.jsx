import './Navbar.css';
import Logo from './Logo';
import SearchIcon from './SearchIcon.jsx';
import NotificationIcon from './NotificationIcon.jsx';
import AccountDropdown from './AccountDropdown.jsx';

function Navbar({ links }) {

  return (
    <div className="navbarContainer">
      <div className="navbarLeftSubContainer">
        <Logo />
        <div className="linkContainer">
        {
            links.map(({name, url}) => (
                <a className="link" key={name} href={url}>{name}</a>
            ))
        }
        </div>
      </div>
      <div className="navbarRightSubContainer">
          <SearchIcon />
          <NotificationIcon />
          <AccountDropdown />
      </div>
    </div>
  )
};

export default Navbar;
