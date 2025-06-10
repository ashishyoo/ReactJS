# React Hooks

# 1. useState Hook

## What is useState?

`useState` is a React hook that enables functional components to manage state—data that can change over time, such as user inputs or counters. It returns a state variable to store the data and an updater function to modify it, triggering a component re-render when the state changes.

### Key Features

- Adds state management to functional components.
- Returns an array with the current state value and an updater function.
- Supports any data type (e.g., numbers, strings, objects, arrays).
- Allows optional initialization with a default value.

## How to Use useState

To use `useState` in a React functional component, follow these steps:

1. **Import useState**: Import the `useState` hook from the `react` package.
2. **Declare State**: Use array destructuring to define a state variable and its updater function.
3. **Set Initial Value**: Optionally provide an initial value to `useState` to initialize the state.
4. **Update State**: Call the updater function to modify the state, which triggers a re-render.
5. **Render State**: Use the state variable in your JSX to display its value.

### Naming Convention

- **State Variable**: Choose a descriptive name that reflects the data (e.g., `count` for a counter).
- **Updater Function**: Prefix with `set` followed by the state variable name (e.g., `setCount`).

## Syntax of useState

```javascript
import { useState } from "react";

const [state, setState] = useState(initialValue);
```

### Parameters

- **`state`**: The variable that holds the current state value.
- **`setState`**: The function used to update the state, triggering a component re-render.
- **`initialValue`**: The initial value of the state (optional; defaults to `undefined` if not provided).

### Return Value

- An array containing two elements:
  1. The current state value (`state`).
  2. The updater function (`setState`) to modify the state.

### Notes

- **Initial Value**: If `initialValue` is omitted, the state defaults to `undefined`. Providing an initial value is recommended for predictable behavior.
- **Updater Function**: `setState` can accept a new value directly (e.g., `setState(100)`) or a function that computes the new state based on the previous state (e.g., `setState(prev => prev + 1)`).
- **Multiple States**: You can use multiple `useState` calls in a single component to manage different state variables.

## Key Points

- **State Management**: `useState` makes functional components stateful, enabling dynamic and interactive UIs.
- **Re-rendering**: Updating state with `setState` causes React to re-render the component to reflect the new state.
- **Flexibility**: `useState` can handle any data type, making it versatile for various use cases.
- **Best Practices**: Use descriptive names for state variables and follow the `set` prefix convention for updater functions.

## Why useState is Important

The `useState` hook is a fundamental tool for managing state in React functional components, enabling developers to build dynamic, interactive applications. It is widely used in nearly all React projects, making it an essential skill for React developers.

# 2. useEffect Hook

## What is useEffect?

`useEffect` is a React hook that allows functional components to perform side effects—actions triggered as a result of state or prop changes, such as logging, data fetching, or setting up event listeners. It runs after every render by default and can be configured to respond to specific changes or clean up resources when a component unmounts.

### Key Features

- Executes side effects after rendering.
- Guaranteed to run at least once when the component mounts.
- Uses a dependency array to control when the effect runs.
- Supports an optional cleanup function to manage resource cleanup.
- Ideal for tasks like API calls, timers, or event subscriptions.

## How to Use useEffect

To implement `useEffect` in a React functional component, follow these steps:

1. **Import useEffect**: Import the `useEffect` hook from the `react` package.
2. **Define the Effect**: Provide a callback function with the side effect code.
3. **Specify Dependencies**: Include a dependency array to control when the effect runs by listing relevant state or props.
4. **Add Cleanup (Optional)**: Return a cleanup function to handle resource cleanup before the effect re-runs or when the component unmounts.
5. **Integrate with State**: Use with `useState` to trigger effects based on state changes.

### Key Concepts

- **Mounting**: The effect runs at least once when the component mounts.
- **Dependency Array**: Controls effect execution:
  - Empty (`[]`): Runs only on mount (cleanup on unmount).
  - Omitted: Runs after every render.
  - Non-empty (e.g., `[count]`): Runs on mount and when dependencies change.
