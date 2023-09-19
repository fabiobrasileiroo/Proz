def acharElemento(elem,arr):
    achou = False
    
    for i in range(len(arr)):
        if arr[i] == elem:
            achou = True

    if(achou == False):
        print("Nao achamos o nome:"+ elem)
    else:
        print("Achamos o nome:"+ elem)

nome = ["Rafael", "Arturo", "Karen" "Julia"]
acharElemento("Mara", nome)