import React, { PureComponent, Fragment } from 'react';
import { injectIntl, intlShape } from 'react-intl';

export class Entry extends PureComponent {
  static displayName = 'Entry';

  static propTypes = {
    intl: intlShape.isRequired
  };

  render() {
    return <Fragment>Entry</Fragment>;
  }
}
export default injectIntl(Entry);