- **Cleanup Function**: Executes before the effect re-runs or on component unmount, preventing memory leaks (e.g., clearing timers).
- **Lifecycle Equivalent**: Replaces `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` from class components.

## Syntax of useEffect

```javascript
import { useEffect } from "react";

useEffect(() => {
  // Code to run (side effect)

  return () => {
    // Optional cleanup function
  };
}, [dependencies]);
```

### Parameters

- **Callback Function**: Contains the side effect code executed after rendering.
- **Dependency Array (`[dependencies]`)**: Optional array of variables (state or props) the effect depends on. The effect re-runs when any dependency changes.
  - `[]`: Effect runs only on mount (cleanup on unmount).
  - No array: Effect runs after every render.
  - `[var1, var2]`: Effect runs on mount and when `var1` or `var2` changes.
- **Return Function (Optional)**: Cleanup function that runs before the effect re-runs or on component unmount.

### Notes

- **Guaranteed Execution**: The effect runs at least once on mount, regardless of dependencies.
- **Dependencies**: Include all variables used in the effect to avoid bugs or stale data. Linters (e.g., ESLint) warn about missing dependencies.
- **Cleanup**: Use the cleanup function for resources like timeouts, event listeners, or subscriptions to prevent memory leaks.
- **Execution Order**: On dependency change, the cleanup function (if provided) runs first, followed by the effect with updated values.

## Key Points

- **Side Effects**: Use `useEffect` for tasks like logging, data fetching, or event handling.
- **Controlled Execution**: The dependency array ensures effects run only when necessary.
- **Cleanup**: The optional cleanup function prevents issues like duplicate timers or orphaned listeners.
- **Best Practices**: Always specify dependencies and include cleanup for effects with ongoing processes.

## Why useEffect is Important

`useEffect`, alongside `useState`, is a core React hook for managing side effects in functional components. It’s essential for dynamic applications requiring data fetching, event handling, or resource management, making it a critical skill for React developers.

# 3. useMemo Hook

## What is useMemo?

`useMemo` is a React hook that memoizes a computed value, caching it to prevent unnecessary recalculations during component re-renders. It is used to optimize performance by ensuring expensive computations are only re-run when their dependencies change, avoiding redundant work and potential performance issues.

### Key Features

- Caches a computed value until dependencies change.
- Reduces performance overhead for expensive calculations.
- Returns the cached value if dependencies remain unchanged.
- Helps prevent bugs from stale values when used correctly.
- Essential for optimizing applications with heavy computations.

## How to Use useMemo

To implement `useMemo` in a React functional component, follow these steps:

1. **Import useMemo**: Import the `useMemo` hook from the `react` package.
2. **Define the Computation**: Wrap the expensive computation in a callback function that returns the computed value.
3. **Specify Dependencies**: Provide a dependency array listing all variables the computation depends on.
4. **Use the Memoized Value**: Use the returned value in your component, knowing it will only recompute when dependencies change.
5. **Ensure Correct Dependencies**: Include all variables used in the computation to avoid stale data or bugs.

### Key Concepts

- **Initial Computation**: The computation runs at least once on the initial render.
- **Dependency Array**: Controls when the computation re-runs:
  - Empty (`[]`): Runs only on mount.
  - Non-empty (e.g., `[items]`): Runs on mount and when listed dependencies change.
- **Performance Trade-off**: `useMemo` has a small overhead for dependency comparison, so use it only for computationally expensive operations.
- **Common Mistake**: Forgetting to include all dependencies can lead to stale values or unexpected behavior.

## Syntax of useMemo

```javascript
import { useMemo } from "react";

const memoizedValue = useMemo(() => {
  // Expensive computation
  return computedValue;
}, [dependencies]);
```

### Parameters

