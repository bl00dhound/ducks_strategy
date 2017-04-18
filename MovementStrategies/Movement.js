const Movement = function(func) {
  this.move = func
}

Movement.prototype.execute = function() {
  this.move()
}

module.exports = Movement
