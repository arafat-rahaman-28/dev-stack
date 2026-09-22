## 🛠️ Technologies & Tools Used

- React.js
- Tailwind CSS
- React-Toastify 
- TypeScript

## React Concepts and Conceptual Answers
---
## 1. What is JSX, and why is it used in React? 
JSX is JavaScript XML. It is similar to HTML, but we can write it inside JavaScript and make UI easily.

## 2. What is the difference between props and state?
Props is something similar like argument, we can send it from parent to the child component. And it is read-only state. State is something that changes it's state depending on the component and re-renders it. 

## 3. What does the useState hook do, and where did you use it in this project? 
useSate basically provides me with a variable and a function that helps me to update. Here are two examples where I used useState hook: ```const [technologies, setTechnologies] = useState<Technology[]>([]);``` and ```const [isLoading, setIsLoading] = useState(true);``` 

## 4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect hooks helps to call API and fetch data. I needed to load JSON data so that i can seperate the data of the cards from the main code of mine

## 5. Why does every item in a .map() list need a unique key prop? 
This unique key helps react to keep track of which item is getting changed, otherwise it gets confused and gives warnings in the console.

## 6. What is conditional rending er? Show one place you used it.
Conditional rendering means showing different UI based on diefferent conditions. For example in my project: 
```{isAdded ? "✅ Added to Stack" : "Add to Stack"}```
Here based on the value of ```isAdded``` it will render a message. 

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
To pass data from parent to child, we use props. But a child cannot send data back to the parent with props. We have to send a function as props to the child, and the child calls the function with data; that's how the child sends data back to the parent.
