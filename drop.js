Array.prototype.drop = function(val = 1) {
  let newArr = null;
  for (let i = 0; i <= this.length; i++) {
    switch (val) {
      case i:
        newArr = this.slice(i);
        break;
      case 0:
        newArr = this;
        break;
    }
  }
  if (val > this.length) return (newArr = []);
  return newArr;
};

console.log(['oldest', 'older', 'old', 'new'].drop(2)); // drop ['oldest', 'older'] and return ['old', 'new']

