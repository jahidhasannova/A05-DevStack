# 🚀 Dev Stack Builder

Dev Stack Builder is a simple web application where users can explore different technologies and select technologies to build their own development stack.

## 🛠️ Technologies I Used

* ⚛️ React
* 🔷 TypeScript
* 🎨 Tailwind CSS
* 🔔 React-Toastify
* ⚡ Vite
* 📄 JSON

## ✨ Features

* 🔍 Users can explore different technologies with their details.
* ➕ Users can add and remove technologies from their stack.
* 🔔 Toast notifications show when technologies are added or removed.

## 📚 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a way to write HTML-like code inside JavaScript or TypeScript. I use JSX because it makes the React code easier to write and understand.

### 2. What is the difference between props and state?

Props are used to send data from a parent component to a child component. State is used to store data inside a component and the data can change.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and update data in a component. In this project, I used it to store the selected technologies.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run some code after a component renders. It can be used to fetch data from JSON when the component loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It helps React understand which item has changed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different things based on a condition. In my project, I used it to show a message when no technology is selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can send data to a child using props. The child can send something back by using a function that the parent passes through props.
