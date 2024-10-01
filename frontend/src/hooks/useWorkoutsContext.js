import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

//a custom hook that makes consuming the context by components possible
//whenever we want to use our data, we get the context value by invoking this hook
export const useWorkoutsContext = () => {
  //returns the value of the context (value passed to the provider component - state & dispatch)
  const context = useContext(WorkoutsContext);

  //check to see whether we are in scope of context we want to use (if it wraps the component where this is invoked)
  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside an WorkoutsContextProvider"
    );
  }

  return context;
};
