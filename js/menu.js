let isMobile = {
    Android: function() { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function() { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function() { return navigator.userAgent.match(/IEMobile/i); },
    any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};

let nav = document.querySelector('.navigation');
if (isMobile.any()) {
    nav.classList.add('touch');
    let arrow = document.querySelectorAll('.menu-arrow');
    for (let i of arrow) {
        let thisLink = i.previousElementSibling;
        let subMenu = i.nextElementSibling;
        thisLink.classList.add('navigation__link-parent');
        
        i.addEventListener('click', function() {
           subMenu.classList.toggle('open');
           i.classList.toggle('active');
        });
    }
} else {
    nav.classList.add('mouse');
}