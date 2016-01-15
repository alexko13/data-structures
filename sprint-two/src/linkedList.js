var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  //O(1)
  list.addToTail = function(value){
    var newNode = Node(value);
    if(list.head === null){
      list.head = newNode;
    }
    if(list.tail === null){
      list.tail = newNode;
    }
    if(list.tail){
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  //O(1)
  list.removeHead = function(){
    var currentHeadPointer = list.head.next;
    var temp = list.head.value;
    delete list.head;
    list.head = currentHeadPointer;
    return temp;
  };

  //O(n)
  list.contains = function(target){
    var currentNode = list.head;
    while(currentNode !== null) {
      if(currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
