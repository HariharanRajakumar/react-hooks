import React, { useState } from "react";

const Multiple = () => {
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
    //js nuggets
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "", age: "" });
    }
  };
  return (
    <>
      <h1>Multiple Input</h1>
      <form>
        <div>
          <label htmlFor="firstname">Name :</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={person.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="text"
            id="email"
            name="email"
            value={person.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="age">Age :</label>
          <input
            type="text"
            id="age"
            name="age"
            value={person.age}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit}>Add person</button>
      </form>
      {people.map((person) => {
        const { id, firstName, email, age } = person;
        return (
          <div key={id}>
            <h4>{firstName}</h4>
            <p>{age}</p>
            <p>{email}</p>
          </div>
        );
      })}
    </>
  );
};

export default Multiple;
