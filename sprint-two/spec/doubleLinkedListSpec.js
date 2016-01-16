describe('doubleLinkedList', function () {
  var list;

  beforeEach(function () {
    list = new DoubleLinkedList();
  });

  it('should have a head and tail', function() {
    expect(list).to.have.property("head");
    expect(list).to.have.property("tail");
  });

  it('should have methods named "addToHead", "removeTail"', function () {
    expect(list.addToHead).to.be.a('function');
    expect(list.removeTail).to.be.a('function');
  });

  it('should designate a new head when new nodes are added', function () {
    list.addToHead(3);
    expect(list.head.value).to.equal(3);
    list.addToHead(7);
    expect(list.head.value).to.equal(7);
  });

  it('should remove tail node', function () {
    list.addToHead(3);
    list.addToHead(4);
    expect(list.removeTail()).to.equal(3);
    expect(list.tail.value).to.equal(4);
  });

});