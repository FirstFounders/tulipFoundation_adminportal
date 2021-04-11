import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function privateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      component={(props) => {
        const token = localStorage.getItem('token');
        //console.log(token);
        if (token) {
          return <Component {...props} />;
        } else {
          return <Redirect to='/login' />;
        }
      }}
    />
  );
}
