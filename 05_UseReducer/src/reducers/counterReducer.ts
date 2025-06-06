type State = { count: number };
type Action =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "INCREMENT_VALUE"; payload: number }
  | { type: "DECREMENT_VALUE"; payload: number };

export const intialState: State = { count: 0 };

export const counterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "INCREMENT_VALUE":
      return { count: state.count + action.payload };
    case "DECREMENT_VALUE":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};
