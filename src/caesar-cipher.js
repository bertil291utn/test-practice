const caesarCipher = (text, shift) => {
  const overShift = (letter, shft) => {
    if ((letter.charCodeAt() + shft) > 90) {
      return String.fromCharCode((letter.charCodeAt() + shft) - 26);
    }
    if ((letter.charCodeAt() + shft) > 122) {
      return String.fromCharCode((letter.charCodeAt() + shft) - 26);
    }
    return String.fromCharCode(letter.charCodeAt() + shft);
  };

  const newText = [];
  text.split('').forEach((letter) => {
    if (letter.match(/[A-Za-z]/)) {
      newText.push(overShift(letter, shift));
    }
    else newText.push(letter);
  });

  return newText.join('');
};

export default caesarCipher;