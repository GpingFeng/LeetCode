/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
// new 的时候根据缓存长度生成结果
// len 是目前的长度
// resultKeys 是存储目前有哪些key值，顺序就是存储的顺序
var LRUCache = function(capacity) {
  this.resultKeys = [];
  this.len = capacity;
  this.map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
// 假如存在，则取出。否则返回 -1
// 存在的话，要更新顺序
LRUCache.prototype.get = function(key) {
  let findIndex = this.resultKeys.indexOf(key);
  if (findIndex !== -1) {
    this.resultKeys.splice(findIndex, 1);
    this.resultKeys.push(key);
    return this.map.get(key);
  } else {
    return -1;
  }
  
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
// 如果存在，则更新数据
// 否则插入该组「关键字-值」
// 判断是否超出，如果废弃数组最开始的【shift】并push 最新的
LRUCache.prototype.put = function(key, value) {
  let findIndex = this.resultKeys.indexOf(key);
  if (findIndex !== -1) {
    this.map.set(key, value);
    this.resultKeys.splice(findIndex, 1);
    this.resultKeys.push(key);
    // 超出长度
  } else if (this.resultKeys.length === this.len) {
    this.resultKeys.shift();
    this.resultKeys.push(key);
    this.map.set(key, value);
    // 不超出长度
  } else {
    this.resultKeys.push(key);
    this.map.set(key, value);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

