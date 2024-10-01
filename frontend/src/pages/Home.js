import { useEffect, useState } from "react";
import React from "react";

import WorkoutDetails from "../components/WorkoutDetails";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  //useEffect so that this function executes when the component first renders
  useEffect(() => {
    const fetchWorkouts = async () => {
      //fetching the data from the specified route
      const response = await fetch("/api/workouts");
      //parsing the response object into json -> we get an array of Workout objects
      const json = await response.json();
      //if the response is ok, update the workouts state
      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkouts();
  });
  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
};

export default Home;
