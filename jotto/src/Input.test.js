import { shallow } from 'enzyme';
import Input from './Input';
import {
  findByTestAttr,
  checkProps,
} from '../test/testUtils';

/**
 * Factory function to create a ShallowWrapper for the
 * GuessedWords component
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = (secretWord = 'party') => {
  return shallow(
    <Input secretWord={secretWord} />,
  );
};

test('renders without error', () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(
    wrapper,
    'component-input',
  );
  expect(inputComponent.length).toBe(1);
});

test('does not throw warning with expected props', () => {
  checkProps(Input, { secretWord: 'party' });
});
