import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import bcrypt from 'bcryptjs';
export default function privateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      component={(props) => {
        // gshwyjkskjuhsheuejkjkj

        try {
          const token = localStorage.getItem('token');
          let authUser = null;
          if (token) {
            authUser = bcrypt.compareSync('gshwyjkskjuhsheuejkjkj', token); // true
            if (!authUser) {
              localStorage.clear();
            }
          }

          //console.log(token);
          if (authUser ? authUser : false) {
            return <Component {...props} />;
          } else {
            return <Redirect to='/login' />;
          }
        } catch (error) {
          console.error(error);
        }
      }}
    />
  );
}
