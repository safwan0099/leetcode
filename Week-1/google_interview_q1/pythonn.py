array1 = [4, 1, 2, 4]
array2 = [1, 2, 3, 9]
 
summ = 8

def checkSum(arr, sum):
    # So we are going to loop over the array and store the compliment of each value by substracting with
    # our summation and then we will check if the compliment exist in the array.

    set_of_number = set()

    for i in range(len(arr)):
        compliment = sum - arr[i]
        if ((arr[i] in set_of_number)):
            return True
        else:
            set_of_number.add(compliment)

    return False

print(checkSum([6,4,3,2,1,7], 9))
