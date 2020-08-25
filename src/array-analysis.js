/* eslint-disable dot-notation */
const arrayAnalysis = (array) => {
  const response = {
    average: array.reduce((x, y) => x + y) / array.length,
    length: array.length,
    max: Math.max(...array),
    min: Math.min(...array),
  };

  return response;
};
export default arrayAnalysis;
