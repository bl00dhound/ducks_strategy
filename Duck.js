function Duck() {}

Duck.prototype.setMovementType = function(movement) {
  this.movement = movement;
}

Duck.prototype.setQuackingType = function(quacking) {
  this.quacking = quacking;
}

Duck.prototype.move = function() {
  this.movement.execute();
}

Duck.prototype.quack = function() {
  this.quacking.execute();
}

module.exports = Duck
