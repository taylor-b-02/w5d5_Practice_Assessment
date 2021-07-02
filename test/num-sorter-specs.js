const { expect } = require('chai');

const NumSorter = require('../num-sorter.js');

describe('NumSorter', function () {

    // The performance expectations for this assessment are measured
    // relative to this benchmark. It runs in ~900ms on an Intel
    // MacBook Pro. This system accounts for differences in processor
    // speed.
    let benchmark = 0;

    before(function () {
        let startTime = Date.now();

        // Fill an array with 100000 values
        const arr = [];
        for (let i = 0; i < 100000; i++) {
            arr.unshift(i);
        }

        benchmark = Date.now() - startTime;
        console.log(`\nBENCHMARK time is: ${benchmark}ms`);
    });


    tests = [{ n: 10000, backVals: 10000 },
    { n: 20000, backVals: 20000 },
    { n: 30000, backVals: 30000 },
    { n: 40000, backVals: 40000 },
    { n: 50000, backVals: 50000 },
    { n: 60000, backVals: 60000 },
    { n: 70000, backVals: 70000 },
    { n: 80000, backVals: 80000 },
    { n: 90000, backVals: 90000 },
    { n: 100000, backVals: 100000 },
    ]


    for (let i = 0; i < tests.length; i++) {
        let n = tests[i].n;
        let backVals = tests[i].backVals;

        // The value of one second is represented by the benchmark in the `before` block.
        // Your tests should complete faster than the benchmark loop, regardless of your
        // processor speed.
        it(`Registers ${n} even numbers, adds ${backVals} to back, in under one second`, function () {

            timeout = benchmark * 1.5;  // 50% timing buffer allowed

            // Check for correct logic
            const numLogic = numSorterLogic();
            if (!numLogic) {
                console.log("Incorrect num logic");
            }
            expect(numLogic).to.be.true;

            // Timing performance test
            const registerTime = processNumsTiming(n, backVals, timeout);

            expect(registerTime).to.be.true;
        });




    }

}).timeout(100);


function numSorterLogic() {

    let numSorter = new NumSorter();

    if (numSorter.numCount() !== 0) return false;

    numSorter.addAllowedNum(1);
    numSorter.buildNumList(2);

    if (numSorter.numCount() !== 1) return false;

    numSorter.addAllowedNum(2);

    numSorter.addNumToBack(2);

    if (numSorter.getFirstNum() !== 1) return false;
    if (numSorter.getFirstNum() !== 2) return false;

    return true;

}


// Process nums, return false if it times out, true otherwise
function processNumsTiming(n, backVals, timeout) {

    startTime = Date.now();

    // Create the numSorter
    const numSorter = new NumSorter();

    // Add even numbers 0 through n to allowed list
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) numSorter.addAllowedNum(i);
        if (!checkTimeout(startTime, timeout)) return false  // Break if timing out
    }

    // Build num list 0 through n
    numSorter.buildNumList(n);

    if (!checkTimeout(startTime, timeout)) return false  // Break if timing out

    numCount = Math.floor(n / 2) + 1;
    expect(numSorter.numCount()).to.equal(numCount);


    // Add many -2 values to the back
    for (let i = 0; i < backVals; i++) {
        // not allowed yet
        numSorter.addNumToBack(-2);
        if (!checkTimeout(startTime, timeout)) return false  // Break if timing out
    }

    // No nums should be added
    expect(numSorter.numCount()).to.equal(numCount);

    // Now they are allowed
    numSorter.addAllowedNum(-2);

    for (let i = 0; i < backVals; i++) {
        numSorter.addNumToBack(-2);
        if (!checkTimeout(startTime, timeout)) return false  // Break if timing out
    }

    // Check that nums have been added and back
    let totalCount = numCount + backVals;

    expect(numSorter.numCount()).to.equal(totalCount)

    // Check that values are correct
    for (let i = 0; i < totalCount; i++) {
        num = numSorter.getFirstNum();
        if (!checkTimeout(startTime, timeout)) return false  // Break if timing out
        if (i < numCount) {
            // Middle nums should be even nums from 0 through n
            expect(num).to.equal(i * 2);
        } else {
            // Back nums should all equal -2
            expect(num).to.equal(-2);
        }
    }

    return true;
}


function checkTimeout(startTime, timeout) {
    if (Date.now() - startTime > timeout) {  // Timeout is 1.5x the benchmark time
        console.log(`Timeout reached`);
        return false;
    }
    return true;

}
