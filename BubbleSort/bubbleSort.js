// var mix = [3, 6, 1, 8, 2, 4, 9, 5, 7];

// function quickSort(arr){
//   let pivot = arr[0];
//   let left = [];
//   let right = [];
  
//   if(arr.length < 2){
//     return arr;
//   }
//   else{
    
//      for(let i = 1; i< arr.length; i++){
//       if(arr[i] <= pivot){
//         left.push(arr[i]);
//       }else{
//         right.push(arr[i]);
//       }
//      }
//   }
//       return quickSort(left).concat(pivot, quickSort(right));  

// }
// console.log(quickSort(mix));

// var mix = [3, 6, 1, 8, 2, 4, 9, 5, 7];

// function quickSort1(array) {
//   function quickSort2(array, left, right) {
//     var i = left;
//     var j = right;
//     var pivot = array[Math.floor((left+right)/2)];
//     //dividing it by two then round to the closest num and count the index.

//     while (i <= j) {
//       while (array[i] < pivot) i++;
//       while (array[j] > pivot) j--;

//       if (i <= j) {
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//         i++;
//         j--;
//       }
//     }
//     if (left < j) quickSort2(array, left, j);
//     if (i < right) quickSort2(array, i, right);
//     return array;
//   }
//   return quickSort2(array, 0, array.length-1);  
// }
// console.log(quickSort1(mix));