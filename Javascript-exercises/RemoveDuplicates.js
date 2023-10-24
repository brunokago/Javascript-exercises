var removeDuplicates = function (nums) {
    expectedNums = [];
    var removed = 0;
    for (i = 0; i < nums.length; i++) {
      var found = false;
      for (j = 0; j < expectedNums.length; j++) {
        if (nums[i] == expectedNums[j]) {
          found = true;
          removed += 1;
          break;
        }
      }
      if (!found) {
        expectedNums.push(nums[i]);
      }
    }
    
  
    return expectedNums;
    
  };
  
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))  