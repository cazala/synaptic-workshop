var synaptic = require('synaptic')

var Trainer = synaptic.Trainer
var Network  = synaptic.Network
var Layer  = synaptic.Layer
var Neuron = synaptic.Neuron

var input = new Layer(2)
var hidden = new Layer(4)
var output = new Layer(1)

input.project(hidden)
hidden.project(output)

var net = new Network({
  input: input,
  hidden: [hidden],
  output: output
})

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
