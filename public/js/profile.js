async function loadUser() {
    try {
        const response = await fetch('/api/user');
        if (!response.ok) {
            window.location.href = '/login.html';
            return;
        }
        const data = await response.json();
        const email = data.email;

        document.getElementById('userEmail').textContent = email;

        const avatarImg = document.getElementById('avatar');
        avatarImg.src = `https://i.pravatar.cc/150?u=${encodeURIComponent(email)}`;

        const banner = document.getElementById('simulationBanner');
        document.getElementById('bannerEmail').textContent = email;
        banner.style.display = 'flex';

    } catch (error) {
        console.error('Errore nel caricamento utente:', error);
        window.location.href = '/login.html';
    }
}

function logout() {
    window.location.href = '/logout';
}

window.addEventListener('DOMContentLoaded', loadUser);