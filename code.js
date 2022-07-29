const body = document.body;
const searchBar = document.querySelector('.search');

let blurEl = document.createElement('span');

body.appendChild(blurEl);

searchBar.addEventListener('focus', ()=>{
    blurEl.classList.add('blur_effect');
    searchBar.classList.add('increase_width')
})

searchBar.addEventListener('blur', ()=>{
    blurEl.classList.remove('blur_effect');
    searchBar.classList.remove('increase_width')
})