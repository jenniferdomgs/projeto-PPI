import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';

const UserList = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/api/auth/list');
                setUsuarios(response.data.usuarios);
            } catch (error) {
                alert(error.response?.data?.message || 'Erro ao carregar usuários');
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Usuários Cadastrados</h1>
            <ul>
                {usuarios.map((user, index) => (
                    <li key={index}>{user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
