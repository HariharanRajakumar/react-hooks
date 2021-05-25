import React, { useReducer, useState } from 'react';
import Modal from './Modal';

//reducer function
import { reducer } from './reducefun';
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
};
const Reducer = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newName = { id: new Date().now, name };
      dispatch({ type: 'ADD_ITEM', payload: newName });
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">ADD</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person}</h4>
            <button
              onClick={() => {
                dispatch({ type: 'REMOVE_ITEM', payload: person.id });
              }}
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Reducer;
