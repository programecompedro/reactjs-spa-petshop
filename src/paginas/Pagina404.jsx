import React from 'react';
import imagem from '../assets/img/doguito404.svg';
import '../assets/css/404.css';
const Pagina404 = () => {
    return (
        <main className="container flex flex--centro flex--coluna">
            <img src={imagem} alt="Img doguito erro 404" className="doguito-imagem" />
            <p className="naoencontrado-texto">Ops, essa página não existe!</p>
        </main>
    )
}

export default Pagina404;