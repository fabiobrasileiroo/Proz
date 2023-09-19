produtos = []
anosNascimento = []

for i in range(5):
    produto = input(f"Digite o nome do produto {i + 1} (ou presione Enter para encerrar):")
    if produto:
        produtos.append(produto)
    else:
        break

for i in range(5):
    ano = input(f"Digite o ano de nascimento da pessoa {i+1} (ou pressione Enter para encerrar):")
    if ano:
        anosNascimento.append(int(ano))
    else:
        break

print("Produtos:")
print(produtos)

print("\nAnos de nascimento:")
print(anosNascimento)