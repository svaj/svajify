import React, { PureComponent, Fragment } from 'react';
import { injectIntl, intlShape } from 'react-intl';

export class Home extends PureComponent {
  static displayName = 'Home';

  static propTypes = {
    intl: intlShape.isRequired
  };

  render() {
    return <Fragment>Home</Fragment>;
  }
}
export default injectIntl(Home);
