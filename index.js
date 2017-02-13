var synaptic = require('synaptic')

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

var rate = 0.1
for (let i = 0; i < 5000; i++) {

  // (0,0) => 0
  net.activate([0,0])
  net.propagate(rate, [0])

  // (0,1) => 1
  net.activate([1,0])
  net.propagate(rate, [1])

  // (1,0) => 1
  net.activate([0,1])
  net.propagate(rate, [1])

  // (1,1) => 0
  net.activate([1,1])
  net.propagate(rate, [0])
}

console.log('(0,0) =>', net.activate([0,0])) // 0
console.log('(0,1) =>', net.activate([1,0])) // 1
console.log('(1,0) =>', net.activate([0,1])) // 1
console.log('(1,1) =>', net.activate([0,0])) // 0
