const Movement = require('./Movement')

let running = new Movement(function() {
  console.log('I can run!')
})

module.exports = running
