/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    low = 1;
    high = n
    
    while(low <= high){
        pick = low + (high - low) / 2;
        
        if (guess(pick) === 0){
            return pick
        }else if(guess(pick) === -1){
            high = pick; 
        }else if(guess(pick) === 1){
            low = pick;
        }
        else{
            return -1
        }
    }
};