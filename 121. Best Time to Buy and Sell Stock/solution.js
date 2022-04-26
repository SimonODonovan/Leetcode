/*
You are given an array prices where prices[i] is the 
price of a given stock on the ith day.

You want to maximize your profit by choosing a single 
day to buy one stock and choosing a different day in 
the future to sell that stock.

Return the maximum profit you can achieve from this 
transaction. If you cannot achieve any profit, return 0.

https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = 0;
    let loDay = Infinity;
    for(let price of prices) {
        if(price<loDay) {
            loDay = price;
        } else {
            if(maxProfit < price-loDay) {
                maxProfit = price-loDay;
            }
        }
    }
    return maxProfit;
};

const input = [7, 1, 5, 3, 6, 4];
const result = maxProfit(input);
console.log(result);