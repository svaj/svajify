import React, { PureComponent } from 'react';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

export class RegisteredFooter extends PureComponent {
  static displayName = 'RegisteredFooter';

  static propTypes = {
    intl: intlShape.isRequired
  };

  render() {
    return (
      <footer>
        <Container>RegisteredFooter</Container>
      </footer>
    );
  }
}

export default injectIntl(RegisteredFooter);
