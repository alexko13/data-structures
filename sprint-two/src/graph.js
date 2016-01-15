

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
	this.storage = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
//O(1)
Graph.prototype.addNode = function(node){
	this.storage[node] = [];
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
//O(1)
Graph.prototype.contains = function(node){
	return this.storage.hasOwnProperty(node);
};

// ------------------------
// Removes a node from the graph.
//O(1)
Graph.prototype.removeNode = function(node){
	delete this.storage[node];
};


// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
//O(n)
Graph.prototype.hasEdge = function(fromNode, toNode){
	for(var i = 0; i < this.storage[fromNode].length; i++) {
		if(this.storage[fromNode][i] === toNode) {
			return true;
		}
	}
	return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
//O(1)
Graph.prototype.addEdge = function(fromNode, toNode){
	this.storage[fromNode].push(toNode);
	this.storage[toNode].push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
//O(n^2)
Graph.prototype.removeEdge = function(fromNode, toNode){
	for(var i = 0; this.storage[fromNode].length; i++) {
		if(this.storage[fromNode][i] === toNode) {
			this.storage[fromNode].splice(i, 1);
		}
	}
	for(var i = 0; this.storage[toNode].length; i++) {
		if(this.storage[toNode][i] === fromNode) {
			this.storage[toNode].splice(i, 1);
		}
	}
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
//O(n)
Graph.prototype.forEachNode = function(cb){
	for(var key in this.storage) {
		cb(key);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



