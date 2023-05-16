import React, { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
  }
  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });

    return (
      <h1> hi </h1>
      // <form className="login" onSubmit={handleSubmit}>
      //   <h3> Login </h3>

      //   <label> Email: </label>
      //   <input
      //     type="Email"
      //     onChange={changeHandler}
      //     name="email"
      //     value={user.email}
      //   />

      //   <label> Password: </label>
      //   <input
      //     type="password"
      //     onChange={changeHandler}
      //     name="password"
      //     value={user.password}
      //   />

      //   <button> Sign Up</button>
      // </form>
    );
  };
}
