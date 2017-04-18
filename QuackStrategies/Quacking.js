const Quacking = function(func) {
  this.quack = func
}

Quacking.prototype.execute = function() {
  this.quack()
}

module.exports = Quacking