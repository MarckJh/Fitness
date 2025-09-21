document.querySelectorAll('a[href="index.html"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = 'index.html';
    });
});


document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const modal = document.getElementById('modal');
        const modalBody = document.getElementById('modal-body');
        if (link.textContent.trim() === "About") {
            modalBody.innerHTML = "<h2>About</h2><p>OYYYY MGA TORPEEEE GYM NA, ANONG KATAWAN YAN MUKANG bawal yan</p>";
        } else if (link.textContent.trim() === "Socials") {
            modalBody.innerHTML = "<h2>Socials</h2><p>Follow me on my Facebook</p>";
        }
        modal.style.display = "flex";
    });
});


document.getElementById('modal-close').onclick = function () {
    document.getElementById('modal').style.display = "none";
};
window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

document.getElementById('home-link').addEventListener('click', function (e) {
    e.preventDefault();
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = "<h2>Welcome Home!</h2><p>You are already on the Home page.</p>";
    modal.style.display = "flex";
});

document.querySelectorAll('a[data-transition]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const href = link.getAttribute('href');
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = href;
        }, 500);
    });
});