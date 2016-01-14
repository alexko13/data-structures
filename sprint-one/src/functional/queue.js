var Queue = function(){
  var someInstance = {};
  var counter = 0;
  var newest = 0;
  var oldest = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[newest] = value;
    newest++;
    counter++;

  };

  someInstance.dequeue = function(){
    counter--;
    if(counter < 0) {
      counter = 0;
    }

    var temp = storage[oldest];
    delete storage[oldest];
    oldest++;
    return temp;
    
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};
