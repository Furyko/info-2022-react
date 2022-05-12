import React from 'react';

function Noticia() {
    const att = {
        titulo: 'Titulo',
        descripcion: 'Descripción'
    }
    const {titulo, descripcion} = att
    return (
        <div>
            <h1>{titulo}</h1>
        </div>
    )
}

export default Noticia;