import React from "react";
import { useState } from "react";

export default function Objects() {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    age: "",
  });

  function handleInputChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h1>
        {user.fname} {user.lname} {user.age}
      </h1>
      <label>First Name : </label>
      <input
        type="text"
        name="fname"
        value={user.fname}
        onChange={handleInputChange}
      />
      <label>Last Name : </label>
      <input
        type="text"
        name="lname"
        value={user.lname}
        onChange={handleInputChange}
      />
      <label>Age : </label>
      <input
        type="text"
        name="age"
        value={user.age}
        onChange={handleInputChange}
      />
    </div>
  );
}
