# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  SOFTWARE ENGINEERING IMMERSIVE

## Overview

We will be making our previous [dog-api-hw](https://git.generalassemb.ly/sei-nyc-pandas/dog-api-hw) in React. For this exercise, think about what changes we might need to make to go from Vanilla JS to React. 

Where were our api calls made previously and where should they made in a React app? 
How do we want to divide the pieces of our app into components? 
What data should be stored in state?

Refer back to the HTML in your previous dog-api-app to get ideas for the JSX in this new app. This time around, you can have some freedom with how you wish to style your app.

## Set Up

1. Fork and clone this repo and `cd` into it.
2. Inside this repo, initialize a new React app with `npx create-react-app .` **<-- NOTICE THE DOT**
>Note: the dot in `npx create-react-app .` turns our current working directory *into* a React app.
3. Install axios with `npm install axios`
4. Use `code .` to open the app in VS Code. 
5. Turn `App.js` into a class component, clear the default JSX, and import `axios`
6. Inside the `src` folder, create a `services/` directory and an `api-helper.js` file inside that directory
7. Also create a `components/` directory
8. In `App.js` you'll need to track two things in state: `breeds` and `randomPic`. What do you think their initial states should be?

## Fetching Dogs

- Let's first create a function inside of `api-helper.js` that will make an axios get request to the dog api and return a list of dog breeds. Make sure to export this function and import it to `App.js`!
>HINT: Refer to the [dog api docs](https://dog.ceo/dog-api/) to find the correct endpoint to hit.
- Also keep in mind how we are going to parse the data. This api might throw you a curve ball. Take a look at out we parsed the data from our previous app.
- Now create a method in `App.js` that will use our function from `api-helper.js` to get a list of dog breeds and set them in state. We can test our new method by putting it in `componentDidMount()`. 
>Note: we only need componentDidMount for testing. We wont be using it in our final app.

- Let's create a new functional component called `BreedList.jsx`. This component will have a button and will take a list of breeds, and map them onto the screen.
>Note: In order to render the data from the list, we'll need to pass that data from the state of `App.js` to the `BreedList` component through props.
- The button will need an `onClick` function. Use our api method from `App.js` as that function passed down through props.
- In `App.js`, import our `BreedList.jsx` component and render it to the DOM. When we are calling it, we should pass the dog breeds through props from state and also our api method.

## Random Dog Pix

- For the random pog pictures, Let's start by making another axios get request in `api-helper.js`. This function needs to take a parameter for the dog breed. We can interpolate that parameter into the url string for our endpoint.
- Import our dog pics function into `App.js`. We can now create a method that also takes a dog breed as a parameter and calls our new api function. We then set the response in state.

- Make a new component called `RandomDogs.jsx`. This component should be a functional component.
- We can build out a simple form with one input and a button. The input will need a `handleChange` function passed to it through props.

- For the onSubmit function of the form, we can use our api function from `App.js` that grabs the random dog pic. We will need to pass it a argument. **That means that we need to nest it inside of an anonymous arrow function.** Remember that the arrow function needs to handle the preventDefault on the event instead of the api method.
- This component should also render an image tag underneath the form. This image tag should render conditionally if there is a dog pic in props. Use the "and" `&&` operator to achieve this.
- Now import the `RandomDogs.jsx` component in `App.jsx`. Inside `render()`, place `RandomDogs.jsx` with `BreedList.jsx`. We should only be passing our random dogs api method and the dog pic from state through props.

## Conditionally Switching Views

Now we need a way of conditionally switching between our two components. 

- In `App.js`, let's add a value in state called `currentView`.
- We need to make a method called `setView` that will take a string of text and setState to `currentView` with the string parameter.
- Now lets make another method called `pageView`. This method will have a switch statement. We can use `currentView` from state for our condition. Our cases for the switch statement should return our `RandomDogs` component if the `currentView` is "random dogs" or return `BreedList` component as a default case.
- Don't forget to pass down the appropriate objects through props to each component.
- Inside our `render()`, replace `RandomDogs.jsx` with a line that calls `{this.pageView()}`
- This should conditionally render our default case from our switch statement now. But we want a way of changing the view.
- Lets make a `Header.jsx` component that has our "My Dog Website" title and two links. 
>Hint: don't use `<a>` tags. Use something like a `<span>` or `<li>` and just make them look like links.
- On our links, add onClick functions. These will be anonymous arrow functions again. We can then call our `setView` method from `App.jsx` inside of these onClick functions. Pass the value 'random dogs' to one of the `setView` functions. The other `setView` can take 'dog breeds' (or anything really. it's our default case)
- Import `Header.jsx` into `App.jsx` and call it inside our render above our `{this.pageView()}`. Don't forget to pass `setView` through props. 
![](https://media3.giphy.com/media/Yx5ns1mSPBle0/giphy.gif)
