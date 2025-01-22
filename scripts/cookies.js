if (!document.cookie.includes('rain=')) {
    if (screen.width <= 700) {
        document.cookie = 'rain=false; expires=Fri, 31 Dec 9999 23:59:59 GMT';
    } else {
        document.cookie = 'rain=true; expires=Fri, 31 Dec 9999 23:59:59 GMT';
    }
}

if (document.cookie.includes('rain=true')) {
    document.getElementById('rain_switch').checked = true;
} else {
    document.getElementById('rain_switch').checked = false;
}


function weather() {
    if (document.getElementById('rain_switch').checked) {
        document.cookie = 'rain=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/; SameSite=Strict';
    } else {
        document.cookie = 'rain=false; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/; SameSite=Strict';
    }

    document.location.reload();
};