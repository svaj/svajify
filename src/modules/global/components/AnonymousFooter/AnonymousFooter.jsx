import React, { PureComponent } from 'react';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

export class AnonymousFooter extends PureComponent {
  static displayName = 'AnonymousFooter';

  static propTypes = {
    intl: intlShape.isRequired
  };

  render() {
    return (
      <footer>
        <Container>AnonymousFooter</Container>
      </footer>
    );
  }
}

export default injectIntl(AnonymousFooter);
