import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { RegisteredHeader, RegisteredFooter } from 'modules/global/components';

export class RegisteredFrame extends PureComponent {
  static displayName = 'RegisteredFrame';

  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render({ children } = this.props) {
    return (
      <Fragment>
        <RegisteredHeader {...this.props} />
        <main>
          <children.type {...children.props} {...this.props}>
            {children}
          </children.type>
        </main>
        <RegisteredFooter {...this.props} />
      </Fragment>
    );
  }
}

export default RegisteredFrame;
