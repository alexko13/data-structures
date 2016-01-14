var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.counter = 0;
  someInstance.newest = 0;
  someInstance.oldest = 0;
  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {
	enqueue: function(value){
		this.storage[this.newest] = value;
		this.newest++;
		this.counter++;
	},
	dequeue: function(){
		this.counter--;
		if(this.counter < 0) {
			this.counter = 0;
		}

		var temp = this.storage[this.oldest];
		delete this.storage[this.oldest];
		this.oldest++;
		return temp;
	},
	size: function(){
		return this.counter;
	}
};