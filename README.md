# Week 5 practice assessment

Here is a problem that will test your understanding of data structures and
time complexity. In particular, you will need to identify instances of `O(n)`
operations and optimize them to be `O(1)`.

## Number sorter

You are given a class called `NumSorter` which stores an ordered list of
numbers, and a collection of allowed numbers. You can add allowed numbers to
the list, and retrieve them in the order they were added. You cannot add a
number to the list that is not allowed.

* `addAllowedNum(num)` adds a number to the "allowed" list
* `buildNumList(n)` takes in a number, `n` and adds all allowed numbers from 0-n to the list in order.
* `addNumToBack(num)` adds a number to the back of the number list
* `getFirstNum()` removes and returns the first number in the number list
* `isNumAllowed(num)` returns true if the number is in the allowed list
* `numCount()` returns the amount of numbers in the number list

## Directions

* Install packages using `npm install`
* Run tests using `npm test`

Your task is to optimize the code until all 10 timing tests are passing. The
performance is normalized with a speed benchmark so the tests should run
similarly regardless of the speed of your computer.

You must optimize without changing the logic of the `NumSorter`. If you see a
`Incorrect num logic` message when your spec fails, it means you have broken
the the logic. You must fix this before performance tests will run.

You are allowed to access any code or classes you have implemented this week
for the assessment.

## Tips

You may find the test specs difficult to read. Don't worry too much about
fully understanding the specs. Instead, focus on scouring the code for areas
of optimization. Nearly every method in the `NumSorter` can be optimized.

You may find it easier to start from the `NumSorter` code, identify all O(n)
operations and optimize them using the appropriate data structures rather than
trying to understand how the test specs are working.

You will need to increase the code performance by roughly 10000 times to pass
all tests. If you fail one test and don't want to wait for the rest to finish,
hit `CTRL + C` to cancel mocha.

