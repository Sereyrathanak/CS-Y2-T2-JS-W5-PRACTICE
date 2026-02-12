// import React from "react";
// import { userData } from "../../exercise-1/src/App";


import React from "react";

export const vinhData = {
  firstName: "Vinh",
  lastName: "Hoang Nhu",
  title: "PN Training Manager",
};

export const myData = {
  firstName: "My",
  lastName: "Ngo",
  title: "PN Trainer",
};

export function User({ firstName, lastName, title }) {
  return (
    <div id="user" data-testid="user">
      <h2>{firstName} {lastName}</h2>
      <p>{title}</p>
    </div>
  );
}

function App() {
  return (
    <div id="app">
      <h1>PNV React Team !!</h1>
      <p>Here are some PNV React masters, do you know them?</p>
      <User {...vinhData} />
      <User {...myData} />
    </div>
  );
}

export default App;