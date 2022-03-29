Array.prototype.drop = function (val = 1) {
  for (let i = 0; i < val; i++) {
    val == 0 ? this : this.shift();
  }
  return this;

  // return this.slice(val);

  // this.splice(0, val);
  // return this;
};

console.log(['oldest', 'older', 'old', 'new'].drop(0));
console.log(['oldest', 'older', 'old', 'new'].drop(1));
console.log(['oldest', 'older', 'old', 'new'].drop(2));
console.log(['oldest', 'older', 'old', 'new'].drop(3));
console.log(['oldest', 'older', 'old', 'new'].drop(4));
console.log(['oldest', 'older', 'old', 'new'].drop(5));