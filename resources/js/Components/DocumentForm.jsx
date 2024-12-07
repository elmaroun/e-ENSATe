import React, { useState } from 'react';
import axios from 'axios';

const DocumentForm = () => {
    const [formData, setFormData] = useState({
        prenom: '',
        nom: '',
        email_institutionnel: '',
        cin: '',
        code_apogee: '',
        type_document: '',
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(null);

    // Function to handle form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setErrors({});
        setSuccess(null);

        try {
            // Send POST request to the Laravel route
            const response = await axios.post('/document-administrative', formData);
            setSuccess(response.data.message); // Set success message
        } catch (error) {
            // Handle validation errors
            if (error.response && error.response.status === 422) {
                setErrors(error.response.data.errors); // Set validation errors
            }
        }
    };

    return (
        <div>
            <h1>Demande de Document Administratif</h1>
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Prénom</label>
                    <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} />
                    {errors.prenom && <p style={{ color: 'red' }}>{errors.prenom[0]}</p>}
                </div>
                <div>
                    <label>Nom</label>
                    <input type="text" name="nom" value={formData.nom} onChange={handleChange} />
                    {errors.nom && <p style={{ color: 'red' }}>{errors.nom[0]}</p>}
                </div>
                <div>
                    <label>Email Institutionnel</label>
                    <input type="email" name="email_institutionnel" value={formData.email_institutionnel} onChange={handleChange} />
                    {errors.email_institutionnel && <p style={{ color: 'red' }}>{errors.email_institutionnel[0]}</p>}
                </div>
                <div>
                    <label>CIN</label>
                    <input type="text" name="cin" value={formData.cin} onChange={handleChange} />
                    {errors.cin && <p style={{ color: 'red' }}>{errors.cin[0]}</p>}
                </div>
                <div>
                    <label>Code Apogée</label>
                    <input type="text" name="code_apogee" value={formData.code_apogee} onChange={handleChange} />
                    {errors.code_apogee && <p style={{ color: 'red' }}>{errors.code_apogee[0]}</p>}
                </div>
                <div>
                    <label>Type de Document</label>
                    <input type="text" name="type_document" value={formData.type_document} onChange={handleChange} />
                    {errors.type_document && <p style={{ color: 'red' }}>{errors.type_document[0]}</p>}
                </div>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
};

export default DocumentForm;
