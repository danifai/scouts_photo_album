document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Eugenia' && password === '123'){
        let url = "admin.html?usuario=" + username;
        window.location.href = url;
    } else if (username === 'todos' && password === '456'){
        let url = "album.html?usuario=" + username;
        window.location.href = url;
    } else {
        document.getElementById('login-error').style.display = 'block';
        alert("Credenciales inválidas");
    }
});