- **Callback Function**: A function that performs the expensive computation and returns the computed value.
- **Dependency Array (`[dependencies]`)**: An array of variables (state or props) the computation depends on. The computation re-runs only when these dependencies change.
  - `[]`: Computation runs only on mount.
  - `[var1, var2]`: Computation runs on mount and when `var1` or `var2` changes.
- **Return Value**: The memoized value, which is cached until dependencies change.

### Notes

- **Guaranteed Execution**: The computation runs at least once on the initial render.
- **Dependencies**: Include all variables used in the computation to prevent stale values. Linters (e.g., ESLint) warn about missing dependencies.
- **Performance**: Use `useMemo` only for expensive computations, as it has a small overhead for dependency comparison.
- **Misuse Risks**: Overusing `useMemo` can lead to unnecessary complexity or performance costs, while omitting it for heavy computations can cause performance issues.

## Key Points

- **Optimization**: `useMemo` prevents redundant computations, improving performance for expensive operations like filtering large arrays.
- **Dependency Management**: Always include all dependencies to ensure the memoized value updates correctly.
- **Selective Use**: Apply `useMemo` only when performance issues arise from repeated computations, as it adds overhead.
- **Debugging**: Missing dependencies can cause bugs like stale data, so rely on linter warnings to ensure correctness.

## Why useMemo is Important

`useMemo` is a critical tool for optimizing React applications by reducing unnecessary computations, especially in scenarios involving large datasets or complex calculations. Used correctly, it enhances performance; used incorrectly, it can introduce bugs or overhead, making it essential to understand its application.

# 4. useCallback Hook

## What is useCallback?

`useCallback` is a React hook that memoizes a function, returning a stable reference across renders unless its dependencies change. It’s used to optimize performance by preventing unnecessary re-renders of child components wrapped in `React.memo` or when functions are dependencies of other hooks like `useEffect`.

### Key Features

- Returns a memoized function that remains identical if dependencies are unchanged.
- Prevents re-renders in `React.memo`-wrapped components receiving the function as a prop.
- Allows control over function recreation via a dependency array.
- Essential for performance in applications with frequent renders or complex component trees.

## How to Use useCallback

1. **Import useCallback**: Import from the `react` package.
2. **Wrap the Function**: Enclose the function to memoize in `useCallback`.
3. **Specify Dependencies**: Provide a dependency array with all variables the function uses.
4. **Use the Memoized Function**: Pass to event handlers, child components, or other hooks.
5. **Ensure Correct Dependencies**: Include all referenced variables to avoid stale closures.

### Key Concepts

- **Memoization**: Ensures the function reference doesn’t change unless dependencies change.
- **Dependency Array**:
  - Empty (`[]`): Function is stable across all renders.
  - Non-empty (e.g., `[users]`): Function is recreated when `users` changes.
- **Performance**: Prevents unnecessary re-renders or hook executions but adds a small overhead for dependency comparison.
- **Stale Closures**: Omitting dependencies can freeze state, causing bugs with outdated values.

## Syntax of useCallback

```javascript
import { useCallback } from "react";

const memoizedFunction = useCallback(() => {
  // Function logic
}, [dependencies]);
```

### Parameters

- **Callback Function**: The function to memoize, containing the logic to execute.
- **Dependency Array (`[dependencies]`)**: Array of variables the function depends on. The function is recreated only when these change.
  - `[]`: Function is stable across all renders.
  - `[var1, var2]`: Function is recreated when `var1` or `var2` changes.
- **Return Value**: A memoized function, identical across renders unless dependencies change.

### Notes

- **Dependencies**: Include all variables used in the function to prevent stale closures. Linters (e.g., ESLint) warn about missing dependencies.
- **Selective Use**: Use only for functions passed to `React.memo` components or hook dependencies to avoid unnecessary overhead.
- **Performance**: Balances preventing re-renders with the cost of dependency comparison.

# 5. useRef Hook

## What is useRef?

`useRef` is a React hook that creates a mutable reference object with a `.current` property, persisting across renders without causing re-renders. It’s used to store values not needed for rendering or to reference DOM elements for direct manipulation.

