var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

//O(1) assuming even distribution and resizing
HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(!this._storage.get(i)) {
  	this._storage.set(i, []);
  }

  var bucket = this._storage.get(i);
  for(var i = 0; i < bucket.length; i++) {
  	if(bucket[i][0] === k) {
  		bucket[i][1] = v;
  		return;
  	}
  }

  bucket[bucket.length] = [k, v];
};

//O(1) assuming even distribution and resizing
HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for(var i = 0; i < bucket.length; i++) {
  	if(bucket[i][0] === k) {
  		return bucket[i][1];
  	}
  }
};

//O(1) assuming even distribution and resizing
HashTable.prototype.remove = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);
	var bucket = this._storage.get(i);

	for(var i = 0; i < bucket.length; i++) {
  	if(bucket[i][0] === k) {
  		bucket[i][1] = null;
  	}
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */