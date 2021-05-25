import React, { useState } from "react";

const Form = () => {
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstname && email) {
      const person = {
        id: new Date().getTime().toString(),
        firstName: firstname,
        email: email,
      };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setFirstname("");
      setEmail("");
    } else {
      console.log("empty values");
    }
  };
  return (
    <>
      <article>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstname">Name :</label>
            <input
              id="firstname"
              type="text"
              name="firstName"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email :</label>
            <input
              id="email"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">add person</button>
        </form>
      </article>
      {people.map((person) => {
        const { id, firstname, email } = person;
        return (
          <div key={id}>
            <h1>{firstname}</h1>
            <h3>{email}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Form;
