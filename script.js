function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
    });
});

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + '+';
    }, 30);
}

let countersStarted = false;
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !countersStarted) {
            countersStarted = true;
            animateCounter(document.getElementById('counter1'), 5000);
            animateCounter(document.getElementById('counter2'), 15);
            animateCounter(document.getElementById('counter3'), 8);
            animateCounter(document.getElementById('counter4'), 20);
        }
    });
});
observer.observe(document.querySelector('.stats'));

function submitForm(e) {
    e.preventDefault();
    document.getElementById('successMsg').style.display = 'block';
    document.getElementById('bookingForm').reset();
    setTimeout(() => {
        document.getElementById('successMsg').style.display = 'none';
    }, 5000);
}

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
    } else {
        navbar.style.padding = '15px 0';
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});