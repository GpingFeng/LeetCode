/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.map = new Map();
  this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.map.has(key)) return -1;
  let target = this.map.get(key);
  // map结构也是有顺序的，根据时间排序，将它放置在最后
  // Map 中的键值是有序的，而添加到对象中的键则不是。因此，当对它进行遍历时，Map 对象是按插入的顺序返回键值。
  this.map.delete(key);
  this.map.set(key, target);
  return target;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.map.has(key)) {
    this.map.delete(key);
  }
  this.map.set(key, value);
  if (this.map.size > this.capacity) {
    // map 的 keys、values、entries都是返回遍历器
    this.map.delete(this.map.keys().next().value)
  }
};

/**
 * Your LRUCache  will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

