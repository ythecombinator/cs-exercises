const quotRem = (m, n) => [Math.floor(m / n), m % n];

const showIntAtBase = (base, toChr, n, rs) => {
  const showIt = ([n, d], r) => {
    const r_ = toChr(d) + r;
    return n !== 0 ? showIt(quotRem(n, base), r_) : r_;
  };
  return base <= 1
    ? 'error: showIntAtBase applied to unsupported base'
    : n < 0
      ? 'error: showIntAtBase applied to negative number'
      : showIt(quotRem(n, base), rs);
};

const showBin = (n) => {
  const binaryChar = (n) => (n !== 0 ? 1 : 0);

  return showIntAtBase(2, binaryChar, n, '');
};

const result = showBin(5);

console.log(result);
