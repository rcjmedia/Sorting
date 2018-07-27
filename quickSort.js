var mix = [3, 6, 1, 8, 2, 4, 9, 5, 7];

function quickSort(arr){
  let pivot = arr[0];
  let left = [];
  let right = [];
  
  if(arr.length < 2){
    return arr;
  }
  else{
    
     for(let i = 1; i< arr.length; i++){
      if(arr[i] <= pivot){
        left.push(arr[i]);
      }else{
        right.push(arr[i]);
      }
     }
  }
      return quickSort(left).concat(pivot, quickSort(right));  

}
console.log(quickSort(mix));
