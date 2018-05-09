import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

export class RegisteredHeader extends PureComponent {
  static displayName = 'RegisteredHeader';

  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    currentUser: PropTypes.object,
    currentProject: PropTypes.object
  };

  render() {
    // const { currentUser, currentProject } = this.props;
    return (
      <header>
        <Container>Registered Header</Container>
      </header>
    );
  }
}

export default withRouter(RegisteredHeader);
