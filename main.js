const ativadorToast = document.querySelector('.esgotado');
const mensagem = document.getElementById('mensagem-toast')
let soma = 0
let listaProdutos = ''
const produtos = document.querySelector('lista-produto');

if(ativadorToast) {
  ativadorToast.addEventListener('click', function(){
    const toast = new bootstrap.Toast(mensagem);
    toast.show();
  })
}


$('.adicionar').click(function(){

  const produto = ($(this).parent().find('h4').text());
  let lista = `<li class="dropdown-item">${produto}</li>`

  listaProdutos += lista

  console.log(listaProdutos)
  document.querySelector('#lista-produto').innerHTML = listaProdutos

  soma += 1

    if(soma < 2) {
      alert(`${soma} produto adicionado ao carrinho!`);
    } else {
      alert(`${soma} produtos adicionados ao carrinho!`);
    }

})