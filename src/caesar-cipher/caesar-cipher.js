const overShift = (letter, shift) => {
  const charVal = letter.charCodeAt() + shift;
  if (charVal > 90 && letter.charCodeAt() < 90) {
    return String.fromCharCode(charVal - 26);
  }
  if (charVal > 122) {
    return String.fromCharCode(charVal - 26);
  }
  return String.fromCharCode(charVal);
};

const caesarCipher = (text, shift) => {
  const newText = [];
  text.split('').forEach((letter) => {
    if (letter.match(/[A-Za-z]/)) {
      newText.push(overShift(letter, shift));
    } else newText.push(letter);
  });

  return newText.join('');
};

export default caesarCipher;
