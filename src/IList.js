function IList() {};

IList.prototype.clear = function() { console.log('IList.clear'); }
IList.prototype.init = function(arr) { console.log('IList.init') }
IList.prototype.getSize = function() { console.log('IList.getSize') }
IList.prototype.toString = function() { console.log('IList.toString')};
IList.prototype.toArray = function() { console.log('IList.toArray')}
IList.prototype.push = function(value) { console.log('IList.push') }
IList.prototype.pop = function() { console.log('IList.pop') }
IList.prototype.unshift = function(value) { console.log('IList.unshift') }
IList.prototype.shift = function() { console.log('IList.shift') }
IList.prototype.slice = function(start, end) { console.log('IList.slice') }
IList.prototype.splice = function(start, number, ...elements) { console.log('IList.splice') }
IList.prototype.sort = function(callback) { console.log('IList.sort') }
IList.prototype.get = function(index) { console.log('Ilist.get') }
IList.prototype.set = function(index, value) { console.log('IList.set') };

module.exports = IList;