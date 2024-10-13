import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call for login, on success:
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <h2>Login</h2>
      <div className="form-group">
        <label>Username</label>
        <input name="username" className="form-control" placeholder="Enter username" onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input name="password" type="password" className="form-control" placeholder="Enter password" onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  );
};

export default Login;
