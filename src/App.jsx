import BusinessCard from './components/BusinessCard';
import AnimatedBackground from './components/AnimatedBackground';
import Portfolio from './components/Portfolio';
import FloatingContactButtons from './components/FloatingContactButtons';
import { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from './hooks/useMediaQuery'; // Импортируем хук

// --- ЕДИНЫЙ ИСТОЧНИК ДАННЫХ ---
const developerData = {
    name: "Михаил Носенко",
    title: "Senior Backend Symfony Developer",
    bio: "Создаю многофункциональные и эффективные API на Symfony (PHP) на протяжении последних 6+ лет. Обширный опыт с системами телематики и различными протоколами передачи данных, включая EGTS. Могу разобраться почти с любым легаси-кодом в разумные сроки.",
    contact: {
        email: "mialex2013.am@gmail.com",
        telegram: "https://t.me/VLG_Mikhail_N"
    },
    skills: ["Symfony", "PHP 7+", "Flespi", "WebSocket", "PostgreSQL", "MySQL", "ClickHouse", "Docker", "Redis", "Linux", "Python", 'React']
};


function App() {
    const [isScrolled, setIsScrolled] = useState(false);

    // Создаем ref'ы для обеих секций: верхней и портфолио
    const topRef = useRef(null);
    const portfolioRef = useRef(null);
    const isDesktop = useMediaQuery('(min-width: 768px)'); // Используем хук здесь

    // 3. Используем useEffect для добавления слушателя события скролла
    useEffect(() => {
        const handleScroll = () => {
            // Устанавливаем isScrolled в true, если пользователь прокрутил страницу больше чем на 50px
            setIsScrolled(window.scrollY > 50);
        };

        // Добавляем слушатель, когда компонент монтируется
        window.addEventListener('scroll', handleScroll);

        // Убираем слушатель, когда компонент размонтируется — это важно для производительности!
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Пустой массив зависимостей означает, что эффект выполнится один раз

    // 4. Создаем единую функцию-переключатель для скролла
    const handleScrollToggle = () => {
        if (isScrolled) {
            // Если страница прокручена, скроллим вверх
            topRef.current?.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Если мы наверху, скроллим вниз
            portfolioRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="relative bg-gray-900 text-white">
            {/* 1. Анимированный фон (на заднем плане) */}
            <div className="absolute inset-0 z-0">
                <AnimatedBackground />
            </div>

            {/* 2. Плавающие кнопки (поверх всего) */}
            <FloatingContactButtons contact={developerData.contact} />

            {/* 3. Основной контент (прокручиваемый) */}
            <main className="relative z-10">
                {/* Секция с визиткой */}
                <section ref={topRef} className="relative min-h-screen flex items-center justify-center p-4">
                    <BusinessCard data={developerData} />
                    {isDesktop && (
                        <button
                            onClick={handleScrollToggle}
                            className={`absolute bottom-10 left-1/2 -translate-x-1/2 text-white opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300 z-10 ${!isScrolled ? 'animate-bounce' : ''}`}
                            aria-label={isScrolled ? "Прокрутить вверх к началу" : "Прокрутить вниз к портфолио"}
                        >
                            {isScrolled ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5" />
                                </svg>
                            )}
                    </button>
                    )}
                </section>

                {/* Секция с портфолио */}
                <section ref={portfolioRef} className="py-1 backdrop-blur-sm">
                    <Portfolio />
                </section>
            </main>
        </div>
    );
}

export default App;