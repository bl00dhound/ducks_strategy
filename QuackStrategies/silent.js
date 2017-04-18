const Quacking = require('./Quacking')

let silent = new Quacking(function() {
  console.log('quack-quack')
})

module.exports = silent