import React from 'react'
import {Link, Outlet} from "react-router-dom";

function Layout() {
  return (
    <div>
        <nav>
            <ul>
              <li>
                <Link to="/">Ana Sayfa</Link>
              </li>
              <li>
                <Link to="/about">Hakkında</Link>
              </li>
              <li>
                <Link to="/users">Kişiler</Link>
              </li>
            </ul>
        </nav>
        <Outlet />
    </div>
  )
}

export default Layout;
