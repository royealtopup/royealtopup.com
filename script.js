function showPage(pageId) {
    // সব কন্টেন্ট সেকশন লুকিয়ে ফেলা
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(sec => sec.style.display = 'none');
    
    // নির্দিষ্ট সেকশন দেখানো
    const target = document.getElementById(pageId);
    if(target) target.style.display = 'block';
}

function handleLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    
    if(user === "admin" && pass === "1234") {
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('main-site').style.display = 'block';
    } else {
        alert("Wrong Username or Password!");
    }
}
