const Movement = require('./Movement')

let flying = new Movement(function() {
  console.log('I can fly!')
})

module.exports = flying
