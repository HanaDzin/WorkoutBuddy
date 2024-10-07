import { useAuthContext } from "./useAuthContext";
import { useWorkoutsContext } from "./useWorkoutsContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: workoutsDispatch } = useWorkoutsContext();

  const logout = async (email, password) => {
    //remove user from local storage
    localStorage.removeItem("user");

    //dispatch logout action
    dispatch({ type: "LOGOUT" });
    //once logged out, we want to clear the workouts state so it doesn't appear for a second when entering as new user
    workoutsDispatch({ type: "SET_WORKOUTS", payload: null });
  };

  return { logout };
};
