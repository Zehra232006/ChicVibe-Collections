const heeader = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onClick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}


// panel js

document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.getElementById('menu-icon');
    var slidingPanel = document.getElementById('slidingPanel');
    var closePanel = document.getElementById('closePanel');

    // Toggle sliding panel visibility
    menuIcon.addEventListener('click', function() {
        slidingPanel.classList.toggle('open');
    });

    closePanel.addEventListener('click', function() {
        slidingPanel.classList.remove('open');
    });

    // Close the panel if clicked outside
    document.addEventListener('click', function(event) {
        if (!slidingPanel.contains(event.target) && event.target !== menuIcon) {
            slidingPanel.classList.remove('open');
        }
    });
});
