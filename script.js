const heartEmojis = ['❤️', '💖', '💘', '💝', '💗', '💓', '💕', '💞'];
const heartColors = ['#ff2e2e', '#ff4747', '#ff7070', '#ff9797', '#ffadad'];

// Глобальная переменная для хранения настроек particles
let particlesSettings = {
    normal: {
        particles: {
            number: {
                value: 60
            },
            opacity: {
                value: 0.5
            },
            size: {
                value: 4
            },
            line_linked: {
                opacity: 0.2
            },
            move: {
                speed: 1
            }
        }
    },
    active: {
        particles: {
            number: {
                value: 120
            },
            opacity: {
                value: 0.7
            },
            size: {
                value: 5
            },
            line_linked: {
                opacity: 0.4
            },
            move: {
                speed: 1.5
            }
        }
    }
};

// Инициализация particles.js
document.addEventListener('DOMContentLoaded', function() {
    // Основная конфигурация particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": particlesSettings.normal.particles.number.value,
                "density": {
                    "enable": true,
                    "value_area": 900
                }
            },
            "color": {
                "value": ["#ff2e2e", "#ff4747", "#ff7070", "#ff9797", "#ffadad", "#ffffff"]
            },
            "shape": {
                "type": ["circle", "triangle", "star", "polygon"],
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": particlesSettings.normal.particles.opacity.value,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 0.8,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": particlesSettings.normal.particles.size.value,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 120,
                "color": "#ff4747",
                "opacity": particlesSettings.normal.particles.line_linked.opacity,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": particlesSettings.normal.particles.move.speed,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 800,
                    "rotateY": 1500
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 200,
                    "line_linked": {
                        "opacity": 0.8
                    }
                },
                "bubble": {
                    "distance": 150,
                    "size": 8,
                    "duration": 2,
                    "opacity": 0.8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 150,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "background": {
            "color": "#0A0026",
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
        }
    });

    // Добавим эффекты для конверта
    initEnvelopeEffects();
});

// Функция для обновления настроек particles.js
function updateParticles(isActive) {
    const settings = isActive ? particlesSettings.active : particlesSettings.normal;
    
    if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
        const pJS = window.pJSDom[0].pJS;
        
        // Обновляем количество частиц
        if (isActive && pJS.particles.array.length < settings.particles.number.value) {
            for (let i = pJS.particles.array.length; i < settings.particles.number.value; i++) {
                pJS.particles.array.push(new pJS.fn.particle(
                    pJS.particles.color.value,
                    pJS.particles.opacity.value,
                    {
                        'x': Math.random() * pJS.canvas.w,
                        'y': Math.random() * pJS.canvas.h
                    }
                ));
            }
        }
        
        // Обновляем настройки частиц
        pJS.particles.opacity.value = settings.particles.opacity.value;
        pJS.particles.size.value = settings.particles.size.value;
        pJS.particles.line_linked.opacity = settings.particles.line_linked.opacity;
        pJS.particles.move.speed = settings.particles.move.speed;
        
        // Обновляем частицы
        pJS.fn.particlesRefresh();
    }
}

function initEnvelopeEffects() {
    // Удаляем предыдущие обработчики событий, которые могут конфликтовать 
    const mailWrapper = document.getElementById('mailWrapper');
    
    // Упрощенный эффект при наведении - только через CSS
    // Удаляем все сложные интерактивные эффекты перспективы и 3D трансформации
}

// Функция анимации шариков
function animateBalloons() {
    const balloons = document.querySelectorAll('.balloon-svg');
    
    balloons.forEach((balloon, index) => {
        // Случайные параметры для анимации
        const duration = 3 + Math.random() * 2;
        const delay = Math.random();
        const amplitude = 5 + Math.random() * 5;
        
        // Добавляем стили с анимацией
        balloon.style.animation = `float-balloon ${duration}s ease-in-out ${delay}s infinite alternate`;
        
        // Добавляем keyframe анимацию, если её ещё нет
        if (!document.querySelector('#balloon-animation')) {
            const style = document.createElement('style');
            style.id = 'balloon-animation';
            style.textContent = `
                @keyframes float-balloon {
                    0% { transform: translateY(0) rotate(${-5 + Math.random() * 10}deg); }
                    100% { transform: translateY(-${amplitude}px) rotate(${-5 + Math.random() * 10}deg); }
                }
            `;
            document.head.appendChild(style);
        }
    });
}

