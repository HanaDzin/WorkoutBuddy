import { createContext, useReducer } from "react";

//1. creating the context
export const WorkoutsContext = createContext();

//3. reducer function = updates the state based on type of the action that was dispatched
// and using the data received in the action payload
export const workoutsReducer = (state, action) => {
  //state = reliable state value before making the change
  switch (action.type) {
    case "SET_WORKOUTS":
      return { workouts: action.payload }; //return the new value we want the state to be in
    case "CREATE_WORKOUT":
      return { workouts: [action.payload, ...state.workouts] }; //new workout + old workouts from the state
    case "DELETE_WORKOUT":
      return {
        //go through the currently stored workouts
        workouts: state.workouts.filter(
          (workout) => workout._id !== action.payload._id //return those whose id doesn't match the one we want to delete
        ),
      };
    default:
      return state;
  }
};

//2. provide the context to our app component tree, so components can access it
//by making a context provider component (component that wraps the rest of app that uses the context)
export const WorkoutsContextProvider = ({ children }) => {
  //useReducer has 2 args: reducer function name & initial value of the state
  //returns : a state value & function (dispatch) to update that state value
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null,
  });

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {" "}
      {/* component given to us by context we created, wrapper*/}
      {children}{" "}
      {/*wraps around children - <App /> in index.js - whole app can use this context*/}
    </WorkoutsContext.Provider>
  );
};
