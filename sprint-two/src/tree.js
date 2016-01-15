var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.children = [];  // fix me

  return newTree;
};





var treeMethods = {};

//O(1)
treeMethods.addChild = function(value){
	this.children.push(Tree(value));
};

//O(n^2)
treeMethods.contains = function(target){
	if(this.value === target){
		return true;
	}

	if(this.children.length > 0) {
		for(var i = 0; i < this.children.length; i++) {
			var wasFound = this.children[i].contains(target);
			if(wasFound) {
				return wasFound;
			}
		}
	}

	return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
