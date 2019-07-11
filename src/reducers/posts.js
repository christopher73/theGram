//reducer takes in action and state (copy of current state)

export default function posts(state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES': // increase likes action
      console.log('+1 like'); //
      const i = action.index;
      console.log(state);
      return [
        ...state.slice(0, i), // before the one we are updating
        { ...state[i], likes: state[i].likes + 1 }, //adds 1
        ...state.slice(i + 1) // after the one we are updating
      ];
    default:
      return state;
  }
}
