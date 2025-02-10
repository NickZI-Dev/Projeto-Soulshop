const ativadorToast = document.querySelector('.esgotado');
const mensagem = document.getElementById('mensagem-toast')
let soma = 0


if(ativadorToast) {
  ativadorToast.addEventListener('click', function(){
    const toast = new bootstrap.Toast(mensagem);
    toast.show();
  })
}


$('.adicionar').click(function(){

  soma += 1

    if(soma < 2) {
      alert(`${soma} produto adicionado ao carrinho!`);
    } else {
      alert(`${soma} produtos adicionados ao carrinho!`);
    }

})