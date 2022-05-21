/**
 * @method getLetterMatchCount
 * @param {*} guessedWord - Guessed word.
 * @param {*} secretWord - Secret word.
 * @returns {number} - Number of letters matched between guessed word
 * and secret word.
 */
export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetters = secretWord.split('');

  const guessedLetterSet = new Set(guessedWord);
  return secretLetters.filter((letter) => guessedLetterSet.has(letter))
    .length;
}
