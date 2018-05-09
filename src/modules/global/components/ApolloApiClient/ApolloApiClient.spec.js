import React from 'react';
import { shallow } from 'enzyme';
import { ApolloApiClient } from './ApolloApiClient';

const createTestProps = custom => ({
  children: <div>{'app'}</div>,
  ...custom
});

const createWrapper = props => shallow(<ApolloApiClient {...props} />);

describe('rendering', () => {
  let props;
  let wrapper;

  describe('ApolloApiClient', () => {
    beforeEach(() => {
      props = createTestProps();
      wrapper = createWrapper(props);
    });

    it('should render the children', () => {
      expect(wrapper).toContainReact(<div>{'app'}</div>);
    });
  });
});
