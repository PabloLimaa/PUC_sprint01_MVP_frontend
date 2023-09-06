
/*
  --------------------------------------------------------------------------------------
  Função para adicionar um novo comentário  
  --------------------------------------------------------------------------------------
*/

const inputName = document.getElementById('input__nome');
const textComment = document.getElementById('input__text');
const form = document.getElementById('formulario');
const Comment__post = document.getElementById('Comment__post');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let d = document.createElement('div');
    d.classList = 'div__scroll__comentarios Comment__post';
    d.innerHTML = `<h5><strong>${inputName.value}</strong></h5> <p>${textComment.value}</p> <img src="https://cdn-icons-png.flaticon.com/512/126/126468.png" width="15px" height="15px">`;
    Comment__post.appendChild(d);
    inputName.value = "";
    textComment.value = "";
    inputName.focus();
});
