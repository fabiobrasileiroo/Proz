matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Iterar pelas linhas
for linha in matriz:
    # Iterar pelas colunas dentro de cada linha
    for elemento in linha:
        # Verificar se o elemento é igual a 3
        if elemento == 3:
            # Se encontrar o elemento desejado, você pode fazer algo com ele
            print("Elemento 3 encontrado na matriz!")
            break  # Você pode sair dos loops se o elemento for encontrado

# Se o elemento não for encontrado, você pode adicionar uma mensagem de "não encontrado"
else:
    print("Elemento 3 não encontrado na matriz.")
