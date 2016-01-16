var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(!this._storage.get(i)) {
  	this._storage.set(i, {});
  }
  var bucket = this._storage.get(i);
  bucket[k] = v;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i)[k];
};

HashTable.prototype.remove = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);
	var bucket = this._storage.get(i);
	delete bucket[k];
	//Replace line above with bucket[k] = null;
	//to pass old spec where expect(hashTable.retrieve('Steven')).to.equal(null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */