export default array => {
  if(!Array.isArray(array)) return null;

  return Math.round(array.reduce((p, c) => p + c, 0 ) / array.length);
};
