document.addEventListener('DOMContentLoaded', () => {
    const accountButton = document.getElementById('account-button');
    const loginMenu = document.getElementById('login-menu');

    accountButton.addEventListener('click', (event) => {
        event.stopPropagation();
        if (loginMenu.style.display === 'none' || loginMenu.style.display === '') {
            loginMenu.style.display = 'block';
        } else {
            loginMenu.style.display = 'none';
        }
    });

    document.addEventListener('click', (event) => {
        if (!loginMenu.contains(event.target) && event.target !== accountButton) {
            loginMenu.style.display = 'none';
        }
    });
});