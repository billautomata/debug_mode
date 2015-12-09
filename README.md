# WIP

# Debug Mode
### faster & better art through tests
> for a PDX Creative Coders meetup talk, by @billautomata
>
> Using standard creative coding examples in popular frameworks Bill will explain how and why you should be testing your creative code. Tests actually prove the software powering your art actually does what you think it does. A small amount of modern software engineering best practices will help you spend more time creating and less time screaming at a black box.

### slides outline

## part 1 - history

`slide 1`
* intro

`slide 2`
* In the early 20th century math was undergoing a crisis[1](https://en.wikipedia.org/wiki/Foundations_of_mathematics#Foundational_crisis).  

`slide 3`
* Math suffers from philosophy.
* There are schools of mathematicians: Euclidian, Platonist, Newtonian.  More recently schools of formalism, intiutionism, logicism formed.

`slide 4`
* Thinking logically is just one style of thinking.  Math is not universal.  Your math is internally consistent when you follow the rules.
* You can live your whole life never being logical and probably be just fine.  
* You can just try random things until they work and memorize the working solutions (formalism).  You can feel your way through situations and adjust your expectations when you arrive at different outcomes.

`slide 5`
* The only thing that truly matters is how you react to and interpret the universe.  Things are flexible.  We decide consciously to think a certain way because it has worked for us before, or we see it working for others and we want it to work the same way for us.

`slide 6`
* what happens when it stops working?

`slide 7`
* most philosophies, at least mathematical ones, are created to act as a workaround
* empiricism are concerned only with the material world as it is interpreted by the senses, anything that cannot be sensed is not covered by empiricism, and that catches a lot of paradoxes

`slide 8`
* philosophy is very handy for avoiding these paradoxes, what's an example of a paradox?

`slide 9`
* in math they have these things called sets, you would call them arrays or collections

`slide 10`
* here is the paradox, the set of everything - literally everything in the universe.  If it exists it would contain itself.

`slide 11`
* do you see the paradox?  Not only is it a problem of infinity, it's a problem of an infinitely nested infinity...
* longs story short, it can't exist and that is problematic when you are actually trying to do real math problems where for example you are dealing with an empty set, a set of nothing.  But some operation in your proof requires that you have the complement of that set, the set of everything.  The paradox is now a part of your equation.  It's like getting infinity, or dividing by zero.  The matrix breaks and you wake up covered in goo.

`slide 12`
* A big goal of mathematicians is to find a general solution to a problem space. That is some huge leverage you have to be able to confidently state laws of the universe, without fear of being wrong later.  
* If you can develop a way of thinking that addresses previously un-answered questions then that is important.  We remember people for that.  We put them on money for that.   
* If you are encountering paradoxes all the time you lose faith in your philosophy.
* There is no set of all sets.  You can't solve your problem with bad tools.
* philosophy as a mechanism for finding answers to questions, it is also a way of constructing ideas so they are shielded from eventual paradoxes

`slide 13`
* the paradoxes pile up so much that a bunch of short dead dudes get together to solve the problem

`slide 14-17`
* jokes about age
* the "set of everything" paradox we just looked at is named after Mr Russell.  

`slide 18`
* A proposed solution [Hilbert's Program](https://en.wikipedia.org/wiki/Hilbert%27s_program) asked mathematicians to prove a limited number of fundamental axioms.  To do this they had to devise a language and a describe a theory of how to verify the language.

`slide 19`
The language had just a small number of features:
  * variables
  * IF > THEN statements
  * true/false values
  * parenthesis
  * symbol strings

`slide 20`
* All of this in 1900.   Bertrand Russell and Alfred Whitehead-North spent 187 pages of a [262 page book](https://en.wikipedia.org/wiki/Principia_Mathematica) proving that 1+1=2, just so that they could use that axiom in 3 other places across three volumes of similar proofs.  They did this so that everyone else who is working with their tools would know that their tools were sound.  You could be confident that when a paradox does appear you would be able to isolate it using this formal language, keeping the structure of your theories sound.
* I bring this up because I want you to think about your code as an implementation of a formal system that exists to prove that initial conditions will result in expected outcomes.  You expect the shiny things to happen when you start your program.  
* Bugs are the paradoxes of your code universe.  You tried to make a set of all sets and ran out of memory or got a literal stack overflow crash.  Or your program never halted, or you can't tell if your program will ever halt.
* If you try to add a number to something that isn't a number, you get Not a Number.  That's a mathematical paradox.  It ruins your equations like the introduction of infinity.

`slide 21`
* What can be learned from a bunch of dead mathematicians?  If you care, you should identify and verify the foundations of your system.  If you verify your tools you can go on to build greater things with confidence, faster that you would have before.  
* Note: this guy Godel.  He later proved every system contains paradoxical elements because all systems are self-referential, in that it breaks down at some point when trying to describe itself.  Take solace in the fact that no matter how hard you try you will reach the bedrock of your ideas.  At some point you can stop working because you literally can't anymore.

## part 2 - side effects

`slide 22`
* This is a presentation about side-effects, good and bad.  It is also a talk about  leveling up.
* Computers do billions of things a second.  When side-effects compound at this rate it becomes too difficult to resolve any cause > effect relationships.

`slide 23`
* I bet most people in this room identify with Homer.
* What happened to Homer?  Something is wrong with the cornflakes, or the milk that is causing the recipe to combust.  What if the cornflakes were 100 years old and broke down into a compound that reacts violently with milk?  What if the milk was not actually milk, but came from the same factory where they make white phosphorous?
* Homer couldn't have known those things because he didn't verify the foundations of his system.  He was focused on the bowl, and since everything is on fire he can't really work his way backwards to figure out what is going on.
* In this analogy, you are Homer.  The bowl represents the function you are writing on now, and the milk and corn flakes represent previous functions you have written.
* If Homer had independently verified the required properties of each ingredient he could isolate his problem and move on to finding out if his breakfast tastes good.

`slide 24`
* What is a Unit and how do you test it?  If we were testing the javascript `split()` function we would write a test that looks like this.

`slide 25`
* A real world test looks like this and comes in the form of a test block.  
* The block describes the test with a name
* A line that tells the test how many things there are to test, sometimes tests fail so badly the tests can't complete and the test runner can abandon the block and move on
* A few lines that setup the environment and the variables to be tested
* The actual tests where the function is run and compared to expected outcomes based on specific inputs

`slide 26`
* beyond testing the outcome of function calls you can test for anything verifiable

`slide 27` `slide 28`
* after you write all the tests for the stuff you expect, you can then start writing the tests for all the unexpected shit that comes up
* If you are building an image loader, you would test to see if the response from the server was a 200.  You could stop there but one time the server sent back a response with 200 but a length of zero, you tried to parse that empty result as an image and nothing loaded.

`slide 29`
* Instead of reading you a code heavy presentation I created moderately complex multiple emitter, single world, particle system project and will talk about the design and what I tested.

`slide 30` - `slide 33`
