const Quacking = require('./Quacking')

let noise = new Quacking( function () {
  console.log('QUACK-QUACK!!!')
})

module.exports = noise