import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthContext } from './AuthContext';

const PublicRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuthContext();
  // console.log('user', currentUser)

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Redirect to='/' /> : <Component {...props} />
      }}
    >
    </Route>
  )
}

export default PublicRoute
