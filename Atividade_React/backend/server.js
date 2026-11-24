
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;


const filmes = [
    { id: 1, titulo: 'Matrix', ano: 1999 },
    { id: 2, titulo: 'Interestelar', ano: 2014 },
    { id: 3, titulo: 'Batman', ano: 2022 }
];

app.get('/api/filmes', (req, res) => {
    res.json(filmes);
});


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
