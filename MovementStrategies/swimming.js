const Movement = require('./Movement')

let swimming = new Movement(function() {
  console.log('I can swim!')
})

module.exports = swimming