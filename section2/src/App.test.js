import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the
 * App component.
 * @function setup
 * @returns {ShallowWrapper} - A new wrapper that wraps the found nodes.
 */
const setup = () => shallow(<App />);

/**
 * Factory function to find the data-test attribute from an element
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper
 * @param {string} val
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe('0'); //this should be "0"
});

test('clicking button increments counter display', () => {
  const wrapper = setup();

  //find button
  const button = findByTestAttr(wrapper, 'increment-button');

  //click Button
  button.simulate('click');

  //find the display and test that the number has incremented
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe('1');
});
