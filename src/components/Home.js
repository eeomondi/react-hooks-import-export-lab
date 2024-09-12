// src/components/Home.js
import React from 'react';
import { username, city} from "../data/user";

const Home = () => {
  return (
  <div>
    <h1>Welcome, {username}!</h1>
    <p>city: {city}</p>
    </div>
  );
};

export default Home;


/*import React from "react";

const Home = () => {
  const username = "John Doe";
  const city = "New York";

  return <div>Home</div>;
}*/
