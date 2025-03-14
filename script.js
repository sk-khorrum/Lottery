// ফাংশন যা লগইন পপ-আপ দেখাবে
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
}

// ফাংশন যা লগইন পপ-আপ বন্ধ করবে
function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// লগইন ফর্মের জন্য
function login(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (email && password) {
        alert('লগইন সফল');
        closeLoginModal();
    } else {
        alert('অনুগ্রহ করে ইমেইল এবং পাসওয়ার্ড দিন');
    }
}
