'use strict';

const memo = new Map();
const length = 40;
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);

/**
 * トリボナッチ数列を出力する
 * @param {int} n 
 * @returns {int} value
 */
function fib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = fib(n - 1) + fib(n - 2) + fib(n - 3);
    memo.set(n, value);
    return value;
}

for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}