// sport.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Sport = () => {
  const [sports, setSports] = useState([]);
  const [newSport, setNewSport] = useState('');

  useEffect(() => {
    // Charger tous les sports au chargement de la page
    axios.get('http://localhost:3008/sports') // Mettez à jour le port vers celui de votre backend
      .then(response => setSports(response.data));
  }, []);

  const handleAddSport = () => {
    // Envoyer une requête POST pour créer un nouveau sport
    axios.post('http://localhost:3008/sports', { name: newSport }) // Mettez à jour le port vers celui de votre backend
      .then(response => setSports([...sports, response.data]));

    setNewSport('');
  };

  const handleDeleteSport = (id) => {
    // Envoyer une requête DELETE pour supprimer un sport par ID
    axios.delete(`http://localhost:3008/sports/${id}`) // Mettez à jour le port vers celui de votre backend
      .then(() => setSports(sports.filter(sport => sport.id !== id)));
  };

  return (
    <div>
      <h1>Sports List</h1>
      <ul>
        {sports.map(sport => (
          <li key={sport.id}>
            {sport.name}{' '}
            <button onClick={() => handleDeleteSport(sport.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newSport}
          onChange={(e) => setNewSport(e.target.value)}
        />
        <button onClick={handleAddSport}>Add Sport</button>
      </div>
    </div>
  );
};

export default Sport;
