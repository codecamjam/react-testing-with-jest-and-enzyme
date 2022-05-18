import moxios from 'moxios';
import { getSecretWord, correctGuess, actionTypes } from './';

describe('correctGuess', () => {
  test('returns an action with type `CORRECT_GUESS`', () => {
    const action = correctGuess();
    expect(action).toStrictEqual({ type: actionTypes.CORRECT_GUESS });
  });
});

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
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: 'party' });
    });

    //update to test app in Redux / context sections
    return getSecretWord().then((secretWord) => {
      expect(secretWord).toBe('party');
    });
  });
});
