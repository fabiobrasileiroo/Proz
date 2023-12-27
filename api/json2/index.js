const url = 'https://lojafalsaapi.com/produtos?ordenar=dec&limite=20';

const response = await fetch(url);

if (response.ok) {
  const produtos = await response.json();

  // Exibe a lista de produtos
  for (const produto of produtos) {
    console.log(produto.nome);
  }
} else {
  console.log('Erro ao fazer a requisição');
}
