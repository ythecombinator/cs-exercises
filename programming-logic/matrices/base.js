const {check} = require('../helpers');
const {isArray, isFunction, isNumber, isString} = check;

class Matrix {
  constructor(rows, cols, generator) {
    if (isArray(rows)) {
      const data = rows;
      if (!data.every(isArray)) {
        throw new Error("Can't construct from a one-dimensional array");
      }

      const rowCount = data.length;
      const colCount = data.reduce((max, row) => (row.length > max ? row.length : max), 0);

      this.data = data.slice().map((r) => {
        const copy = r.slice();
        while (copy.length < colCount) {
          copy.push(undefined);
        }
        return copy;
      });

      this.rows = rowCount;
      this.cols = colCount;
    } else {
      this.rows = rows;
      this.cols = cols;
      this.fill(generator);
    }
  }

  fill(generator) {
    if (typeof generator === 'undefined') {
      generator = () => undefined;
    }
    if (!isFunction(generator)) {
      const fillVal = generator;
      generator = () => fillVal;
    }

    this.data = [];
    for (let i = 0; i < this.rows; i++) {
      const newRow = [];
      for (let j = 0; j < this.cols; j++) {
        const val = generator(i, j, this);
        newRow.push(val);
      }
      this.data.push(newRow);
    }

    return this;
  }

  get(row, col) {
    return this.data[row] ? this.data[row][col] : undefined;
  }

  getRow(row) {
    return this.data[row] ? this.data[row].slice() : undefined;
  }

  getCol(col) {
    const output = [];
    for (let i = 0; i < this.rows; i++) {
      output.push(this.data[i][col]);
    }
    return output;
  }

  map(iterator) {
    const operand = this;
    return new Matrix(this.rows, this.cols, (i, j) => iterator(operand.get(i, j), i, j, operand));
  }

  add(operand) {
    if (operand instanceof Matrix) {
      if (this.rows !== operand.rows) {
        throw new Error(
          `Cannot add a matrix with' ${this.rows} rows to a matrix with ${operand.rows} rows.`,
        );
      }
      if (this.cols !== operand.cols) {
        throw new Error(
          `Cannot add a matrix with' ${this.cols} cols to a matrix with ${operand.cols} cols.`,
        );
      }

      return this.map((elem, i, j) => elem + operand.get(i, j));
    } else if (isNumber(operand) || isString(operand)) {
      return this.map((elem) => elem + operand);
    } else {
      throw new Error(`Cannot add a matrix to ${operand}`);
    }
  }

  multiply(operand) {
    if (operand instanceof Matrix) {
      if (this.cols !== operand.rows) {
        throw new Error(
          `Cannot add a matrix with' ${this.cols} cols to a matrix with ${operand.rows} rows.`,
        );
      }
      return new Matrix(this.rows, operand.cols, (i, j) => {
        const row = this.getRow(i);
        const col = operand.getCol(j);
        return row.reduce((sum, elem, idx) => sum + elem * col[idx], 0);
      });
    } else if (isNumber(operand)) {
      return this.map((elem) => elem * operand);
    } else {
      throw new Error(`Cannot multiply a matrix with ${operand}`);
    }
  }
}

module.exports = {Matrix};
