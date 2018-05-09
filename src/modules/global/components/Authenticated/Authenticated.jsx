import querystring from 'querystring';
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, withRouter } from 'react-router-dom';
import { compose, setDisplayName, withProps } from 'recompose';
import { loggedIn } from 'utils/security';

const generateQueryRedirect = pathname => {
  return querystring.stringify({
    ...(pathname === '/' ? {} : { redirectTo: pathname })
  });
};

export const Authenticated = props => {
  return props.loggedIn ? (
    props.children
  ) : (
    <Redirect
      to={{
        pathname: '/login',
        search: `?${generateQueryRedirect(props.location.pathname)}`
      }}
    />
  );
};

Authenticated.displayName = 'Authenticated';
Authenticated.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  loggedIn: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default compose(
  setDisplayName('Authenticated'),
  withRouter,
  withProps(() => ({
    loggedIn: loggedIn()
  }))
)(Authenticated);