// Функция для создания эффекта свечения для имени
function createNameGlow() {
    const nameSpotlight = document.querySelector('.name-spotlight');
    if (nameSpotlight) {
        const nameGlow = document.querySelector('.name-glow');
        
        // Добавляем обработчик для движения свечения за курсором
        nameSpotlight.addEventListener('mousemove', (e) => {
            const rect = nameSpotlight.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            nameGlow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,105,180,0.4) 0%, rgba(255,105,180,0) 70%)`;
            nameGlow.style.opacity = '1';
        });
        
        // Возвращаем к исходному состоянию при выходе курсора
        nameSpotlight.addEventListener('mouseleave', () => {
            nameGlow.style.background = 'radial-gradient(ellipse at center, rgba(255,105,180,0.3) 0%, rgba(255,105,180,0) 70%)';
            nameGlow.style.opacity = '0.7';
        });
    }
}

// Функция для анимации специальных слов
function animateSpecialWords() {
    const specialWords = document.querySelectorAll('.special-word');
    
    specialWords.forEach((word, index) => {
        // Добавляем небольшую задержку для каждого слова
        const delay = Math.random() * 3 + 1;
        const duration = Math.random() * 2 + 2;
        
        // Добавляем пульсирующую анимацию
        word.style.animation = `specialWordPulse ${duration}s ease-in-out ${delay}s infinite alternate`;
        
        // Добавляем keyframe анимацию, если её ещё нет
        if (!document.querySelector('#special-word-animation')) {
            const style = document.createElement('style');
            style.id = 'special-word-animation';
            style.textContent = `
                @keyframes specialWordPulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Добавляем обработчик событий для дополнительного эффекта
        word.addEventListener('mouseenter', () => {
            createMiniConfetti(word);
        });
    });
}

// Функция для создания мини-конфетти вокруг элемента при наведении
function createMiniConfetti(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Создаем 5 мини-конфетти
    for (let i = 0; i < 5; i++) {
        const confetti = document.createElement('div');
        const size = Math.random() * 5 + 3;
        const angle = Math.random() * 360;
        const distance = Math.random() * 30 + 20;
        const duration = Math.random() * 1 + 0.5;
        
        // Вычисляем начальную позицию (вокруг элемента)
        const startX = centerX - size / 2;
        const startY = centerY - size / 2;
        
        // Вычисляем конечную позицию (разлет в стороны)
        const endX = startX + Math.cos(angle * Math.PI / 180) * distance;
        const endY = startY + Math.sin(angle * Math.PI / 180) * distance;
        
        // Стилизуем конфетти
        confetti.style.cssText = `
            position: fixed;
            left: ${startX}px;
            top: ${startY}px;
            width: ${size}px;
            height: ${size}px;
            background-color: ${getRandomColor()};
            border-radius: 50%;
            z-index: 9999;
            opacity: 0.8;
            pointer-events: none;
        `;
        
        document.body.appendChild(confetti);
        
        // Анимируем разлет и исчезновение
        confetti.animate([
            { transform: 'scale(0.3)', opacity: 1, left: `${startX}px`, top: `${startY}px` },
            { transform: 'scale(1)', opacity: 0, left: `${endX}px`, top: `${endY}px` }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)'
        }).onfinish = () => confetti.remove();
    }
}

