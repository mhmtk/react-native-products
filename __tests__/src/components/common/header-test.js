import 'react-native';
import React from 'react';
import { Header, Button } from '../../../../src/components/common';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('header renders correctly', () => {
  const tree = renderer.create(<Header headerText="Products" />).toJSON();
  expect(tree).toMatchSnapshot();
});
