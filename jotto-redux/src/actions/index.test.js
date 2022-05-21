import moxios from 'moxios';
import { getSecretWord } from './';
import { storeFactory } from '../../test/testUtils';

/*
 1. FOR ASYNC FUNCTIONS, MAKE SURE YOU RETURN 
 THE FUNCTION CALL IN THE TEST

 2. The test needs to wait until the promise resolves,
 so thats why we do this (so the test won't finish before
 the promise resolves)
 
 3. Call the assertion in the .then() callback
 4. MAKE SURE YOU SEE THE TESTS FAIL 
 */

describe('getSecretWord', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('secretWord is returned', () => {
    const store = storeFactory();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: 'party' });
    });

    return store.dispatch(getSecretWord()).then(() => {
      const secretWord = store.getState().secretWord;
      expect(secretWord).toBe('party');
    });
  });
});
