import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const LoginForm = ({ onLogin }) => {

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Ajoutez ici la logique d'authentification
        // Logique d'authentification (simulée ici)

        if (username === 'user' && password === 'password') {
            navigate('/sport');
        }
    
    // Vous pouvez envoyer une requête à votre backend, vérifier les informations, etc.
    // onLogin(username, password);
  };

  return (
    <div>
      <label>
        Utilisateur:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Mot de passe:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
