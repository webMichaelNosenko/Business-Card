// src/components/Portfolio.jsx

import React, { useState } from 'react';
import ImageModal from './ImageModal'; // Импортируем наш новый компонент
import { useMediaQuery } from '../hooks/useMediaQuery'; // <-- Импортируем наш хук

// Для примера я заменил одно изображение на "вертикальное", чтобы показать, как это работает
const projects = [
    {
        id: 1,
        title: 'Мониторинг транспорта',
        description: 'Интерактивная карта с списком т/с, актуальным положением машины, геозонами, показаниями датчиков и доступом к аналитике.',
        image: 'map.png', // Горизонтальное изображение
    },
    {
        id: 2,
        title: 'Отслеживание поездок',
        description: 'Трекинг поездок машины за выбранный период времени, с отображением точек начала и конца маршрута, скорости машины, событиями во время поездки и статистикой.',
        image: 'map_trips.png', // Вертикальное изображение
    },
    {
        id: 3,
        title: 'Интеграция видеопотока с регистраторов',
        description: 'Встроенный видео-плеер для просмотра потоков с регистраторов, установленных в машине.',
        image: 'map_video.png',
    },
    {
        id: 4,
        title: 'События, заданные пользователем',
        description: 'Результат анализа потока телеметрии по правилам, заданным пользователем с нуля или выбранным из шаблона доступных событий.',
        image: 'map_events.png',
    },
    {
        id: 5,
        title: 'Геозоны',
        description: 'Создание виртуальных зон, отображаемых на карте, с целью обеспечения более прозрачной аналитики и задания правил поведения водителей и т/с в определенных зонах.',
        image: 'geofence_creation.png',
    },
    {
        id: 6,
        title: 'Обслуживание машин',
        description: 'Функционал создания регулярных запланированных и незапланированных работ по обслуживанию автопарка, с уведомлениями, аналитикой по стоимости и своевременности выполнения работ.',
        image: 'maintenance_works.png',
    },
    {
        id: 7,
        title: 'Широкая система отчетности',
        description: 'Большой выбор построения любой отчетности, которая может понадобиться владельцу автопарка для аналитики эффективности использования т/с.',
        image: 'report_menu.png',
    },
    {
        id: 8,
        title: 'Отчет: поездки',
        description: 'Детальная отчетность по поездкам машин в автопарке за заданный период времени с графической информацией и с группировкой по дням и т/с.',
        image: 'report_trips.png',
    },
    {
        id: 9,
        title: 'Отчет: топливо',
        description: 'Данные о заправках, сливах топлива, с графиком уровня топлива машины, построенным по данным с датчиков, установленных на машины.',
        image: 'report_fuel.png',
    },
    {
        id: 10,
        title: 'События с медиа-файлами',
        description: 'Список событий, к которым привязаны записи с видеорегистраторов, установленных в машине, с детальной информацией о событии и местоположении/скорости машины.',
        image: 'alarm_media_management.png',
    },
    {
        id: 11,
        title: 'Панель администратора',
        description: 'Отдельная панель управления платформой, с функционалом отчетности, управления пользователями, аккаунтами и детальной информацией о зарегистрированных транспортных средствах.',
        image: 'dashboard_stats.png',
    },
];


const Portfolio = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null); // Новое состояние для URL выбранной картинки

    // Используем хук. `true`, если ширина экрана 768px или больше.
    const isDesktop = useMediaQuery('(min-width: 768px)');

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    // Функция, которая записывает URL в состояние, "открывая" окно
    const openModal = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    // Функция, которая очищает состояние, "закрывая" окно
    const closeModal = () => {
        setSelectedImage(null);
    };

    const currentProject = projects[currentIndex];

    return (
        <div className="w-full max-w-4xl mx-auto py-12 md:py-16 px-4">
            <h3 className="text-3xl font-bold text-white text-center mb-2">Результат работы с клиентом из Филиппин</h3>
            <h4 className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-2">
                Был с нуля разработан API для платформы мониторинга автотранспорта с генерацией отчетности,
                отслеживанием заданных пользователем событий, трекингом потребления топлива, интеграцией видеопотока с регистраторов машин,
                построением оптимизированных маршрутов т/с.
            </h4>

            {isDesktop ? (
                // --- ВЕРСИЯ ДЛЯ ДЕСКТОПА ---
                <div className="relative h-[550px] flex items-center justify-center"> {/* Немного увеличил высоту контейнера */}
                    {projects.map((project, index) => {
                        const isActive = index === currentIndex;
                        const offset = (index - currentIndex) * 10;
                        const rotation = (index - currentIndex) * 3;

                        return (
                            //  ▼▼▼ ВОТ ИСПРАВЛЕННАЯ СТРОКА ▼▼▼
                            <div
                                key={project.id}
                                className="absolute w-full max-w-lg transition-all duration-500 ease-in-out" // <-- Классы были восстановлены
                                style={{
                                    transform: `translateX(${offset}px) rotate(${rotation}deg) scale(${isActive ? 1 : 0.9})`,
                                    zIndex: projects.length - Math.abs(index - currentIndex),
                                    opacity: Math.abs(index - currentIndex) < 3 ? 1 : 0,
                                }}
                            >
                                <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden flex flex-col h-[450px]">
                                    <img className="w-full h-64 object-cover cursor-pointer transition-transform duration-300 hover:scale-105" src={project.image} alt={project.title} onClick={() => openModal(project.image)} />
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                        <p className="text-gray-300 mb-2 overflow-auto">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                // --- ВЕРСИЯ ДЛЯ МОБИЛЬНЫХ ---
                <div className="w-full max-w-lg mx-auto mt-3">
                    <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
                        <img className="w-full h-56 object-cover cursor-pointer" src={currentProject.image} alt={currentProject.title} onClick={() => openModal(currentProject.image)} />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-white mb-2">{currentProject.title}</h3>
                            <p className="text-gray-300 mb-4">
                                {currentProject.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Кнопки навигации */}
            <div className="flex justify-center mt-4 space-x-4">
                <button onClick={handlePrev} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                    Назад
                </button>
                <button onClick={handleNext} className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                    Вперед
                </button>
            </div>

            <ImageModal imageUrl={selectedImage} onClose={closeModal} />
        </div>
    );
};

export default Portfolio;