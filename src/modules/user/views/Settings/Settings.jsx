import React, { PureComponent, Fragment } from 'react';
import { injectIntl, intlShape } from 'react-intl';

export class Settings extends PureComponent {
  static displayName = 'Settings';

  static propTypes = {
    intl: intlShape.isRequired
  };

  render() {
    return <Fragment>Settings</Fragment>;
  }
}
export default injectIntl(Settings);
