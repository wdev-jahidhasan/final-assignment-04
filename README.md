Answers to Questions

Q1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

      Answer-1: The main difference lies in their behavior. getElementById selects just a single element with a unique id but getElementsByClassName selects all the elements with the given class. On the other hand, querySelector / querySelectorAll accepts any css selector. querySelector returns the first matching element or null. querySelectorAll returns a node list. 



Q2. How do you create and insert a new element into the DOM?

      Answer-2: In order to create and insert a new element into the DOM, we have to create a element by using document.createElement(). Then we have to write innerHTML and at the final stage we have to append it into parent div.



Q3. What is Event Bubbling? And how does it work?

      Answer-3: Event bubbling is an event propagation system where an event first occurs on the target element and then it propagates to the upper parent elements and finally it reaches the top of the DOM tree.



Q4. What is Event Delegation in JavaScript? Why is it useful?

      Answer-4: Event delegation is a method in JS where we can handle multiple events by using a single event listener instead of adding event listener multiple times. It is useful for making better performance, working dynamically and also clearer and maintainable code.



Q5. What is the difference between preventDefault() and stopPropagation() methods?

      Answer-5: preventDefault() stops the default action of element such as form submission or link direction. On the other hand, stopPropagation() prevents the event from propagating to parent elements.