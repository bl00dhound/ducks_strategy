const Duck = require('./Duck');
const flying = require('./MovementStrategies/flying')
const running = require('./MovementStrategies/running')
const swimming = require('./MovementStrategies/swimming')
const silent = require('./QuackStrategies/silent')
const noise = require('./QuackStrategies/noise')

let donald = new Duck() 

donald.setMovementType(swimming)
donald.setQuackingType(noise)

donald.quack();
donald.move();
