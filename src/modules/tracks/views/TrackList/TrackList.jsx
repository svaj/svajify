import React, { PureComponent, Fragment } from 'react';
import { injectIntl, intlShape } from 'react-intl';

export class TrackList extends PureComponent {
  static displayName = 'TrackList';

  static propTypes = {
    intl: intlShape.isRequired
  };

  render() {
    return <Fragment>TrackList</Fragment>;
  }
}
export default injectIntl(TrackList);
