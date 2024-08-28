import React from 'react';

const ArticuloItem = (props) => {
    const { art, desc, prec, image, body } = props;

    return (
        <div className="">
          <h4>{art}</h4>
            
            <p>Descripción: {desc}</p>
            <p>Precio: {prec}</p>
          <img src={image} alt={`Imagen de ${art}`} style={{ width: '150px', height: 'auto' }} />
            <div dangerouslySetInnerHTML={{ __html: body }} />
        </div>
    );
}

export default ArticuloItem;
