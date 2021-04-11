import React from 'react';
import { Link, withRouter } from 'react-router-dom';
//data
import { routes } from './HOC/routes';
//Images
import Logo from './Images/Frame.png';

function SideBar({ history }) {
  const PathName = history.location.pathname;
  return (
    <>
      <div className=''>
        <div className='sidebar'>
          <div>
            <Link to='/'>
              <img src={Logo} alt='' width={'120px'} />
            </Link>
            <h2>Tulip Foundation</h2>
          </div>
          {/* <Link to='/'>
            <img src={Logo} alt='' width={'120px'} />
          </Link> */}

          <ul>
            {routes.map((route, index) => (
              <li key={index}>
                {route.path && route.icon ? (
                  <Link
                    to={`${route.path}`}
                    className={PathName === route.path ? 'active' : null}
                  >
                    <span className='sidebar-icons'>{route.icon}</span>
                    <span className='sidebar-name'>{route.name}</span>
                  </Link>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default withRouter(SideBar);
