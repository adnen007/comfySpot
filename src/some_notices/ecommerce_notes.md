# Ecommerce Notice.

## General Notice:

- it is better to type the type of the botton to avoid error.

- you can add a small state using usestate separate than the main state and don't combine it with the big state if that state is just for a simple effect like animation or change button color or
  something that don't affect the real date (or state)

- utiliy or util it mean a piece of computer software that perfoms a particular task like funtcion that you will use in app.

- if some thing went wrong remmeber to look at the unsaved file to know if you didn't save some changes

- always remmeber to destruct the argument in the fuction for clearner look and shorter code.

- you should use css module it is easy to learn and it make your coding experince easier and it make the code easy to read.

- when you try to build a project that someone already did it is important to watch the correction or at least to read the code so you can know if you build something with inconvience way and you also
  can steal some tricks.

- it is important to name your varaibles and functions good names to make your code more readable.

- when you pass an empty prop in react component the prop will auto have the true as value.

## Notice About The State And The Context

### why we use context ?

- we use useReducer like the useSate to create our state so the place where you will apply the same rules that talk about where you should inisialise the state on where you should inisialise the
  useReducer.

- context api allow you to create special component that can share the value in its value prop with all its children and nested children and you can get the value easily inside the children by
  useContext .

### why we should create the contexts in seperate files and intialise the states inside them instead of just create the context where you need it [any component will share its state] ,and insialise the state in it?

- it just a recommend because separating the logic of intialision and sharing the state(with context) will made the stucture clearer and the code cleaner and the debuging easier, also you should
  create a context for every state (useReducer) instead of trying to use one huge context first because the context can only share the state in the curent component so you can't use the context for
  sharing another state that present in its children exept usnig unconvienent ways. and also to make context to every state will alow us to avoid unessesary renders

- as what we said above we want all the logic that related to the state to be in the same place it is recommanded instead of passing the dispatch and update the state in another component to create a
  function in the context that make the update and pass the state to the component. with this way you will make sure that all the logic of state managent is in the same place and also you will make
  sure that the component will be more reusable and the component can't change unwanted part in the state.

### how the promise and the await handle the errors.

1. if threre is an error happing inside a create promise or then or async function or any function that return promise the returned promise will get rejected and if the rejected proimse didn't get
   handled (with than or catch ) it will cause a global error

2. rejected promise

   - if the promise get rejected and there isn't any handler to handle that rejectcion the rejected promise will cause a gloabal error.

   - if the promise after the await get reject the rejection will become an error in the async function and as we said the errors in the async function cause the returned promise to get rejected so
     you can create try-catch around the await or or to handle the returned promise with try or catch.
