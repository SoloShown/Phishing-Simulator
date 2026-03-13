const form = document.getElementById('loginForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            resultDiv.style.display = 'block';
            resultDiv.innerHTML = `
                <div class="alert">
                    <h3>🔐 Security Awareness Training</h3>
                    <p>This was a phishing simulation.</p>
                    <p><strong>Email entered:</strong> ${data.email}</p>
                    <p><strong>Password entered:</strong> ${password}</p>
                    <p>Never enter your credentials on suspicious links.</p>
                    <button id="continueBtn" class="continue-btn">Continue to Profile</button>
                </div>
            `;

            document.getElementById('continueBtn').addEventListener('click', () => {
                window.location.href = '/profile.html';
            });
        } else {
            alert('Error: ' + data.error);
        }
    } catch (error) {
        console.error('Network error:', error);
        alert('Error connecting to the server.');
    }
});