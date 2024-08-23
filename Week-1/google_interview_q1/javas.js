const array1 = [4, 1, 2, 4];
const array2 = [1, 2, 3, 9];
 
const summ = 8;

function checkSum(arr, sum){
    //So we will check if the compliment exist in a set which consists of all element before that element 
    // which we looper over.
    // if not then we increase or decrease our index. And we will make a set to store the compliment value
    
    // So first we will see if the element exist in the set
    const setOfNumbers = new Set();

    for (let i = 0; i < arr.length; i++){
        const compliment = sum - arr[i];
        if (setOfNumbers.has(arr[i])){
            return true;
        }
        // Then we add the compliment in our set
        else{
            setOfNumbers.add(compliment);
        }
    }
    return false;
}

// [3, 5, 6, 7, 8, ]

console.log(checkSum([6,4,3,2,1,7], 9));