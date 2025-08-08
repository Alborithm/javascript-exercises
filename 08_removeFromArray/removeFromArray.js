const removeFromArray = function(arr, ...args) {
  return arr.filter( x => !args.includes(x));
  
    // My old solution
//   return arr.filter( x => {
//     for (const arg of args) {
//         if (arg === x) return false;
//     }
//     return true;
//   });
};

// Do not edit below this line
module.exports = removeFromArray;
