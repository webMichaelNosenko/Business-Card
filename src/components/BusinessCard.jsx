import React from 'react';
import ContactButtons from './ContactButtons'; // Импортируем кнопки
import { useMediaQuery } from '../hooks/useMediaQuery'; // Импортируем хук

// Примечание: developerData теперь будет передаваться через props
const BusinessCard = ({ data }) => {
    const isDesktop = useMediaQuery('(min-width: 768px)');
    return (
        // Обертка для центрирования самой карточки, т.к. фон секции будет на всю ширину
        <div className="max-w-md w-full mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden md:max-w-2xl transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <div className="p-6 md:p-8">
                <header className="text-center mb-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">{data.name}</h1>
                    <p className="text-lg md:text-xl text-cyan-400 font-semibold mt-2">{data.title}</p>
                </header>

                <section className="mb-6">
                    <p className="text-gray-300 text-center leading-relaxed">
                        {data.bio}
                    </p>
                </section>

                <section> {/* Убрал отступ снизу, так как футер удален */}
                    <h2 className="text-lg font-semibold text-white text-center mb-4">Ключевые технологии</h2>
                    <div className="flex flex-wrap justify-center gap-2">
                        {data.skills.map(skill => (
                            <span key={skill} className="bg-gray-700 text-cyan-300 text-sm font-medium px-3 py-1 rounded-full">
                        {skill}
                    </span>
                        ))}
                    </div>
                </section>

                {/* --- УСЛОВНЫЙ РЕНДЕРИНГ КНОПОК --- */}
                {/* Показываем этот блок, только если это НЕ десктоп */}
                {!isDesktop && (
                    <footer className="mt-8 pt-6 border-t border-gray-700 flex justify-center gap-4">
                        <ContactButtons contact={data.contact} />
                    </footer>
                )}

            </div>
        </div>
    );
};

export default BusinessCard;