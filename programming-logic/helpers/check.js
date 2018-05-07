const isNumber = (item) => Object.prototype.toString.call(item) === '[object Number]';
const isString = (item) => Object.prototype.toString.call(item) === '[object String]';
const isFunction = (item) => Object.prototype.toString.call(item) === '[object Function]';
const isArray =
  Array.isArray || ((item) => Object.prototype.toString.call(item) === '[object Array]');

const check = {
  isNumber,
  isString,
  isFunction,
  isArray,
};

module.exports = {
  check,
};
