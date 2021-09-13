import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import App from './App';

/**
 * Factory function to create a ShallowWrapper for the congrats component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<App />);
};

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent).toHaveLength(1);
});
