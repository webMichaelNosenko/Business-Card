// src/components/FloatingContactButtons.jsx

import React from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery'; // Импортируем хук
import ContactButtons from './ContactButtons'; // Импортируем кнопки

const FloatingContactButtons = ({ contact }) => {
    // Получаем `true` или `false`
    const isDesktop = useMediaQuery('(min-width: 768px)');

    // Если это НЕ десктоп, компонент ничего не рендерит
    if (!isDesktop) {
        return null;
    }

    // Этот код выполнится только на десктопных устройствах
    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <ContactButtons contact={contact} />
        </div>
    );
};

export default FloatingContactButtons;