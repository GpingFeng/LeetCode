/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.queue = [];
  // 栈顶永远是最小的
  this.minQueue = [Infinity];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (x < this.minQueue[this.minQueue.length - 1]) {
    this.minQueue.push(x);
  } else {
    this.minQueue.push(this.minQueue[this.minQueue.length - 1]);
  }
  this.queue.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.queue.pop();
  this.minQueue.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.queue[this.queue.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minQueue[this.minQueue.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

