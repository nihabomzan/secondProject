function toggleReadMore() {
    var moreContent = document.getElementById('more-content');
    var btn = document.getElementById('btn');
    if (moreContent.classList.contains('hidden')) {
        moreContent.classList.remove('hidden');
        btn.textContent = 'Read Less';
    } else {
        moreContent.classList.add('hidden');
        btn.textContent = 'Read More';
    }
}

// log in page
function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if (username === '' || password === '') {
        alert('Both fields are required.');
        return false;
    }
    
    alert('Login successful!');
    return true;
}


// to redirect into page
function redirectToIndex() {
    if (validateForm()) {
        window.location.href = 'index.html';
    }
}

// to redirect into login page
function redirectToLogin() {
    window.location.href = 'login.html';
    alert('Logged out!');
}
function redirectToForm() {
    window.location.href = 'form.html';
}
// alart
function message() {
    window.location.href = 'index.html';
    alert('submit sucessfully');
}