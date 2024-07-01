import React, { useState } from 'react';
import AddEntry from './components/AddEntry';
import EntryList from './components/EntryList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [entries, setEntries] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
     
    const addEntry = (entry) => {
        if (editIndex !== null) {
            const newEntries = [...entries];
            newEntries[editIndex] = entry;
            setEntries(newEntries);
            setEditIndex(null);
            
        } else {
            setEntries([...entries, entry]);
        }
    };
 
    const handleDelete = (index) => {
        const newEntries = [...entries];
        newEntries.splice(index, 1);
        setEntries(newEntries);
    };
 
    const handleEdit = (index) => {
        setEditIndex(index);
    };
  return (
    <div className="container">
      <div className="form-container">
        <h1 className="text-cener">
          Дневник путешествия
        </h1>
          <AddEntry onAdd={addEntry}
              editIndex={editIndex}
              entries={entries} />
      </div>
      <div className="table-container p-4">
        <EntryList entries={entries}
            onDelete={handleDelete}
            onEdit={handleEdit} />
      </div>
    </div>
  );
}

export default App;
