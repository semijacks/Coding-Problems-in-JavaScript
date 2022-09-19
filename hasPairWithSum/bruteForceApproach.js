const hasPairWithSum = (arr, target) => {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === target) {
        console.log(`The pair is ${arr[i]}, ${arr[j]}`);
      }
    }
  }
};

hasPairWithSum([1, 4, 5, 6, 7, 9], 16);

//This approach is not very efficient, it has a time complexity of O(a * b)