// Функция получения случайного цвета
function getRandomColor() {
    const colors = ['#FF1493', '#FF69B4', '#FFB6C1', '#FFA500', '#FFFF00', '#87CEFA'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Функция для создания плавающих частиц внутри письма
function createFloatingParticles() {
    const letterContent = document.querySelector('.letter-content');
    
    if (!letterContent) return;
    
    // Создаем контейнер для частиц
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'floating-particles';
    particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
        z-index: 1;
    `;
    
    letterContent.appendChild(particlesContainer);
    
    // Создаем 15 плавающих частиц
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 6 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const opacity = Math.random() * 0.3 + 0.1;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            position: absolute;
            left: ${posX}%;
            top: ${posY}%;
            width: ${size}px;
            height: ${size}px;
            background-color: #FF69B4;
            border-radius: 50%;
            opacity: ${opacity};
            filter: blur(${size / 2}px);
            z-index: 1;
        `;
        
        particlesContainer.appendChild(particle);
        
        // Анимируем частицы
        particle.animate([
            { transform: 'translate(0, 0)' },
            { transform: `translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px)` },
            { transform: 'translate(0, 0)' }
        ], {
            duration: duration * 1000,
            delay: delay * 1000,
            iterations: Infinity,
            easing: 'ease-in-out'
        });
    }
}

// Функция для создания эффекта большого засвета
function createBigGlow() {
  const glowContainer = document.createElement('div');
  glowContainer.className = 'big-glow-effect';
  glowContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 70%);
    z-index: 1000;
    opacity: 0;
    pointer-events: none;
    animation: bigGlowAnimation 0.8s ease-out forwards;
  `;
  
  document.body.appendChild(glowContainer);
  
  // Добавляем анимацию, если её ещё нет
  if (!document.querySelector('#big-glow-animation')) {
    const style = document.createElement('style');
    style.id = 'big-glow-animation';
    style.textContent = `
      @keyframes bigGlowAnimation {
        0% { opacity: 0; transform: scale(0.5); }
        30% { opacity: 1; transform: scale(1.2); }
        100% { opacity: 0; transform: scale(1.5); }
      }
    `;
    document.head.appendChild(style);
  }
  
  // Удаляем эффект после завершения анимации
  setTimeout(() => {
    glowContainer.remove();
  }, 800);
}

// Обновлённая функция открытия письма
function openLetter() {
    const letter = document.getElementById("letter");
    const mailWrapper = document.getElementById("mailWrapper");
    
    // Создаем эффект большого засвета сразу
    createBigGlow();
    
    // Показываем письмо с небольшой задержкой после засвета
    setTimeout(() => {
        letter.classList.add('show');
        mailWrapper.classList.add('hide');
        
        // Анимируем элементы внутри письма после открытия
        setTimeout(() => {
            // Создаем плавающие частицы в фоне письма
            createFloatingParticles();
            
            // Создаём эффект свечения для имени
            createNameGlow();
            
            // Анимируем специальные слова
            animateSpecialWords();
            
            // Добавляем класс анимации для элементов письма
            document.querySelectorAll('.letter-content > *').forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('element-shown');
                }, index * 150);
            });
            
            // Добавляем эффект движения к тексту
            document.querySelectorAll('.animated-text').forEach((text, index) => {
                text.style.transitionDelay = `${index * 0.1}s`;
                text.style.opacity = '1';
                text.style.transform = 'translateY(0)';
            });
        }, 300);
    }, 100); // Небольшая задержка после засвета
    
    // Добавляем интерактивные эффекты к карточке сообщения
    const messageCard = document.querySelector('.message-card');
    if (messageCard) {
        messageCard.addEventListener('mouseenter', () => {
            messageCard.style.transform = 'translateY(-8px) rotate(1deg) scale(1.02)';
            messageCard.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        messageCard.addEventListener('mouseleave', () => {
            messageCard.style.transform = '';
            messageCard.style.boxShadow = '';
        });
        
        // Добавляем эффект "клика" для карточки
        messageCard.addEventListener('click', () => {
            // Создаем эффект волны при клике
            const ripple = document.createElement('div');
            ripple.className = 'ripple';
            messageCard.appendChild(ripple);
            
            const rect = messageCard.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height) * 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                top: ${-size/2 + rect.height/2}px;
                left: ${-size/2 + rect.width/2}px;
                background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
                border-radius: 50%;
                transform: scale(0);
                opacity: 0;
                animation: ripple-effect 1s ease-out;
                pointer-events: none;
            `;
            
            if (!document.querySelector('#ripple-animation')) {
                const style = document.createElement('style');
                style.id = 'ripple-animation';
                style.textContent = `
                    @keyframes ripple-effect {
                        0% { transform: scale(0); opacity: 0.8; }
                        100% { transform: scale(1); opacity: 0; }
                    }
                `;
                document.head.appendChild(style);
            }
            
            // Удаляем эффект после анимации
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    }
    
    // Закрытие письма при клике вне его после 500 мс задержки
    setTimeout(() => {
        document.addEventListener('click', (e) => {
            if (!letter.contains(e.target) && !mailWrapper.contains(e.target)) {
                letter.classList.remove('show');
                mailWrapper.classList.remove('hide');
                
                // Удаляем плавающие частицы при закрытии
                const floatingParticles = document.querySelector('.floating-particles');
                if (floatingParticles) {
                    floatingParticles.remove();
                }
            }
        });
    }, 500);
}

