def operacao(num_lim, incre):
    contador = 0
    for i in range(0, num_lim, incre):
        contador = contador + 1
    return contador
resultado = operacao(20,1)
print(resultado)