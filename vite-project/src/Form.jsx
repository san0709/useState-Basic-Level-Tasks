import React from "react";
import { useState } from "react";
import "./Form.css";

export default function Form() {
  const [userDetails, SetUserDetails] = useState({
    Name: "Sandhiya",
    Age: 25,
    Qualification: "Bsc.Computer Science",
    Skills: ["JS", "React", "HTML", "CSS"],
    Role: "Full Stack Developer",
    Gender: "Female",
    isMarried: "Yes",
    Country: "India",
  });
  const keys = Object.keys(userDetails);

  return (
    <>
      <table>
        <tr>
          <th>{keys[0]}</th>
          <td>{userDetails.Name}</td>
        </tr>
        <tr>
          <th>{keys[1]}</th>
          <td>{userDetails.Age}</td>
        </tr>
        <tr>
          <th>{keys[2]}</th>
          <td>{userDetails.Qualification}</td>
        </tr>
        <tr>
          <th>{keys[3]}</th>
          <td>{userDetails.Skills.join(", ")}</td>
        </tr>
        <tr>
          <th>{keys[4]}</th>
          <td>{userDetails.Role}</td>
        </tr>
        <tr>
          <th>{keys[5]}</th>
          <td>{userDetails.Gender}</td>
        </tr>
        <tr>
          <th>{keys[6]}</th>
          <td>{userDetails.isMarried}</td>
        </tr>
        <tr>
          <th>{keys[7]}</th>
          <td>{userDetails.Country}</td>
        </tr>
      </table>
      <div>
        <label htmlFor="genderMale">
          <input name="Gender" id="genderMale" type="radio" />
          Male
        </label>
        <label htmlFor="genderFemale">
          <input name="Gender" id="genderFemale" type="radio" />
          Female
        </label>
      </div>
      <label htmlFor="checkbox">
        <input id="checkbox" name="isMarried" type="checkbox" /> Is Married
      </label>
      <label htmlFor="select-country">
        Choose your Country :
        <select name="Country" id="select-country">
          <option>India</option>
          <option>UK</option>
          <option>USA</option>
        </select>
      </label>
    </>
  );
}
