const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0)
});

// // JavaScript for toggling mobile menu
// document.getElementById('menu-icon').onclick = function() {
//     document.querySelector('.navmenu').classList.toggle('active');
// };

document.getElementById('menu-icon').onclick = function() {
    document.querySelector('.navmenu').classList.toggle('show');
};
