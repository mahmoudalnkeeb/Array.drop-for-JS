Array.prototype.drop = function (val = 1) {
    for (let i = 0; i < val; i++) {
       val == 0 ? this :  this.shift();
    }
  return this;
};

console.log(['oldest', 'older', 'old', 'new'].drop(1)); // drop ['oldest', 'older'] and return ['old', 'new']
