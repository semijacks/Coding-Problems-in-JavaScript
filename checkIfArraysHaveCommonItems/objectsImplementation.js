const containsCommonItem = (arr1, arr2) => {
  // loop through first array and create object where properties === items in the array
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }

  //loop through second array and check if items in second array exist in created object
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }

  return false;
};

console.log(containsCommonItem(["x", "y", "z"], ["a", "b", "e"]));
//should return false

console.log(containsCommonItem(["x", "y", "z"], ["a", "b", "z"]));
//should return true

//This approach is much more efficient with a time complexity of O(a + b), this is better than the approach in bruteForceApproach.js

//To clean up the above code, we can use a built in javascript method

const containsCommonItems2 = (arr1, arr2) => {
  console.log(arr1.some((item) => arr2.includes(item)));
};

containsCommonItems2(["x", "y", "z"], ["a", "b", "z"]);
