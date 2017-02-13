var synaptic = require('synaptic')

var Layer  = synaptic.Layer
var Neuron = synaptic.Neuron

var A = new Layer(2)
var B = new Layer(1)

A.project(B)

var rate = 0.1
for (let i = 0; i < 5000; i++) {

  // (0,0) => 0
  A.activate([0,0])
  B.activate()
  B.propagate(rate, [0])
  A.propagate(rate)

  // (0,1) => 0
  A.activate([0,1])
  B.activate()
  B.propagate(rate, [0])
  A.propagate(rate)

  // (1,0) => 0
  A.activate([1,0])
  B.activate()
  B.propagate(rate, [0])
  A.propagate(rate)

  // (1,1) => 1
  A.activate([1,1])
  B.activate()
  B.propagate(rate, [1])
  A.propagate(rate)
}

A.activate([0,0])
console.log('(0,0) =>', B.activate()) // 0

A.activate([0,1])
console.log('(0,1) =>', B.activate()) // 0

A.activate([1,0])
console.log('(1,0) =>', B.activate()) // 0

A.activate([1,1])
console.log('(1,1) =>', B.activate()) // 1
