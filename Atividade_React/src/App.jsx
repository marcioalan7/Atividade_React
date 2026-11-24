
import { useState, useEffect } from 'react';
import ItemFilme from './ItemFilme';

function App() {
    const [filmes, setFilmes] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState('');

    useEffect(() => {
        async function buscarFilmes() {
            try {
                const resposta = await fetch(
                    'http://localhost:3000/api/filmes'
                );

                if (!resposta.ok) {
                    throw new Error('Erro ao buscar filmes');
                }

                const dados = await resposta.json();
                setFilmes(dados);

            } catch (erro) {
                setErro(erro.message);

            } finally {
                setCarregando(false);
            }
        }

        buscarFilmes();
    }, []);

    if (carregando) {
        return <p>Carregando filmes...</p>;
    }

    if (erro) {
        return <p>{erro}</p>;
    }

    if (filmes.length === 0) {
        return <p>Nenhum filme encontrado.</p>;
    }

    return (
        <div className="container">
            <h1>Minha Lista de Filmes</h1>

            <ul className="lista-filmes">
                {filmes.map((filme) => (
                    <ItemFilme
                        key={filme.id}
                        titulo={filme.titulo}
                        ano={filme.ano}
                    />
                ))}
            </ul>
        </div>
    );
}

export default App;
