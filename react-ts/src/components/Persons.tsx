import React from "react";
import Person from "../models/person";

const Persons: React.FC<{ info: Person[] }> = ({ info }) => {
  return (
    <div>
      {info.map((person) => (
        <div key={person.age}>
          {person.name} is {person.age} years old.
        </div>
      ))}
    </div>
  );
};

export default Persons;
