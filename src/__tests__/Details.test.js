import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import CharacterInfo from '../components/CharacterInfo';
import store from '../redux/ConfigueStore';

it('matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}><CharacterInfo /></Provider>,
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
