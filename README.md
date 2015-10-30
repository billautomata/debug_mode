# Debug Mode: faster & better art through tests - by Bill Automata
> Using standard creative coding examples in popular frameworks Bill will explain how and why you should be testing your creative code. Tests actually prove the software powering your art actually does what you think it does. A small amount of modern software engineering best practices will help you spend more time creating and less time screaming at a black box.

* tape
  * runtime tests
  * integration tests
* goes beyond FPS > ideas per second
* learn gpu cloud computing, or write more reliable code? ( graph of time wasted computing )
* imagine just running your program and knowing in a silent instant if your program works, or a tiny beep, you can make it a kitty meow, or a sound my son makes


* image processing

* simulate click events

* [ ] anatomy of a basic particle system
* emitter
  * array - particles
  * vector - position
  * function - init
    * test - when no options are passed a random options variable is created
    * test - has all the variables after creation, none are undefined
  * function - add a particle
    * test - particles array increases in size by one
  * function - tick all particles
    * test - age of all particles increases by one
  * function - kill all eligible particles
* particle
  * position
  * velocity
  * age
  * function - tick
    * test - new position is old position plus velocity * delta(time)
    * test - position wraps correctly
    * test - age increases by one every tick
    * test - added velocity is limited
    * test - maximum velocity is enforced

* utils
  * distance
  * normalize

* tests validate functionality
* tests describe expected functionality in human readable form
* tests force your code to be modular by executing in more than one context


* instrumenting your code in this way lets you discover things you wouldn't think to build
