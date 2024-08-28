import '../pages/ContactoPage.css';
import React, { useState } from 'react';
import axios from 'axios';

const ContactoPage = () => {
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value 
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);

        if (!formData.nombre || !formData.email || !formData.telefono || !formData.mensaje) {
            setMsg('Todos los campos son requeridos.');
            setSending(false);
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/api/contacto', formData);
            setMsg(response.data.message);
            if (!response.data.error) {
                setFormData(initialForm);
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            setMsg('Hubo un error al enviar su mensaje. Por favor, inténtelo nuevamente más tarde.');
        } finally {
            setSending(false);
        }
    }

    return (
        <main className="contacto">
            <div className="bg-contact100">
                <div className="container-contact100">
                    <div className="wrap-contact100">
                        <div className="contact100-pic js-tilt" data-tilt>
                            <p className="titulo">Completa los campos del formulario</p>
                        </div>

                        <form className="formulario" onSubmit={handleSubmit}>
                            <p>
                                <label htmlFor="nombre">Nombre</label>
                                <input 
                                    type="text" 
                                    id="nombre"
                                    name="nombre" 
                                    value={formData.nombre} 
                                    onChange={handleChange} 
                                />
                            </p>
                            <p>
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                />
                            </p>
                            <p>
                                <label htmlFor="telefono">Teléfono</label>
                                <input 
                                    type="text" 
                                    id="telefono"
                                    name="telefono" 
                                    value={formData.telefono} 
                                    onChange={handleChange} 
                                />
                            </p>
                            <p>
                                <label htmlFor="mensaje">Comentario</label>
                                <textarea 
                                    id="mensaje"
                                    name="mensaje" 
                                    value={formData.mensaje} 
                                    onChange={handleChange}
                                ></textarea>
                            </p>
                            <p className="centrar">
                                <input type="submit" value="Enviar" />
                            </p>
                        </form>

                        {sending && <p>Enviando...</p>}
                        {msg && <p>{msg}</p>}

                
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactoPage;
