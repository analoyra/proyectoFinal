import '../pages/ProductosPage.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticuloItem from '../components/ArticuloItem';

const ProductosPage = () => {
 const [loading, setLoading] = useState(false);
 const [articulos, setArticulos] = useState([]);

    useEffect(() => {
        const cargarArticulos = async () => {
            setLoading(true);
                const response = await axios.get('http://localhost:3000/api/articulos');
                setArticulos(response.data);
                setLoading(false);
        };
        cargarArticulos();
    }, []);

    return (
        <section className="">
            <h2>Artículos</h2>
            {loading ? (
                <p>Cargando artículos...</p>
            ) : (

                articulos.map(item => <ArticuloItem key={item.id}
                    art={item.articulo} desc={item.descripcion} prec={item.precio} image={item.img_id} body={item.body}  />
                )

            )}
        </section>
    );
};

export default ProductosPage;
