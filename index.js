var synaptic = require('synaptic')

var Neuron = synaptic.Neuron

var A = new Neuron(2)
var B = new Neuron(1)

A.project(B)

var rate = 0.1
for (let i = 0; i < 5000; i++) {
  // 0 => 1
  A.activate(0)
  B.activate()
  B.propagate(rate, 1)
  A.propagate(rate)
}

A.activate(0)
console.log(B.activate())
