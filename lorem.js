export const PI = 3.1415;

const average = (numbers) => {
  return numbers.reduce((prev, curr) => prev + curr) / numbers.length;
};

export default average;
