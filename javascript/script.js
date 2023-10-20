const body = document.body;
const modeToggle = document.querySelector('#mode-toggle');

modeToggle.addEventListener('click', () => {

   
     var click = body.classList.toggle('dark-mode');

});

body.classList.add('dark-mode');

