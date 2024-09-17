// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in on scroll for sections
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.8;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('fade-in');
        } else {
            section.classList.remove('fade-in');
        }
    });
});

// Scale project cards on hover
const cards = document.querySelectorAll('.portfolio-card');
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});



// Show "Back to Top" button when scrolling down
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

// Fetch projects from the JSON file and display them
fetch('assets/data/projects.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const projectContainer = document.querySelector('.portfolio-grid');
        data.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('portfolio-card');
            projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.title} Image">
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">View Project</a>
            `;
            projectContainer.appendChild(projectCard);
        });
    })
    .catch(error => console.error('Error fetching the projects:', error));
    document.querySelector('.navbar-toggle').addEventListener('click', function() {
        document.querySelector('.navbar-menu').classList.toggle('active');
    }); 
