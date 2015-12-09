## unused note lines

* When you run your program and get a segmentation fault right away or a black screen, your problem could be anything.  It could be that bug you fixed last night, how did you fix that?  Then you go searching and poking and prodding at your code but as your project gets bigger this takes longer and longer.  
* How do you know you aren't doing damage while you are fixing your code?  Once you have fixed your problem how do you know it stays fixed the next time you touch that subsystem?
* How do you try to fix things now?  What are your tools? `cout` statements printing the state at different times.
* Comments aren't enough.  If all the comments are in one place then they aren't next to the code.  If the comments are all over the code you can't actually read them.  Comments are generally terrible too.  Self-documenting code is great, but you still have to read it, comprehend it, and run it to know if it works correctly.
* Real world examples:
  * Problems with the asset loader can look like problems with a scene renderer.  Is that image not there because it never loaded or because it was never drawn?
  * A black screen could be your shader code not loading from disk or you aren't initializing a uniform variable that the final color depends on being multiplied against - so it is all zero.
* Tests will help you with these problems. Unit tests specifically.  

### what is the problem?
* you can't know if your code works, this should bother you - doubly so if you are selling it
* clicking around to confirm things doesn't prove anything, it's anecdotal at best and always a waste of time

### why should you spend time writing tests?
* isolation - your code is running in isolated chunks that means it CAN do that
* organization - you can't test poorly organized code, it is self enforcing
* reuse - isolated and well organized code ends up being reused, the most efficient building is the one already standing
* trust - you can let someone who doesn't really know the whole codebase make changes, that person is often you
* knowledge - tests go beyond testing functionality, they describe expected functionality for code in a way that comments cannot.  Comments can be silently incorrect, if the test is incorrect it fails.  Failing tests are loud.
* leveling up - I get the question: how do I go from beginner > intermediate?

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

### misc notes
* difference between runtime tests and integration tests

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
* chart of time spent during development, writing code, designing code, rewriting code, hand testing code, hunting down bugs -



* bug tests
  * if the value you assign to an attr() is undefined, it fails silently attr('cx', undefined) never sets the attr() 'cx'
  * floating point spec (0.2 + 0.1 === 0.3)
  * array overflow errors

## part 3 - conclusion

If you do the work to make sure your code is testable, you can expect the code to be correctly organized and highly extensible.  Good code is verifiable to work.
