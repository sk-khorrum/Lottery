// Firebase কনফিগারেশন
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Firebase ইনিশিয়ালাইজ করা
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// লগইন ফর্ম সাবমিট হবার সময়
function login(event) {
    event.preventDefault(); // ফর্ম সাবমিট না হওয়া পর্যন্ত পেজ রিলোড হবে না

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Firebase Authentication দিয়ে লগইন
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("লগইন সফল!");
            closeLoginModal();  // পপ-আপ বন্ধ করা
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("লগইন ব্যর্থ! " + errorMessage);
        });
}

// লগইন পপ-আপ বন্ধ করা
function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
}

// "এখনই খেলুন" বাটনে ক্লিক করলে
function playNow() {
    alert("এখনই খেলুন! আপনার প্রিয় খেলাটি বেছে নিন।");
}

// পপ-আপ যখন লোড হবে, তখন স্বয়ংক্রিয়ভাবে দেখানো হবে
window.onload = function() {
    document.getElementById("loginModal").style.display = "block";
};
