// Modal Elements
const loginModal = document.getElementById('loginModal');
const loginBtn = document.getElementById('loginBtn');
const closeModal = document.getElementById('closeModal');

// Open Modal
loginBtn.onclick = function() {
    loginModal.style.display = 'flex';
}

// Close Modal
closeModal.onclick = function() {
    loginModal.style.display = 'none';
}

// Close Modal when clicking outside
window.onclick = function(event) {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
}

// Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('লগইন সফল');
    loginModal.style.display = 'none';
});
