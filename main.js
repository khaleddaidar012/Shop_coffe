let search = document.querySelector('.search-box')

document.querySelector('#search-icon').onclick =()=>{
    search.classList.toggle('active');
    navebar.classList.remove('active');
}
let navebar = document.querySelector('.navbar')

document.querySelector('#menu-icon').onclick =()=>{
    navebar.classList.toggle('active');
    search.classList.remove('active');
}
window.onscroll =() => {

    search.classList.remove('active');
    navebar.classList.remove('active');

}


let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow',window.scrollY > 0)
});