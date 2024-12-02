import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import UserList from './components/UserList';

const App = () => {
    const [currentPage, setCurrentPage] = useState('login'); 
    const renderPage = () => {
        switch (currentPage) {
            case 'login':
                return <LoginForm />;
            case 'signup':
                return <SignupForm />;
            case 'listUsers':
                return <UserList />;
            default:
                return <LoginForm />;
        }
    };

    return (
        <div>
            <nav>
                <button onClick={() => setCurrentPage('login')}>Login</button>
                <button onClick={() => setCurrentPage('signup')}>Cadastro</button>
                <button onClick={() => setCurrentPage('listUsers')}>Lista de Usuários</button>
            </nav>
            <div>{renderPage()}</div>
        </div>
    );
};

export default App;
