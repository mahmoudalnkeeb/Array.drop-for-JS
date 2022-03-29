# Array.drop for JavaScript
Adding drop method to Array prototype in Javascript


```

Array.prototype.drop = function (val = 1) {
  for (let i = 0; i < val; i++) {
    val == 0 ? this : this.shift();
  }
  return this;

  // return this.slice(val);

  // this.splice(0, val);
  // return this;
};

console.log(['oldest', 'older', 'old', 'new'].drop(0)); // returns ['oldest', 'older', 'old', 'new']
console.log(['oldest', 'older', 'old', 'new'].drop(1)); // returns ['older', 'old', 'new']
console.log(['oldest', 'older', 'old', 'new'].drop(2)); // returns ['old', 'new']
console.log(['oldest', 'older', 'old', 'new'].drop(3)); // returns ['new']
console.log(['oldest', 'older', 'old', 'new'].drop(4)); // returns []
console.log(['oldest', 'older', 'old', 'new'].drop(5)); // returns []


```