function startHeartRain() {
    // Проверяем, работаем ли на мобильном устройстве
    const isMobile = window.innerWidth < 600 || window.innerHeight < 600;
    
    // Уменьшаем количество сердец на мобильных устройствах
    const initialHearts = isMobile ? 6 : 12;
    const interval = isMobile ? 600 : 400;
    const maxHearts = isMobile ? 15 : 40; // Максимальное количество сердец на экране
    
    // Определяем, использовать ли SVG или эмодзи
    // На более мощных устройствах используем SVG, на слабых - эмодзи
    const useSVG = !isMobile;
    
    // Начальный залп сердец
    for (let i = 0; i < initialHearts; i++) {
        setTimeout(() => {
            if (useSVG) {
                createSVGHeart();
            } else {
                createEmojiHeart();
            }
        }, i * 150);
    }
    
    // Переменная для хранения ID интервала
    let heartRainInterval;
    
    // Продолжающийся дождь сердец с ограничением
    heartRainInterval = setInterval(() => {
        // Проверяем количество сердец на экране
        const currentHearts = document.querySelectorAll('#heartRain > *').length;
        if (currentHearts < maxHearts) {
            if (useSVG) {
                createSVGHeart();
            } else {
                createEmojiHeart();
            }
        }
    }, interval);
    
    // Очищаем интервал при удалении письма
    document.addEventListener('click', function cleanupHeartRain() {
        if (!document.getElementById('letter').classList.contains('show')) {
            clearInterval(heartRainInterval);
            document.removeEventListener('click', cleanupHeartRain);
            // Очищаем все сердца при закрытии
            document.getElementById('heartRain').innerHTML = '';
        }
    });
}

function createEmojiHeart() {
    const heartContainer = document.getElementById("heartRain");
    const heart = document.createElement("span");
    const isMobile = window.innerWidth < 600 || window.innerHeight < 600;
    
    heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.left = Math.random() * window.innerWidth + "px";
    
    // Меньший размер и скорость анимации на мобильных
    heart.style.fontSize = (Math.random() * (isMobile ? 12 : 16) + (isMobile ? 10 : 14)) + "px";
    heart.style.animationDuration = (Math.random() * (isMobile ? 3 : 4) + (isMobile ? 2 : 3)) + "s";
    
    heart.style.filter = `hue-rotate(${Math.random() * 40 - 20}deg)`;
    heartContainer.appendChild(heart);

    // Меньшее время жизни на мобильных
    const lifeTime = isMobile ? 4000 : 7000;
    setTimeout(() => heart.remove(), lifeTime);
}

function createSVGHeart() {
    const heartContainer = document.getElementById("heartRain");
    const isMobile = window.innerWidth < 600 || window.innerHeight < 600;
    
    // Создаем SVG элемент
    const heartSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    
    // Устанавливаем атрибуты SVG
    const size = Math.random() * (isMobile ? 12 : 20) + (isMobile ? 10 : 15);
    heartSvg.setAttribute("width", size);
    heartSvg.setAttribute("height", size);
    heartSvg.setAttribute("viewBox", "0 0 24 24");
    heartSvg.style.position = "absolute";
    heartSvg.style.left = Math.random() * window.innerWidth + "px";
    heartSvg.style.bottom = "100%";
    heartSvg.style.opacity = "0.9";
    
    // Создаем путь сердечка
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z");
    
    // Выбираем случайный цвет для сердечка
    const fillColor = heartColors[Math.floor(Math.random() * heartColors.length)];
    path.setAttribute("fill", fillColor);
    
    // Добавляем путь к SVG
    heartSvg.appendChild(path);
    
    // Добавляем стили для анимации
    const animDuration = (Math.random() * (isMobile ? 3 : 4) + (isMobile ? 2 : 3));
    heartSvg.style.animation = `fall ${animDuration}s linear`;
    
    // Добавляем сердечко на страницу
    heartContainer.appendChild(heartSvg);
    
    // Удаляем сердечко после падения
    const lifeTime = isMobile ? 4000 : 7000;
    setTimeout(() => heartSvg.remove(), lifeTime);
}

