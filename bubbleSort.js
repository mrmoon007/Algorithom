function bubbleSort(arr) {
    let temp,length=arr.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length-i-1; j++) {
            if (arr[j]< arr[j+1]) {
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp
            }
            
        }
        
    }
   return arr; 
}

let array = [10,7,2,9,-1,14,3,6,4];
let sortArray = bubbleSort(m);
console.log(sortArray
    );