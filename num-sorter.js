const Queue = require('./queue.js');

class NumSorter {
    constructor(maxNums) {
        this.maxNums = maxNums;
        this.allowedNums = {};
        this.numList = new Queue();
        this.count = 0;
    }

    // Add a number to the list of allowed numbers
    // Should not have any duplicates in allowedNums
    addAllowedNum(num) {
        if (!this.allowedNums[num]) {
            this.allowedNums[num] = true;
        }
        // console.log(this.allowedNums)
    }

    // Returns the count of nums in numList
    numCount() {
        return this.count;
    }

    // Returns true if the number is allowed, false otherwise
    isNumAllowed(num) {
        return this.allowedNums[num];
    }

    // Build a numlist of integers from 0 to amount.
    // Only include allowed numbers
    buildNumList(amount) {

        this.numList = new Queue();

        for (let i = 0; i <= amount; i++) {
            if (this.isNumAllowed(i)) {
                this.numList.enqueue(i);
                this.count++;
            }
        }
    }

    // Remove and return the first number in the numList
    // If numList is empty, return undefined
    getFirstNum() {
        this.count--;
        const val = this.numList.dequeue();
        // console.log(val);
        return val;
    }

    // Add a new number to the back of the numList
    addNumToBack(num) {
        if (this.isNumAllowed(num)) {
            this.numList.enqueue(num);
            this.count++;
        }
    }

}

module.exports = NumSorter;
