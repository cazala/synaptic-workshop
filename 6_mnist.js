var Architect = synaptic.Architect
var Trainer = synaptic.Trainer
var Network  = synaptic.Network
var Layer  = synaptic.Layer
var Neuron = synaptic.Neuron

var net = new Architect.Perceptron(24 * 24, 20, 10)
var trainer = new Trainer(net)
var set = mnist.set(1000).training;

trainer.trainAsync(set, {
    rate: 0.1,
    iterations: 10,
    log: true
})
.then(test)

function test() {

  var number = Math.random() * 10 | 0
  var input = mnist[number].get()
  var output = net.activate(input)
  var max = output.reduce((max, activation) => Math.max(max, activation), 0)
  var guess = output.indexOf(max)

  var context = document.getElementById('digit').getContext('2d')
  mnist.draw(input, context)

  node = document.getElementById('guess')
  node.classList = [guess == number ? 'yei' : 'nope']
  node.innerHTML = guess;

  setTimeout(test, 500)
}
