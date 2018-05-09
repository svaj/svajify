import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

export class AnonymousHeader extends PureComponent {
  static displayName = 'AnonymousHeader';

  static propTypes = {
    showLoginRegisterbtn: PropTypes.bool
  };

  render() {
    return (
      <header>
        <Container>AnonymousHeader</Container>
      </header>
    );
  }
}

export default AnonymousHeader;
