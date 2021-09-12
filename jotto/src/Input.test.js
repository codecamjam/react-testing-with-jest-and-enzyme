import { shallow } from 'enzyme';
import Input from './Input';
import { findByTestAttr } from '../test/testUtils';

/**
 * Factory function to create a ShallowWrapper for the
 * GuessedWords component
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<Input />);
};

test('renders without error', () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(
    wrapper,
    'component-input',
  );
  expect(inputComponent.length).toBe(1);
});
