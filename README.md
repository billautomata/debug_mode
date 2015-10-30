# WIP

# Debug Mode
### faster & better art through tests
> for a PDX Creative Coders meetup talk, by @billautomata
>
> Using standard creative coding examples in popular frameworks Bill will explain how and why you should be testing your creative code. Tests actually prove the software powering your art actually does what you think it does. A small amount of modern software engineering best practices will help you spend more time creating and less time screaming at a black box.

### slides outline

## part 1 - theory

* This is a talk about side-effects, good and bad.  It is also a talk about  leveling up.
* Computers do billions of things a second.  When side-effects compound at this rate it becomes too difficult to resolve any cause > effect relationships.
* When you run your program and get a segmentation fault right away or a black screen, your problem could be anything.  It could be that bug you fixed last night, how did you fix that?  Then you go searching and poking and prodding at your code but as your project gets bigger this takes longer and longer.  
* How do you know you aren't doing damage while you are fixing your code?  Once you have fixed your problem how do you know it stays fixed the next time you touch that subsystem?
* How do you try to fix things now?  What are your tools without tests? `cout` statements printing the state at different times.
* Comments aren't enough.  If all the comments are in one place then they aren't next to the code.  If the comments are all over the code you can't actually read them.  Comments are generally terrible too.  Self-documenting code is great, but you still have to read it, comprehend it, and run it to know if it works correctly.
* Real world examples:
  * Problems with the asset loader can look like problems with a scene renderer.  Is that image not there because it never loaded or because it was never drawn?
  * A black screen could be your shader code not loading from disk or you aren't initializing a uniform variable that the final color depends on being multiplied against - so it is all zero.
* Tests will help you with these problems. Unit tests specifically.  
* What is a Unit and how do you test it?  If we were testing the javascript `split()` function we would write a test that looks like:
    ```javascript
    // split returns an array
    var string_to_test = 'zomglol'

    var result_of_function = string_to_test.split('g')

    if(result_of_test[0] === 'zom' && result_of_test[1] === 'lol'){
      console.log('test passed!')
    } else {
      console.log('test failed!')
    }
    ```

## part 2 - applied

### what is the problem?
* you can't know if your code works, this should bother you - doubly so if you are selling it
* clicking around to confirm things doesn't prove anything, it's anecdotal at best and always a waste of time

### why should you spend time writing tests?
* isolation - your code is running in isolated chunks that means it CAN do that
* organization - you can't test poorly organized code, it is self enforcing
* reuse - isolated and well organized code ends up being reused, the most efficient building is the one already standing
* trust - you can let someone who doesn't really know the whole codebase make changes, that person is often you
* knowledge - tests go beyond testing functionality, they describe expected functionality for code in a way that comments cannot.  Comments can be silently incorrect, if the test is incorrect it fails.  Failing tests are loud.
* leveling up - I get the question: how do I go from beginner > intermediate?  Writing tests

### how do you write tests
* use `tape`
    ```javascript
    var test = require('tape')

    test('String.split', function(t){
      t.plan(5)
      
      var string_to_test = 'zomglol'
      var result_of_function = string_to_test.split('g')
      t.equals(result_of_function[0], 'zom the first element')
      t.equals(result_of_function[1], 'lol the second element')
      t.equals(result_of_function.length, 2, 'correct number of elements returned')

      var another_to_test = 'portland'
      var another_result = another_to_test.split('z') // shouldn't split
      t.equals(another_result.length, 1, 'no split happens')
      t.equals(another_result[0], 'portland')      
    })
    ```
* vector math operations need to be confirmed
  * bad - math is hard, use http://wolframalpha.com to confirm your test cases
  * all the math operations need to be isolated to their own object that can now be shared, shared implementations mean that future optimizations bubble up
* variable initialization needs to be confirmed
  * bad - a silent runtime bug that has nasty ramifications 1/undefined = NaN
* are all of your assets present? did they load?
  * good - list of your assets
* DOM object creation can be confirmed, query sizes
* Events response, fake clicks
* each bug gets a test
* <img> load events

### misc notes
* using tape, string split example
* difference between runtime tests and integration tests
* image processing tests

### anatomy of a basic particle system & emitter + vectors
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
  * vector - position
  * vector - velocity
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
  * clamp()

* tests validate functionality
* tests describe expected functionality in human readable form
* tests force your code to be modular by executing in more than one context

* instrumenting your code in this way lets you discover things you wouldn't think to build

* revealing module pattern
* test driven development
