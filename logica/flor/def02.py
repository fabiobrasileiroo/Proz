def mostraNumero():
    repita = True
    while repita:
        try:
            print("Escreva um número de 0 a 100")
            numero = int(input())

            if(numero > 100 or numero < 0):
                print("Voce escolheu o número: " + str(numero))
                repita = False
            else:
                print("Digite um valor entre 0 e 100")
        except ValueError:
            print("Digite um valor inteiro")
    
mostraNumero()
    