### Key Features

- Maintains a mutable `.current` property that persists across renders.
- Does not trigger re-renders when `.current` is updated.
- Ideal for values not used in the component’s render output (e.g., counters, timers).
- Enables direct access to DOM elements (e.g., focusing inputs) or third-party library instances.
- Provides a stable reference for values or elements across component lifecycle.

## How to Use useRef

To implement `useRef` in a React functional component, follow these steps:

1. **Import useRef**: Import the `useRef` hook from the `react` package.
2. **Initialize useRef**: Create a ref with an initial value (e.g., `null`, a number, or a typed DOM element).
3. **Access/Mutate Value**: Use `.current` to read or update the ref’s value.
4. **Reference DOM Elements**: Pass the ref to a DOM element’s `ref` attribute to store its reference.
5. **Avoid Rendering Use**: Do not use `.current` in the render output, as it won’t trigger updates.

### Key Concepts

- **No Re-renders**: Updating `.current` doesn’t cause the component to re-render, unlike state updates.
- **DOM Access**: When passed to a DOM element’s `ref` attribute, `.current` is automatically set to the element by React.
- **Type Safety**: In TypeScript, specify the ref type (e.g., `HTMLInputElement | null`) to ensure correct usage.
- **Lifecycle**: `.current` is set when the element mounts and reset to `null` when it unmounts.
- **Comparison to useState**: Unlike `useState`, `useRef` provides immediate access to updated values without waiting for a re-render.

## Syntax of useRef

```javascript
import { useRef } from "react";

const myRef = useRef(initialValue);
```

### Parameters

- **initialValue**: The initial value of the ref’s `.current` property (e.g., `0`, `null`, or a DOM element type).
  - Can be any type; common examples include numbers, objects, or `null` for DOM elements.
- **Return Value**: An object with a single mutable `.current` property, accessible and modifiable throughout the component’s lifecycle.

### Notes

- **Accessing Values**: Use `myRef.current` to read or mutate the ref’s value.
- **DOM References**: For DOM elements, initialize with `null` (e.g., `useRef<HTMLInputElement | null>(null)`) and pass to the `ref` attribute.
- **Avoid in Render**: Using `.current` in the render output (e.g., `<p>{myRef.current}</p>`) won’t reflect updates, as it doesn’t trigger re-renders.
- **TypeScript**: Specify types for DOM elements (e.g., `HTMLInputElement`) to ensure type safety.
- **Use Cases**: Store non-rendering values (e.g., counters, timers), access DOM methods (e.g., `.focus()`), or integrate with third-party libraries requiring refs.

# 6. useReducer Hook

## What is useReducer?

`useReducer` is a React hook that manages state using a reducer function, providing an alternative to `useState` for complex state logic. It is inspired by Redux and is suited for scenarios where state transitions are intricate or depend on previous state values.

### Key Features

- Manages state via a reducer function that processes actions to produce a new state.
- Centralizes state update logic, enhancing predictability and testability.
- Triggers component re-renders when state changes, similar to `useState`.
- Supports dispatching actions to update state, decoupling logic from rendering.
- Ideal for complex state objects or interdependent state transitions.

## How to Use useReducer

To implement `useReducer` in a React functional component, follow these steps:

1. **Import useReducer**: Import the `useReducer` hook from the `react` package.
2. **Define a Reducer**: Create a reducer function that takes the current state and an action, returning a new state based on the action type.
3. **Initialize useReducer**: Call `useReducer` with the reducer and initial state to obtain the current state and dispatch function.
4. **Dispatch Actions**: Use the dispatch function to send actions (e.g., objects with a `type` property) to update state.
5. **Use State in Component**: Utilize the state in the component’s render logic to reflect updates.

### Key Concepts

