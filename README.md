# mocaUnitTestingHowTo

Practice with Tanua Rascia

Here the github : https://github.com/taniarascia/calc

## Basic workflow 
1. Write the test code and expectation result
2. write the function for the test code
3. Use the function, incorporate in your code


## Write the test code and expectation result

  * require the module
  * it statement `it(1. 'description', 2. function of the moudel being use to test)`
  * `equal( 1. the function being test, 2. expecting result)`
```
// require test module
const assert = require('assert');
// import the function being test
const operations = require('./operation.js');

it('correctly calculates the sum of 1 and 3', () => {
  assert.equal(operations.add(1, 3), 4);
});
```
## write the function for the test code

```
const add = (x, y) => +x + +y;

module.exports = { add };
```

### Use the function, incorporate in your code
```
console.log(`The sum of ${x} and ${y} is ${operations.add(x, y)}.`);
```