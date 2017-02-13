var synaptic = require('synaptic')

var Architect = synaptic.Architect
var Trainer = synaptic.Trainer
var Network  = synaptic.Network
var Layer  = synaptic.Layer
var Neuron = synaptic.Neuron

var net = new Architect.Perceptron(2,4,1)
var trainer = new Trainer(net)

var set = [
  {
    input: [0, 0],
    output: [0]
  },
  {
    input: [1, 0],
    output: [1]
  },
  {
    input: [0, 1],
    output: [1]
  },
  {
    input: [1, 1],
    output: [0]
  }
]

trainer.train(set, {
  rate: 0.1,
  iterations: 5000,
  error: 0.0001
})

console.log('(0,0) =>', net.activate([0,0])) // 0
console.log('(0,1) =>', net.activate([1,0])) // 1
console.log('(1,0) =>', net.activate([0,1])) // 1
console.log('(1,1) =>', net.activate([0,0])) // 0
