def acharElemento(elem, arr):
    achou = False
    cumprimento = len(arr)

    for i in range(cumprimento):
        if (arr[i] == elem):
            achou = True
    if(achou == True):
        print("Achei um nome: " + elem)
    else:
        print("Não achei o nome: " + elem)

nomes = ["Roberto","Joao","Fabio","Jo"]
acharElemento("Roberto", nomes)

print("vai da merda")