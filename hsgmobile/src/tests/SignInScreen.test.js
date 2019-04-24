/* global __DEV__ */

import { shallow, mount, render} from 'enzyme';
import renderer from 'react-test-renderer';
import SignInScreen from '../components/signin/SignInScreen';
import React from 'react';

it('Login page state change', () => {
    const tree = shallow(<SignInScreen />).getInstance();
    expect(tree.state.email).toEqual("")
})