- **Reducer Function**: A pure function `(state, action) => newState` that computes the new state without mutating the original state.
- **Action**: Typically an object with a `type` property (e.g., `{ type: 'INCREMENT' }`) and optional payload (e.g., `{ type: 'SET', value: 5 }`).
- **Dispatch**: The function to send actions to the reducer, triggering state updates.
- **Initial State**: The starting state, which can be a primitive, object, or complex data structure.
- **Comparison to useState**: `useReducer` excels in managing complex or interconnected state; `useState` is simpler for independent state values.

## Syntax of useReducer

```javascript
import { useReducer } from "react";

const [state, dispatch] = useReducer(reducer, initialState);
```

### Parameters

- **reducer**: A function `(state, action) => newState` that accepts the current state and an action, returning the new state.
- **initialState**: The initial state value (e.g., number, object, array) used on the first render.
- **Return Value**: A tuple containing:
  - `state`: The current state, updated by the reducer.
  - `dispatch`: A function to dispatch actions to the reducer, initiating state updates.

### Notes

- **Pure Reducer**: The reducer must be pure (no side effects, no mutations) and return a new state object for predictable updates.
- **Action Format**: Actions are typically objects with a `type` property, but can be any value if the reducer handles it.
- **Re-renders**: State changes trigger re-renders, like `useState`.
- **TypeScript**: Use interfaces for state and action types (e.g., `interface State { count: number }`, `type Action = { type: 'INCREMENT' }`) for type safety.
- **Use Cases**: Managing forms, counters with multiple actions, or state machines with dependent transitions.

# 7. useContext Hook

## What is useContext?

`useContext` is a React hook that enables functional components to consume values from a context created by `React.createContext`. It facilitates sharing data (e.g., theme, user info, or global state) across a component tree, eliminating the need to pass props through intermediate components.

### Key Features

- Accesses context values provided by a `Context.Provider` higher in the component tree.
- Removes prop drilling, simplifying data sharing across multiple components.
- Triggers re-renders when the context value changes.
- Supports any data type, including objects, primitives, or functions.
- Improves code maintainability and reusability in complex applications.

## How to Use useContext

To implement `useContext` in a React functional component, follow these steps:

1. **Create a Context**: Use `React.createContext` to define a context object, optionally setting a default value.
2. **Provide Context**: Wrap components with a `Context.Provider` and pass the context value via its `value` prop.
3. **Consume Context**: Use `useContext` with the context object in a descendant component to access the provided value.
4. **Update Context**: Modify the context value in the provider to propagate changes to consuming components.
5. **Handle Missing Provider**: Ensure `useContext` is used within a `Context.Provider`, or manage the default value to avoid errors.

### Key Concepts

- **Context Object**: Created by `React.createContext`, it includes `Provider` and `Consumer` components.
- **Provider**: `Context.Provider` supplies the context value to its descendant components.
- **Consumer**: Components using `useContext` or `Context.Consumer` to access the context value.
- **Default Value**: Returned if no `Provider` exists; often set to `null` and requires explicit handling.
- **Re-renders**: Context consumers re-render when the provider’s `value` changes.

## Syntax of useContext

```javascript
import { useContext } from "react";
import MyContext from "./MyContext";

const value = useContext(MyContext);
```

### Parameters

- **MyContext**: The context object created by `React.createContext`.
- **Return Value**: The current context value from the nearest `Context.Provider` above the component, or the default value if no provider is found.

### Notes

- **Provider Requirement**: `useContext` must be used within a `Context.Provider` for the specified context, or it returns the default value, which may cause errors if not handled.
- **TypeScript**: Define the context type (e.g., `interface ContextType { theme: string }`) and use `createContext<ContextType | null>(null)` for type safety.
- **Performance**: Frequent context value updates can cause unnecessary re-renders; memoize values with `useMemo` or `useCallback` if needed.
- **Use Cases**: Managing global state (e.g., authentication, theme, language) or configuration data across components.
- **Limitations**: Overuse of context can complicate state management; consider libraries like Redux or Zustand for large-scale applications.
