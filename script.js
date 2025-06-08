
class Carousel {
    constructor() {
        this.currentSlide = 0;
        this.slides = [
            {
                image: 'slide1.jpg',
                description: '旅行照片 - 巴黎'
            },
            {
                image: 'slide2.jpg',
                description: '工作照片'
            },

        ];
        
        this.init();
    }

    init() {
        this.container = document.querySelector('.carousel-container');
        this.createSlides();
        this.createDots();
        this.startAutoPlay();
    }

    createSlides() {
        this.slides.forEach((slide, index) => {
            const slideElement = document.createElement('div');
            slideElement.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
            slideElement.innerHTML = `
                <img src="${slide.image}" alt="轮播图 ${index + 1}">
                <p class="slide-description">${slide.description}</p>
            `;
            this.container.appendChild(slideElement);
        });
    }


}


document.addEventListener('DOMContentLoaded', () => {
    new Carousel();
});


ScrollReveal().reveal('.section-title', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    duration: 1000
});

ScrollReveal().reveal('.skill-card', {
    delay: 200,
    interval: 200,
    distance: '20px',
    origin: 'bottom',
    duration: 800
});


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
});

const portfolioItems = [
    {
        title: '项目一',
        description: '这是一个使用React开发的项目',
        image: 'https://via.placeholder.com/300',
        link: '#'
    },
    {
        title: '项目二',
        description: '这是一个使用Vue开发的项目',
        image: 'https://via.placeholder.com/300',
        link: '#'
    }

];


const portfolioGrid = document.querySelector('.portfolio-grid');
portfolioItems.forEach(item => {
    const portfolioCard = document.createElement('div');
    portfolioCard.className = 'portfolio-card';
    portfolioCard.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="portfolio-info">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <a href="${item.link}" target="_blank">查看详情</a>
        </div>
    `;
    portfolioGrid.appendChild(portfolioCard);
}); 