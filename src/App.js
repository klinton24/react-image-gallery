import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import "./styles.css";
import PplCard from "./components/PplCard";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setUsers(
        await fetch("https://reqres.in/api/users?page=2")
          .then(response => response.json())
          .then(response => response.data)
          .catch(err => console.log(err, "Fetch Warning"))
      );
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Employee Database</h1>
      <Grid container spacing={10}>
        {users.map(user => (
          <Grid key={user.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
            <PplCard
              email={user.email}
              fName={user.first_name}
              lName={user.last_name}
              picture={user.avatar}
              key={user.id}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
/*RnKSA-51kpI*/
