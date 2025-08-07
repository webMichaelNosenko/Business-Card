// src/components/AnimatedBackground.jsx

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const AnimatedBackground = () => {
    // Эта функция будет вызвана один раз при инициализации частиц
    const particlesInit = useCallback(async (engine) => {
        // Здесь мы загружаем движок частиц
        await loadSlim(engine);
    }, []);

    // Объект конфигурации для частиц. Здесь вся магия!
    const particlesOptions = {
        background: {
            color: {
                value: "#1a202c", // Цвет фона, соответствующий нашей теме (gray-900)
            },
        },
        fpsLimit: 60, // Ограничение FPS для экономии ресурсов
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse", // Частицы будут отталкиваться от курсора
                },
                resize: true,
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#0891b2", // Цвет частиц (cyan-600)
            },
            // Это линии, соединяющие частицы - наши "сигналы"
            links: {
                color: "#ffffff", // Цвет соединений
                distance: 150,    // Максимальное расстояние для соединения
                enable: true,
                opacity: 0.1,
                width: 1,
            },
            // Это сами частицы - наши "датчики"
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce", // Частицы будут отскакивать от краев экрана
                },
                random: false,
                speed: 1, // Скорость движения
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 100, // Количество частиц
            },
            opacity: {
                value: 0.3,
            },
            shape: {
                type: "circle", // Форма частиц
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesOptions}
        />
    );
};

export default AnimatedBackground;