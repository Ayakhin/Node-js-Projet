import React, { useState } from 'react';
import LoginForm from './LoginForm';


// import LoginForm from './athlete';
// import Dashboard from './Dashboard';  // Importez le composant Dashboard

const Login = () => {


  return (
    <div>
      <h1>Login Page</h1>
      {/* {isLoggedIn ? <Dashboard /> : <LoginForm onLogin={handleLogin} />} */}
      <LoginForm />
    </div>
  );
};

export default Login;
