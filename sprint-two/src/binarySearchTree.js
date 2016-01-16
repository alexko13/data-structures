var BinarySearchTree = function(value){
	var obj = Object.create(BinarySearchTree.prototype);
	obj.value = value;
	obj.left;
	obj.right;
	return obj;
};

BinarySearchTree.prototype.insert = function(value){
	if(this.value > value){
		if(!this.left) {
			this.left = BinarySearchTree(value);
		} else {
			this.left.insert(value);
		}
	} else {
		if(!this.right) {
			this.right = BinarySearchTree(value);
		} else {
			this.right.insert(value);
		}
	}
};

BinarySearchTree.prototype.contains = function(target){
	if(this.value === target){
		return true;
	} else{
		if(target < this.value && this.left){
			return this.left.contains(target);
		} else if(this.right) {
			return this.right.contains(target);
		}
	}

	return false;
};

BinarySearchTree.prototype.depthFirstLog = function(callBack){
	callBack(this.value);
	if(this.left){
		this.left.depthFirstLog(callBack);
	}
	if(this.right){
		this.right.depthFirstLog(callBack);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
