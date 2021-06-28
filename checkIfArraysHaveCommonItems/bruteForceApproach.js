const containsCommonItem = (arr1, arr2) => {
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
};

console.log(containsCommonItem(["a", "b", "c", "x"], ["z", "y", "x"]));
//should return true

console.log(containsCommonItem(["a", "b", "c", "x"], ["z", "y", "e"]));
//should return false

// This is the most obvious solution with a time complexity of O(a*b), which is not  very efficient.
