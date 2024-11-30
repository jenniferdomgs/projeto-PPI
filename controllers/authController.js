const users = []; 

const login = (req, res) => {
    const { email, senha } = req.body;

    const user = users.find((user) => user.email === email && user.senha === senha);
    if (user) {
        return res.status(200).json({ message: 'Success', token: 'token' });
    }
    return res.status(401).json({ message: 'Credenciais Inválidas' });
};

const signup = (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ message: 'Campos obrigatórios: email e senha' });
    }

    const userExists = users.some((user) => user.email === email);
    if (userExists) {
        return res.status(409).json({ message: 'Usuário já existe' });
    }

    users.push({ email, senha });
    return res.status(201).json({ message: 'Usuário criado com sucesso' });
};

module.exports = { login, signup };
