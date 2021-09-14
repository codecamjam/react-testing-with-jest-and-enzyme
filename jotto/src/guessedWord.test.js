import React from 'react';
import { mount } from 'enzyme';

import App from './App';
import { findByTestAttr } from '../test/testUtils';

/**
 * Create a wrapper with specified initial conditions
 * then submit a guessed word of 'train'
 * @function setup
 * @param {object} state - Initial conditions.
 * @returns {Wrapper} - Enzyme wrapper of mounted App component
 */
const setup = (state = {}) => {
  // TODO: apply state
  const wrapper = mount(<App />);

  //add value to input box
  const inputBox = findByTestAttr(wrapper, 'input-box');
  inputBox.simulate('change', { target: { value: 'train' } });

  //simulate click on submit button
  const submitButton = findByTestAttr(wrapper, 'submit-button');
  submitButton.simulate('click', { preventDefault() {} });
};

describe('no words guessed', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [],
    });
  });

  test('creates GuessedWords table with one row', () => {
    const guessedWordRows = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordRows).toHaveLength(1);
  });
});

describe('some words guessed', () => {});

describe('guess secret word', () => {});
