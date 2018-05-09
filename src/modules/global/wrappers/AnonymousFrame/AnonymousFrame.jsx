import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { AnonymousHeader, AnonymousFooter } from 'modules/global/components';

export class AnonymousFrame extends PureComponent {
  static displayName = 'AnonymousFrame';

  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        <AnonymousHeader {...this.props} />
        <main>{this.props.children}</main>
        <AnonymousFooter {...this.props} />
      </div>
    );
  }
}

export default AnonymousFrame;
