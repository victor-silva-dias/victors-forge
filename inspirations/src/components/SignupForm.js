import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { EntitlementContext } from '../context/EntitlementContext';
import { ThemeContext } from '../context/ThemeContext';
import mixpanel from '../mixpanel';

const SignupForm = () => {
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { setEntitlement, setIsSigningUp } = useContext(EntitlementContext);
    const { isDarkMode } = useContext(ThemeContext);
    const navigate = useNavigate();

    const handleInputChange = (setter, fieldName) => (e) => {
        setter(e.target.value);
        mixpanel.track('Signup Form Field Changed', { 'Field': fieldName });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setIsSigningUp(true);

        if (password.length < 6) {
            setError('A senha deve ter pelo menos 6 caracteres.');
            setLoading(false);
            setIsSigningUp(false);
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            mixpanel.track('User Signed Up', { 'uid': user.uid });

            const response = await fetch('https://api-dev.apolus.ai/webhook/auth/account-creation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: user.uid,
                    email: user.email,
                    nome_completo: nomeCompleto,
                    telefone: telefone,
                    origem: "web"
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Falha ao criar a conta em nosso sistema.');
            }

            const entitlement = await response.json();
            setEntitlement(entitlement);
            mixpanel.people.set({
                "$email": user.email,
                "$name": nomeCompleto,
                "$phone": telefone,
                "UID": user.uid,
                "Plan": entitlement.plan_name || 'Trial',
            });

            navigate('/catalogo');

        } catch (err) {
            console.error("Erro no cadastro:", err);
            let errorMessage = 'Ocorreu um erro durante o cadastro.';
            if (err.code === 'auth/email-already-in-use') {
                errorMessage = 'Este e-mail já está em uso. Tente fazer login.';
            } else if (err.code === 'auth/weak-password') {
                errorMessage = 'A senha é muito fraca. Tente uma mais forte.';
            } else {
                errorMessage = err.message;
            }
            setError(errorMessage);
            mixpanel.track('Signup Failed', { 'error': err.message });
        } finally {
            setLoading(false);
            setIsSigningUp(false);
        }
    };

    return (
        <div className="w-full max-w-md p-8 space-y-6 bg-lightSurface rounded-lg shadow-md dark:bg-darkSurface">
            <h2 className="text-2xl font-bold text-center text-lightText dark:text-darkText">Criar Nova Conta</h2>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <form onSubmit={handleSignup} className="space-y-6">
                <div>
                    <label
                        htmlFor="nomeCompleto"
                        className="text-sm font-medium text-lightText dark:text-darkText"
                    >
                        Nome Completo
                    </label>
                    <input
                        id="nomeCompleto"
                        name="nomeCompleto"
                        type="text"
                        autoComplete="name"
                        required
                        value={nomeCompleto}
                        onChange={handleInputChange(setNomeCompleto, 'Nome Completo')}
                        className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-rocketBlue focus:border-rocketBlue bg-lightCard dark:bg-darkCard dark:border-darkBorder text-lightText dark:text-darkText"
                    />
                </div>
                <div>
                    <label
                        htmlFor="telefone"
                        className="text-sm font-medium text-lightText dark:text-darkText"
                    >
                        Telefone
                    </label>
                    <input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        autoComplete="tel"
                        required
                        value={telefone}
                        onChange={handleInputChange(setTelefone, 'Telefone')}
                        className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-rocketBlue focus:border-rocketBlue bg-lightCard dark:bg-darkCard dark:border-darkBorder text-lightText dark:text-darkText"
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="text-sm font-medium text-lightText dark:text-darkText"
                    >
                        E-mail
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={handleInputChange(setEmail, 'Email')}
                        className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-rocketBlue focus:border-rocketBlue bg-lightCard dark:bg-darkCard dark:border-darkBorder text-lightText dark:text-darkText"
                    />
                </div>
                <div>
                    <label
                        htmlFor="password"
                        className="text-sm font-medium text-lightText dark:text-darkText"
                    >
                        Senha
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        required
                        value={password}
                        onChange={handleInputChange(setPassword, 'Password')}
                        className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-rocketBlue focus:border-rocketBlue bg-lightCard dark:bg-darkCard dark:border-darkBorder text-lightText dark:text-darkText"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full px-4 py-2 text-white bg-rocketBlue rounded-md hover:opacity-90 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {loading ? 'Criando Conta...' : 'Cadastrar'}
                    </button>
                </div>
            </form>
            <div className="text-center">
                <p className="text-sm text-lightText dark:text-darkText">
                    Já tem uma conta?{' '}
                    <Link to="/login" className="font-medium text-rocketBlue hover:underline">
                        Faça Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignupForm;
