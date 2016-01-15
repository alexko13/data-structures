var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.newest = 0;
  this.oldest = 0;
  this.count = 0;
};

Queue.prototype.enqueue = function(value){
	this.storage[this.newest] = value;
	this.newest++;
	this.count++;
};
Queue.prototype.dequeue = function(){
	this.count--;
	if(this.count < 0){
		this.count = 0;
	}
	var temp = this.storage[this.oldest];
	delete this.storage[this.oldest];
	this.oldest++;
	return temp;
};
Queue.prototype.size = function(){
	return this.count;
};

