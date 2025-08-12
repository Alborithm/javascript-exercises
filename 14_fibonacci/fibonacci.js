const fibonacci = function(num) {
  if( num < 0) {
    return "OOPS";
  }
  let pre1 = 0;
  let pre2 = 0;
  let result = 0;
  for(let i = 0; i <= num; i++) {
    result = pre1 + pre2;
    pre2 = pre1;
    pre1 = result;
    if(pre1 === 0 && i === 1) {
        pre1 = 1;
        result = 1;
    }
  }

  return result;
};

// Do not edit below this line
module.exports = fibonacci;