function createConfetti() {
    const colors = ['#FF1493', '#FF69B4', '#FFB6C1', '#FFC0CB', '#FFDBFD', '#87CEFA', '#FFEC8B'];
    const shapes = ['circle', 'square', 'triangle'];
    
    const container = document.createElement('div');
    container.className = 'confetti-container';
    container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        pointer-events: none;
        z-index: 998;
    `;
    document.body.appendChild(container);
    
    // Создаем 30 конфетти
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        const size = Math.random() * 10 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const posX = Math.random() * 100;
        const rotation = Math.random() * 360;
        
        confetti.style.cssText = `
            position: absolute;
            top: -50px;
            left: ${posX}%;
            width: ${size}px;
            height: ${size}px;
            background-color: ${color};
            transform: rotate(${rotation}deg);
            opacity: ${Math.random() * 0.4 + 0.6};
            ${shape === 'circle' ? 'border-radius: 50%;' : ''}
            ${shape === 'triangle' ? 'clip-path: polygon(50% 0%, 0% 100%, 100% 100%);' : ''}
            box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
            z-index: 999;
        `;
        
        container.appendChild(confetti);
        
        // Анимируем каждое конфетти
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 0.5;
        const endRotation = rotation + Math.random() * 720 - 360;
        const horizontalSwing = Math.random() * 150 - 75;
        
        confetti.animate([
            { 
                top: '-50px',
                transform: `rotate(${rotation}deg)`,
                opacity: 0
            },
            { 
                top: '10vh',
                transform: `rotate(${rotation + endRotation/3}deg)`,
                opacity: 1,
                offset: 0.1
            },
            { 
                top: `${Math.min(90, 50 + Math.random() * 40)}vh`,
                left: `calc(${posX}% + ${horizontalSwing}px)`,
                transform: `rotate(${endRotation}deg)`,
                opacity: 0
            }
        ], {
            duration: duration * 1000,
            delay: delay * 1000,
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            fill: 'forwards'
        });
        
        // Удаляем конфетти после окончания анимации
        setTimeout(() => {
            confetti.remove();
        }, (duration + delay) * 1000);
    }
    
    // Удаляем контейнер через некоторое время
    setTimeout(() => {
        container.remove();
    }, 6000);
}

// Функция для создания дождя из сердец
function createHeartRain() {
  const container = document.createElement('div');
  container.className = 'heart-rain';
  container.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    pointer-events: none;
    z-index: 999;
  `;
  document.body.appendChild(container);
  
  // Создаём 50 сердец
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      const size = Math.random() * 20 + 10;
      const posX = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 5 + 5;
      const opacity = Math.random() * 0.5 + 0.3;
      
      heart.innerHTML = '❤';
      heart.style.cssText = `
        position: absolute;
        top: -50px;
        left: ${posX}%;
        font-size: ${size}px;
        color: rgba(255, 20, 147, ${opacity});
        animation: heartFall ${duration}s ease-in ${delay}s forwards;
        text-shadow: 0 0 5px rgba(255, 20, 147, 0.3);
      `;
      
      container.appendChild(heart);
      
      // Удаляем сердце после завершения анимации
      setTimeout(() => {
        heart.remove();
      }, (duration + delay) * 1000);
    }, i * 100);
  }
  
  // Добавляем анимацию, если её ещё нет
  if (!document.querySelector('#heart-animation')) {
    const style = document.createElement('style');
    style.id = 'heart-animation';
    style.textContent = `
      @keyframes heartFall {
        0% {
          transform: translate(0, 0) rotate(0deg);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        100% {
          transform: translate(${Math.random() * 50 - 25}px, calc(100vh + 50px)) rotate(${Math.random() * 360}deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  // Удаляем контейнер через 10 секунд
  setTimeout(() => {
    container.remove();
  }, 15000);
}

// Добавляем обработчик события для клика по конверту
document.addEventListener('DOMContentLoaded', function() {
    const mailWrapper = document.getElementById('mailWrapper');
    if (mailWrapper) {
        mailWrapper.addEventListener('click', openLetter);
        
        // Добавляем эффект парения при наведении на конверт
        mailWrapper.addEventListener('mouseenter', () => {
            mailWrapper.style.transform = 'scale(1.05) translateY(-5px)';
            mailWrapper.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.4)';
        });
        
        mailWrapper.addEventListener('mouseleave', () => {
            mailWrapper.style.transform = '';
            mailWrapper.style.boxShadow = '';
        });
    }
    
    // Добавляем эффект "шевеления" для сердца при загрузке страницы
    const heartSvg = document.querySelector('.svg-heart');
    if (heartSvg) {
        heartSvg.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1.1)' },
            { transform: 'scale(1)' }
        ], {
            duration: 1500,
            iterations: Infinity,
            easing: 'ease-in-out'
        });
    }
});
