var DoubleLinkedList = function() {
	this.head = null;
	this.tail = null;
};

DoubleLinkedList.prototype.addToHead = function(value) {
	var newNode = Node(value);
	if(this.head === null){
		this.head = newNode;
	}
	if(this.tail === null){
		this.tail = newNode;
	}
	if(this.head){
		this.head.prev = newNode;
		newNode.next = this.head;
		this.head = newNode;
	}
};

DoubleLinkedList.prototype.removeHead = function() {
	var currentHeadPointer = this.head.next;
	var temp = this.head.value;
	delete this.head;
	this.head = currentHeadPointer;
	currentHeadPointer.prev = null;
	return temp;
};

DoubleLinkedList.prototype.addToTail = function(value) {
	var newNode = Node(value);
	if(this.head === null){
		this.head = newNode;
	}
	if(this.tail === null){ 
		this.tail = newNode;
	}
	if(this.tail){
		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
	}
};

DoubleLinkedList.prototype.removeTail = function() {
	var currentTailPointer = this.tail.prev;
	var temp = this.tail.value;
	delete this.tail;
	this.tail = currentTailPointer;
	currentTailPointer.next = null;
	return temp;
};

DoubleLinkedlist.contains = function(target){
	var currentNode = this.head;
	while(currentNode !== null) {
		if(currentNode.value === target) {
			return true;
		}
		currentNode = currentNode.next;
	}
	return false;
};

var Node = function(value){
	var node = {};

	node.value = value;
	node.next = null;
	node.prev = null;

	return node;
};