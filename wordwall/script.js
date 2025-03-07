function showNotification(message) {
    let notification = document.createElement('div');
    notification.textContent = message;
    Object.assign(notification.style, {
        position: 'fixed',
        top: '-50px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: '#333',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        transition: 'top 0.5s ease-in-out',
        zIndex: '9999'
    });

    document.body.appendChild(notification);
    setTimeout(() => notification.style.top = '10px', 100);
    setTimeout(() => {
        notification.style.top = '-50px';
        setTimeout(() => notification.remove(), 500);
    }, 2000);
}

document.querySelectorAll('.js-paid-required.options-login-required').forEach(el => el.remove());
showNotification("Premium Settings Enabled");
