function mostrarLista(id) {
  const listas = document.querySelectorAll('#listas ol'); // Seleciona todas as listas dentro da div #listas

  listas.forEach(lista => lista.style.display = 'none'); // Esconde todas as listas

  const listaSelecionada = document.getElementById(id); // Pega a lista selecionada
  listaSelecionada.style.display = 'block'; // Mostra a lista selecionada
}
// Código JavaScript
