const urlParams = new URLSearchParams(window.location.search);
        const username = urlParams.get('usuario');

        document.addEventListener('DOMContentLoaded', function() {
            if (username) {
                document.getElementById('welcomeMessage').textContent = '¡Bienvenido/a, ' + username + '!';
                document.getElementById('userLogged').textContent = username;
            } else {
                document.getElementById('welcomeMessage').textContent = 'Usuario no especificado';
            }
        });


        function clearInput(inputId) {
            document.getElementById(inputId).value = '';
        }

        
        function enableModificationFields() {
            const idInput = document.getElementById('modificacion-id');
            if (idInput.value.trim() !== '') {
                document.getElementById('modificacion-categoria').disabled = false;
                document.getElementById('modificacion-ano').disabled = false;
                document.getElementById('modificacion-descripcion').disabled = false;
            }
        }

        
        function resetModificationForm() {
            document.getElementById('modificacion-id').value = '';
            document.getElementById('modificacion-categoria').disabled = true;
            document.getElementById('modificacion-ano').disabled = true;
            document.getElementById('modificacion-descripcion').disabled = true;
            document.getElementById('modificacion-categoria').value = '';
            document.getElementById('modificacion-ano').value = '';
            document.getElementById('modificacion-descripcion').value = '';
        }