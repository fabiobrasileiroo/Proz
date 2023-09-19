# Explicação do Código em Python

Aqui está uma explicação passo a passo do código em Python fornecido:

```python
# Inicialize os arrays vazios
produtos = []           # Cria uma lista vazia chamada "produtos" para armazenar nomes de produtos
anos_nascimento = []    # Cria uma lista vazia chamada "anos_nascimento" para armazenar anos de nascimento

# Peça ao usuário para inserir até 5 produtos
for i in range(5):      # Inicia um loop que permite ao usuário inserir até 5 produtos
    produto = input(f"Digite o nome do produto {i + 1} (ou pressione Enter para encerrar): ")
    if produto:         # Verifica se o usuário inseriu um nome de produto
        produtos.append(produto)  # Adiciona o nome do produto à lista "produtos"
    else:
        break           # Se o usuário pressionar Enter sem inserir nada, o loop é encerrado

# Peça ao usuário para inserir até 5 anos de nascimento
for i in range(5):      # Inicia um loop que permite ao usuário inserir até 5 anos de nascimento
    ano = input(f"Digite o ano de nascimento da pessoa {i + 1} (ou pressione Enter para encerrar): ")
    if ano:             # Verifica se o usuário inseriu um ano de nascimento
        anos_nascimento.append(int(ano))  # Converte e adiciona o ano de nascimento à lista "anos_nascimento"
    else:
        break           # Se o usuário pressionar Enter sem inserir nada, o loop é encerrado

# Imprima os arrays resultantes
print("Produtos:")
print(produtos)         # Imprime a lista de produtos inseridos pelo usuário

print("\nAnos de nascimento:")
print(anos_nascimento)  # Imprime a lista de anos de nascimento inseridos pelo usuário
```
[Codigo Colab]()

[Codigo fonte]()