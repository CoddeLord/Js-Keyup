const form = document.querySelector('.signopForm');
const meesage = document.querySelector('.message');
const usernamepattrn = /^[a-z]{6,10}$/;

 


form.addEventListener('submit', e => {
    e.preventDefault();
    const username = form.username.value; // formi içinddeki name'i username olanı bul 


    if (usernamepattrn.test(username)) {
        meesage.textContent = 'Başarılı'
    } else {
        meesage.textContent = 'Hepsi küçük ve 6 ile 10 karakter arasında olmalı '
    }
});



form.username.addEventListener('keyup', e => {
    if(usernamepattrn.test(e.target.value)){
        form.username.setAttribute('class', 'succes');
    }else{
        form.username.setAttribute('class', 'eror');

    }
});

