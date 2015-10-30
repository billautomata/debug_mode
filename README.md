# WIP

# Debug Mode: faster & better art through tests - by Bill Automata
> Using standard creative coding examples in popular frameworks Bill will explain how and why you should be testing your creative code. Tests actually prove the software powering your art actually does what you think it does. A small amount of modern software engineering best practices will help you spend more time creating and less time screaming at a black box.

### slide ideas

This is a talk about side-effects, good and bad.  Cause and effect, you do something and things happen.  Computers do billions of things a second.  When side-effects compound at this rate it becomes too difficult to resolve that relationship.  

Run your program and get a segmentation fault right away or a black screen a little too soon, could be anything.  It could be that thing you fixed last night, how did you fix that?  Then you go searching and poking and prodding at your code but as your project gets bigger this takes longer and longer.  How do you know you aren't doing damage while trying to fix this?  Once you have fixed your problem how do you know it stays fixed?  That part of your code worked just fine a minute ago, and now it is broken.  Some other system is causing a bad side-effect down the chain.  

Comments aren't enough.  If all the comments are in one place then they aren't next to the code.  If the comments are all over the code you can't actually read them.  Comments are terrible too.  Self-documenting code is great, but you still have to read it.

Problems with the asset loader can look like problems with an asset renderer.  A black screen could be your shader code not loading from disk or you aren't initializing a uniform variable that the final color depends on being multiplied against - so it is all zero.

There is a solution, it's called: tests.  Unit tests specifically.  What is a unit?  If we were testing the javascript `split()` function we would write a test that looks like:
```javascript

// split returns an array
var string_to_test = 'zomglol'

var result_of_test = string_to_test.split('g')

if(result_of_test[0] === 'zom' && result_of_test[1] === 'lol'){
  console.log('test passed!')
} else {
  console.log('test failed!')
}
```

### what is the problem?
* you can't know if your code works, this should bother you - doubly so if you are selling it
* clicking around to confirm things doesn't prove anything, it's anecdotal at best and always a waste of time

### why should you spend time solving it?
* this is about investing in your work
* isolation - your code is running in isolated chunks that means it CAN do that
* organization - you can't test poorly organized code, it is self enforcing
* reuse - isolated and well organized code ends up being reused, the most efficient building is the one already standing
* trust - you can let someone who doesn't really know the whole codebase make changes, that person is often you
* knowledge - tests go beyond testing functionality, they describe expected functionality for code

### how do you solve it
* vector math operations need to be confirmed
  * bad - math is hard, use http://wolframalpha.com to confirm your test cases
  * all the math operations need to be isolated to their own object that can now be shared, shared implementations mean that future optimizations bubble up
* variable initialization needs to be confirmed
  * bad - a silent runtime bug that has nasty ramifications 1/undefined = NaN
* are all of your assets present? did they load?
  * good - list of your assets
  * good -
* DOM object creation can be confirmed, query sizes
* Events response, fake clicks

### misc notes
* tape
  * runtime tests
  * integration tests
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

* vector
  * initialization
  * set()
  * add()
  * addv()
  * mult()
  * distance()
  * distancev()
  * normalize()

* tests validate functionality
* tests describe expected functionality in human readable form
* tests force your code to be modular by executing in more than one context


* instrumenting your code in this way lets you discover things you wouldn't think to build
