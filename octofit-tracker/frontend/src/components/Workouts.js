import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

  useEffect(() => {
    console.log('Fetching from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        console.log('Fetched workouts:', results);
        setWorkouts(results);
      });
  }, [endpoint]);

  return (
    <div>
      <h2 className="mb-4 display-6 text-danger">Workouts</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-danger">
          <tr>
            <th>User</th>
            <th>Workout</th>
            <th>Reps</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout, idx) => (
            <tr key={idx}>
              <td>{workout.user}</td>
              <td>{workout.workout}</td>
              <td>{workout.reps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Workouts;
