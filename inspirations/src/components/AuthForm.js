import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { Link } from 'react-router-dom'; // Importar Link
import mixpanel from '../mixpanel';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const auth = getAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      mixpanel.identify(user.uid);
      mixpanel.people.set({
        $name: user.displayName,
        $email: user.email,
      });
      mixpanel.track('Login Success');
      // A lógica de redirecionamento foi removida. App.js agora cuidará disso.
    } catch (error) {
      setError(error.message);
    }
  };

  const handlePasswordReset = async () => {
    setError('');
    setMessage('');
    if (!email) {
      setError('Por favor, insira seu e-mail para redefinir a senha.');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Link para redefinição de senha enviado para o seu e-mail.');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-lightSurface rounded-lg shadow-md dark:bg-darkSurface">
      <h2 className="text-2xl font-bold text-center text-lightText dark:text-darkText">Login</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      {message && <p className="text-green-500 text-center">{message}</p>}
      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="text-sm font-medium text-lightText dark:text-darkText"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-rocketBlue focus:border-rocketBlue bg-lightCard dark:bg-darkCard dark:border-darkBorder text-lightText dark:text-darkText"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-sm font-medium text-lightText dark:text-darkText"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-rocketBlue focus:border-rocketBlue bg-lightCard dark:bg-darkCard dark:border-darkBorder text-lightText dark:text-darkText"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-rocketBlue rounded-md hover:opacity-90"
          >
            Login
          </button>
        </div>
      </form>
      <div className="text-center space-y-2">
        <button onClick={handlePasswordReset} className="text-sm text-rocketBlue hover:underline">
          Forgot password?
        </button>
        <p className="text-sm text-lightText dark:text-darkText">
            Não tem uma conta?{' '}
            <Link to="/signup" className="font-medium text-rocketBlue hover:underline">
                Cadastre-se
            </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
