import React from 'react';
import Navbar1 from '../Navbar';
import SideBar from '../SideBar';

export default function Index(prop) {
  return (
    <div className='wrapper'>
      {prop.side ? (
        <div className='row no-gutters'>
          <div className='col-lg-3'>
            <SideBar />
          </div>
          <div className=' col-md-12 col-lg-9'>
            <div className='main'>
              <Navbar1 />
              <div className='mt-5'>{prop.children}</div>
            </div>
          </div>
        </div>
      ) : (
        <>{prop.children}</>
      )}
    </div>
  );
}
