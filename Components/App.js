const form = document.querySelector('.form');
const navigation = document.querySelector('.banner__navigation');

/* Хотел сделать гамбургер меню, но это довольго сильно усложняет код и вёрстку 
window.addEventListener('resize', () => {
    if (window.innerWidth <= 920) {
        navigation.classList.add('banner__navigation_off')
    } else {
        navigation.classList.remove('banner__navigation_off')
    }
  }); */

form.addEventListener('submit', (event) => {
    event.preventDefault()
    alert('The message has been sent')
})
