type State = {
  count: number;
};

type Action = {
  type: "increment" | "decrement";
};

export const initialState = {
  count: 0,
};

export const countReducer = (state: State, action: Action) => {
  const { type } = action;

  switch (type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return { ...state };
  }
};
