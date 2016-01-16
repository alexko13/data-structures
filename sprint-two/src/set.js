var Set = function(){
  var set = Object.create(setPrototype);
  set.storage = {};
  return set;
};

var setPrototype = {};

//O(1)
setPrototype.add = function(item){
  if(!this.storage[item]){
    this.storage[item] = item;
  }
};

//O(1)
setPrototype.contains = function(item){
	return this.storage.hasOwnProperty(item);
};

//O(1)
setPrototype.remove = function(item){
  if(this.storage[item]){
	  delete this.storage[item];
  }
};

/*
 */
