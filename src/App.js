import React, { useState } from "react";

function App() {
  // Vars and const etc
  let [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  let message = "";

  if (name === "admin" && password === "admin") {
    message = "Hello Admin !";
  } else {
    message = "Who are you ?";
  }
  // main return
  return (
    <div>

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
