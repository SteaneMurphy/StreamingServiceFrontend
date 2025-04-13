/*
  The navigation bar main component.

  This component contains many smaller sub-components like the logo, links and notification icons.

  The 'useState' and 'useEffect' hooks are used in this component.

  To determine if the navBar is at the top of the screen, and thus needs to be transparent, the position
  of the scroll is stored in the 'atTop' boolean using 'useState'. Using an event listener, when it is determined
  to be at the top of the screen, the function 'setIsTop' updates to true, and the opposite when it is not at the top.

  This state triggers the relevant css class 'transparent' or 'solid'.

  The 'useEffect' hook is used to attatch the event listener to the window object. It only runs once on mount as it has
  an empty dependency array. Since the event listener is always attatched to the window, it keeps checking the state of
  the scroll position.

  A great example of another feature of the 'useEffect' hook is cleanup. The event listener is removed from the window
  object when this component unmounts, that is, removed from the DOM. This is achieved by using a return statement in
  the 'useEffect' hook.
*/

import { useEffect, useState } from 'react';
import './Navbar.css';
import Logo from './Logo';
import SearchIcon from './SearchIcon.jsx';
import NotificationIcon from './NotificationIcon.jsx';
import AccountDropdown from './AccountDropdown.jsx';

function Navbar({ links }) {
  const [atTop, setIsTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /*
    Each link is destructed from an array of link names and url strings. The map function iterates through this array,
    creating a new link element, updating its name and url as per the destructured data.
  */
  return (
    <div className={`navbarContainer ${atTop ? 'transparent' : 'solid'}`}>
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
