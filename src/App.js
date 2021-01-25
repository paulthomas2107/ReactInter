import React, { useState } from "react";


function App() {
  // Vars and const etc
  let [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  let message = "";
  const nameArray = [
    {
      name: "Paul",
      roll: 1,
    },
    {
      name: "Rory",
      roll: 2,
    },
  ];

  if (name === "admin" && password === "admin") {
    message = "Hello Admin !";
  } else {
    message = "Who are you ?";
  }

  function GreetComponent(props) {
    return (
      <div>
        <h1>Hello {props.name}</h1>
        {props.children}
      </div>
    );
  }
  // main return
  return (
    <div>
      <h1>{Date().toLocaleString()}</h1>
      <h1>
        <GreetComponent name="Paul" children="Rory, Caitlin" />
      </h1>
      <button onClick={buttonWasClicked}>Button</button>
      <h1>{counter}</h1>

      <div>
        <span>{message}</span>
        <input type="text" value={name} onChange={updateTextField} />
        <input
          type="password"
          value={password}
          onChange={updatePasswordField}
        />
        <button onClick={submitForm}>Submit</button>
        <div>
          {nameArray.map((elem) => (
            <li key={elem.roll}>{elem.roll} - {elem.name}</li>
          ))}
        </div>
      </div>
    </div>
    
  );

  // functions below
  function submitForm() {
    console.log(name, password);
  }

  function buttonWasClicked() {
    setCounter((counter += 1));
  }

  function updateTextField(event) {
    setName(event.target.value);
  }

  function updatePasswordField(event) {
    setPassword(event.target.value);
  }
}

export default App;
