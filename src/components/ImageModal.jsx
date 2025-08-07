// src/components/ImageModal.jsx

import React from 'react';

const ImageModal = ({ imageUrl, onClose }) => {
    // Если URL изображения не передан, компонент не рендерится
    if (!imageUrl) return null;

    return (
        // Оверлей: занимает весь экран, затемняет фон, слушает клики для закрытия
        <div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 transition-opacity duration-300"
            onClick={onClose}
        >
            {/* Контейнер, чтобы клик по самому изображению не закрывал окно */}
            <div
                className="relative p-4 bg-gray-900 rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={imageUrl}
                    alt="Увеличенный скриншот проекта"
                    // Ключевые стили: ограничивают размер, чтобы картинка не вылезала за экран, и сохраняют пропорции
                    className="max-w-[90vw] max-h-[90vh] object-contain rounded-md"
                />

                {/* Кнопка "Закрыть" (крестик) */}
                <button
                    onClick={onClose}
                    className="absolute top-0 right-0 -mt-4 -mr-4 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default ImageModal;