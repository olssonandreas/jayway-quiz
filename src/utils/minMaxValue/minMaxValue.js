const minValue = array => array && Array.isArray(array) ? Math.min(...array) : null

const maxValue = array => array && Array.isArray(array) ? Math.max(...array) : null

export {
  minValue,
  maxValue
};
