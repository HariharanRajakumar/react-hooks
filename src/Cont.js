import React, { useState, useContext } from 'react';

const data = [
  { id: 1, name: 'Hari' },
  { id: 2, name: 'Harish' },
  { id: 3, name: 'Chaithu' },
  { id: 4, name: 'Ezhil' },
];

const PersonContext = React.createContext();

//two components - provider,Consumer

const Cont = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h1>In the Prop Drilling</h1>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
    const mainData = useContext(PersonContext)
  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);
  return (
    <div>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default Cont;
