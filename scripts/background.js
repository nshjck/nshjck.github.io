/* Copyright mldkyt 2024
This script was written by mldkyt originally in 2016, updated in 2024 to
support new browsers. You are allowed to modify and distribute this
script without the owner's approval, although it is necessary to keep
this copyright intact and append modifications you made below this
comment. You can append anything below this statement.

BISEXUAL... RAIN... BISEXUAL.... RAIN....
*/
function rain() {
    var colours = ['#D60270', '#9B4F96', '#0038A8']
    var canvas = document.getElementById('background');
    var context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context.fillStyle = 'black';
    var stars = [];
    function newStar() {
        stars.push({
            x: Math.floor(Math.random()*canvas.width),
            y: 0,
        });
        stars = stars.filter(function(x) {
            return x.x < canvas.width * 2 || x.y < canvas.height * 2;
        });
    }
    function draw() {
        context.fillStyle = 'black';
        context.fillRect(0, 0, canvas.width, canvas.height);
        for (var index = 0; index < stars.length; index++) {
            var star = stars[index];
            star.y += 6;
            context.fillStyle = colours[Math.floor(Math.random()*colours.length)];
            context.fillRect(Math.round(star.x / 2) * 2, Math.round(star.y / 2) * 2, 2, 2);
        }
    }

    setInterval(newStar, 8);
    document.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    document.onscroll = function () {
        const scrollPos = window.scrollY;
        canvas.style.transform = `translateY(${scrollPos}px)`;
    };

    setInterval(draw, 9);
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
    for (var index = 0; index < 100; index++) {
        newStar();
        draw();
    }
}

if (document.cookie.indexOf("rain") === -1) {
    console.log("Its raining :3");
    document.cookie = "rain=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/; SameSite=Strict";
}

if (document.cookie.indexOf("rain=true") !== -1) {
    console.log("rain ;3");
    rain();
}