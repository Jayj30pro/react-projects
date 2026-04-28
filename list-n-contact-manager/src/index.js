import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function AddNameToForm(props) {
  const [ person, setPerson ] = useState('');

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleSubmit(e) {
    props.handleSubmit(person);
    setPerson('');
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Add new contact' onChange={handleChange} value={person} />
      <button type='submit'>Add</button>
    </form>
  );

}

function ListListing(props) {
  const arr = props.names;
  const listItems = arr.map((val, index) =>
    <li key={index}>{val}</li>
  );
  return <ul>{listItems}</ul>;
}

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.names);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return (
    <div>
      <AddNameToForm handleSubmit={addPerson} />
      <ListListing names={contacts} />
    </div>
  );
}

const contacts = ["Alfred Pennyworth", "Beth Sweetburry", "Chuck Alphroz"];
const el = <ContactManager names={contacts} />;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  el
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
