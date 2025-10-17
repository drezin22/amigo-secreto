let amigos = [];

function adicionar() {
  const input = document.getElementById('nome-amigo');
  const nome = input.value.trim();
  const lista = document.getElementById('lista-amigos');

  if (!nome) {
    alert('Digite um nome válido.');
    return;
  }
  if (amigos.includes(nome)) {
    alert('Esse nome já foi adicionado.');
    input.value = '';
    return;
  }

  amigos.push(nome);
  lista.textContent = amigos.join(', ');
  input.value = '';
  input.focus();
}

function sortear() {
  if (amigos.length < 4) {
    alert('Adicione pelo menos 4 amigos para sortear.');
    return;
  }

  embaralha(amigos);

  const sorteio = document.getElementById('lista-sorteio');
  sorteio.innerHTML = '';

  for (let i = 0; i < amigos.length; i++) {
    const atual = amigos[i];
    const proximo = (i === amigos.length - 1) ? amigos[0] : amigos[i + 1]; // último → primeiro
    sorteio.innerHTML += `${atual} --> ${proximo}<br>`;
  }
}

function embaralha(lista) {
  for (let i = lista.length; i; i--) {
    const r = Math.floor(Math.random() * i);
    [lista[i - 1], lista[r]] = [lista[r], lista[i - 1]];
  }
}

function reiniciar() {
  amigos = [];
  document.getElementById('lista-amigos').innerHTML = '';
  document.getElementById('lista-sorteio').innerHTML = '';
}