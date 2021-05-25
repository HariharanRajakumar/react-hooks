import React, { useState } from 'react';

const data = [
  { id: 1, name: 'Hari' },
  { id: 2, name: 'Harish' },
  { id: 3, name: 'Chaithu' },
  { id: 4, name: 'Ezhil' },
];

const Propdrill = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <section>
      <h1>In the Prop Drilling</h1>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default Propdrill;
