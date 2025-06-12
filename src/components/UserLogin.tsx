import { useEffect, useState } from 'react';
import { login } from '../services/authService'; 
import { useNavigate } from 'react-router';
import { isTokenExpired } from '../services/token';

function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

 useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token && isTokenExpired(token)) {
      localStorage.removeItem('access_token');
      navigate('/login');
    }
  }, [navigate]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    try {
      const result = await login(email, password);
      localStorage.setItem('access_token', result.user.access_token);
      navigate('/');
    } catch {
      setError('Usuário ou senha inválidos');
    }
  }

  return (
    <div className="user-login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Email:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default UserLogin;