import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Sport = () => {
  const [sports, setSports] = useState([]);
  const [newSport, setNewSport] = useState('');
  const [editingSportId, setEditingSportId] = useState(null);
  const [editedSportName, setEditedSportName] = useState('');

  const [update, setUpdate] = useState(true);

  useEffect(() => {
    // Charger tous les sports au chargement de la page
    axios.get('http://localhost:3008/sports')
      .then(response => setSports(response.data));
  }, [update]);

  const handleAddSport = () => {
    // Envoyer une requête POST pour créer un nouveau sport
    axios.post('http://localhost:3008/sports', { name: newSport })
      .then(response => setSports([...sports, response.data]));

    setNewSport('');
  };

  const handleDeleteSport = (id) => {
    // Envoyer une requête DELETE pour supprimer un sport par ID
    axios.delete(`http://localhost:3008/sports/${id}`)
      .then(() => setSports(sports.filter(sport => sport.id !== id)));
  };

  const handleEditSport = (id, name) => {
    setEditingSportId(id);
    setEditedSportName(name);
    
  };

  const handleUpdateSport = (id) => {
    // Envoyer une requête PUT pour mettre à jour le nom du sport
    axios.put(`http://localhost:3008/sports/${id}`, { name: editedSportName })
      .then(response => {
        // Mise à jour de la liste des sports avec la nouvelle valeur
        const updatedSports = sports.map(sport =>
          sport.id === id ? { ...sport, name: response.data.name } : sport
        );
        setSports(updatedSports);
        // Réinitialiser les états d'édition
        setEditingSportId(null);
        setEditedSportName('');
        
        setUpdate(!update);
      });
  };

  return (
    <div>
      <h1>Sports List</h1>
      <ul>
        {sports.map(sport => (
          <li key={sport.id}>
            {sport.id === editingSportId ? (
              <>
                <input
                  type="text"
                  value={editedSportName}
                  onChange={(e) => setEditedSportName(e.target.value)}
                />
                <button onClick={() => handleUpdateSport(sport.id)}>Update</button>
              </>
            ) : (
              <>
                {sport.name}{' '}
                <button onClick={() => handleDeleteSport(sport.id)}>Delete</button>
                <button onClick={() => handleEditSport(sport.id, sport.name)}>Edit</button>
              </>
            )}
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
