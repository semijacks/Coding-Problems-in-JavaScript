const hasPairWithSum = (arr, target) => {
  const len = arr.length;
  const mySet = new Set();

  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      console.log(`The pair is ${target - arr[i]}, ${arr[i]}`);
    }
    mySet.add(target - arr[i]);
  }
};

hasPairWithSum([1, 4, 5, 6, 7, 9], 16);
