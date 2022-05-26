import React from "react";

const Blogs = () => {
  return (
    <div className="max-w-7xl mx-auto px-12 mt-16">
        <h2 className='text-3xl md:text-5xl text-center mt-3 font-bold text-accent'>Our Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">

        <div className="shadow-lg card p-5">
            <h1 className="text-secondary font-bold text-xl mb-3">
                <span className="text-accent">Question-1: </span> How will you
                improve the performance of a React Application?
            </h1>
            <p>
                <span className="text-accent font-bold text-xl">Answer: </span>
            </p>
            <p className="mb-1">1. Consider Server-side Rendering</p>
            <p className="mb-1">2. CSS Animations Instead of JS Animations</p>
            <p className="mb-1">3. Avoiding Props in the Beginning</p>
            <p className="mb-1">4. Avoid using additional HTML element wrappers by using
            peact.Fragments</p>
            <p className="mb-1">5. When possible, avoid using async initialization</p>
            <p className="mb-1">6. Spreading props across DOM components</p>
            <p className="mb-1">7. Consider Server-side Rendering</p>
            <p className="mb-1">8. Using Webpack's Production Mode Flag</p>
            <p className="mb-1">9. Dependency reduction</p>
            <p>10. Using a Content Delivery Network</p>
        </div>
        
        <div className="shadow-lg card p-5">
            <h1 className="text-secondary font-bold text-xl mb-3">
                <span className="text-accent">Question-2: </span> What are the
            different ways to manage a state in a React application?
            </h1>
            <p><span className="text-accent font-bold text-xl">Answer: </span> 
            <br/>
                <span>
                    1) Use useReducer for Complex State: When dealing with complex state activities involving large objects, the useState hook may not be sufficient. The useReducer hook is a useful React hook for dealing with complex state management without having to rely on third-party libraries. It also cuts down on the quantity of data that has to be recreated for each render.
                </span> <br/> <br/>
                <span>
                    2) Custom Hooks: When using React hooks, we may end up with incredibly complex state logic contained within a single component that employs a variety of hooks to achieve a single purpose. To integrate numerous bits of logic into a single hook, we can use custom React hooks. This is excellent for forms, toggles, asynchronous behavior, and any other component where a tangle of hooks is generated.
                </span>
            </p>
        </div>

        <div className="shadow-lg card p-5">
            <h1 className="text-secondary font-bold text-xl mb-3">
                <span className="text-accent">Question-3: </span> How does
            prototypical inheritance work?
            </h1>
            <p><span className="text-accent font-bold text-xl">Answer: </span>
                Everything in Javascript is an object. Even when a Class is created using an Object Literal or Constructor Function, it is still an Object.
                Javascript implements class-based programming in a different method from other mainstream Object-Oriented Programming languages that use the phrases 'class' and 'inheritance.' The Javascript implementation of class-based programming, like that of other traditional class-based programming languages, works on the same idea as other traditional class-based programming languages, although in slightly different ways. Its keyword, syntax, and operation are all distinct. There are also debates over the benefits and drawbacks of Javascript's implementation of class-based programming. As a result, Prototypical Inheritance is predicated on the idea that one object can point to another and inherit all of its properties. The main purpose is to allow for a large number of instances of an object to
                share similar data.
            </p>
        </div>

        <div className="shadow-lg card p-5">
            <h1 className="text-secondary font-bold text-xl mb-3">
                <span className="text-accent">Question-4: </span> What is a unit test? Why should write unit tests?
            </h1>
            <p><span className="text-accent font-bold text-xl">Answer: </span>
                The main purpose of unit testing is to isolate written code in order to test and verify that it functions as expected. Unit testing is an important part of the development process because, when done correctly, it can help identify early code flaws that would otherwise be difficult to find in later stages of testing. Unit testing ensures that code meets quality standards before it is deployed. This encourages a stable technical environment that places a high value on quality. Unit testing helps developers write better code faster and saves time and money across the product development life cycle. It is for this reason that unit tests are required.
            </p>
        </div>

        <div className="shadow-lg card p-5">
            <h1 className="text-secondary font-bold text-xl mb-3">
                <span className="text-accent">Question-5: </span> Why you do not set the state directly in React. For example, if you have const[products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
            </h1>
            <p><span className="text-accent font-bold text-xl">Answer: </span>
                React's state should be accurately set and updated. We should only use the specific setter method, which is returned as the second component in the array, to update the state using the useState hook. If we don't do that and try to update it manually using the plain JavaScript example, we won't be able to find the appropriate behavior from our software. Our component is re-rendered when the state is suitably modified. The question now is what happens to thestate if we manually update it instead of utilizing the "React" method. React will manage displaying and rendering the component when something changes in that circumstance. <br/>
                The point is that if we use ordinary JavaScript instead of setState to update the state, React will not re-render and will not display the user the changes.
            </p>
        </div>

        <div className="shadow-lg card p-5">
            <h1 className="text-secondary font-bold text-xl mb-3">
                <span className="text-accent">Question-6: </span> You have an array
            of products. Each object has a name, price, description, etc. How
            will you implement a search to find products by name?
            </h1>
            <p><span className="text-accent font-bold text-xl">Answer: </span>
                The mentioned issue is similar to a nested array of items. The solution to this issue is find() method, which returns is a preferred approach.The first instance of an element in the array that meets the stated criteria. predicate. "object.find(e = e.name === "name of the object" product") " This allows us to search for products by name. As an alternative, For this, we can use the findIndex, foreach, or filter methods. By typing in the product's name, you can find what you're looking for. That's how we'll be able to locate a product from a collection of things.
            </p>
        </div>

      </div>
    </div>
  );
};

export default Blogs;
