import React from 'react';

const NavLink = function NavLink() {
  let location = window.location;

  return (
    <section>
      {(() => {
        switch (location.pathname) {
          case '/home':
            return (
              <nav>
                <a className="nav-link current-page" href="/home">
                  Home
                </a>
                <a className="nav-link " href="/">
                  Customer Support
                </a>
              </nav>
            );
          default:
            return (
              <nav>
                <a className="nav-link" href="/home">
                  Home
                </a>
                <a className="nav-link current-page" href="/">
                  / Customer Support
                </a>
              </nav>
            );
        }
      })()}
    </section>
  );
};

export default NavLink;
