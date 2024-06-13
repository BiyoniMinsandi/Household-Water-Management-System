import React from 'react';
import './Settings.css';
import Form from '../../Components/Settings/Form';

const handleSubmit =(formData) =>{
    console.log ('Form data Submitted:', formData);
};

const Settings = () => {
    return (
        <div className="settings-page">
            <div className="greeting-message">WELCOME!!<br/></div>
            <div className="title">Monthly Activation Plan</div>
                <Form onSubmit={handleSubmit} />
        </div>
);
}

export default Settings;