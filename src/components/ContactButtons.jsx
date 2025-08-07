// src/components/ContactButtons.jsx

import React from 'react';

const ContactButtons = ({ contact }) => {
    return (
        // Используем React Fragment (<>), так как нам не нужен лишний div
        <>
            <a
                href={contact.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-5 rounded-lg shadow-md transition-all duration-300 uppercase tracking-wider transform hover:scale-105 text-center"
            >
                Telegram
            </a>
            <a
                href={`mailto:${contact.email}`}
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-5 rounded-lg shadow-md transition-all duration-300 uppercase tracking-wider transform hover:scale-105 text-center"
            >
                Email
            </a>
        </>
    );
};

export default ContactButtons;