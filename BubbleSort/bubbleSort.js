let mixArr = [7, 5, 8, 6, 1, 9];

function swap(mixArr, i, j) {
    let temp = mixArr[i];
    mixArr[i] = mixArr[j];
    mixArr[j] = temp;
  }

function bubbleSort(mixArr) {
    let swapped;
    do {
        swapped = null;
      for(var i = 0; i < mixArr.length; i++) {
        if (mixArr[i] > mixArr[i + 1] && mixArr[i + 1] !== null) {
          swap(mixArr, i, i + 1);
          swapped = true;
        }
      }
    } while(swapped);
    return mixArr;
  }

  console.log(bubbleSort(mixArr));