let mixArr = [7, 8, 3, 10, 4, 6, 11, 5];

function selectionSort(arr) {
  // console.log(arr);

  let minArr = 0;
  let leftArr = 0;
  let saveMinIndex = 0;

  for (let j = 0; j < arr.length; j++) {
    leftArr = arr[j];
    minArr = leftArr;
    saveMinIndex = j;

    for (let i = j; i < arr.length; i++) {
      if (minArr >= arr[i + 1]) {
        minArr = arr[i + 1];
        saveMinIndex = i + 1;
      }
    }

    arr[saveMinIndex] = leftArr;
    arr[j] = minArr;

    // console.log(arr);
  }
  return arr;
}

console.log(selectionSort(mixArr));