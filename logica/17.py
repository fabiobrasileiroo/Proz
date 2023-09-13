while True:
    try:
        numero = int(input("Digite um número par: "))
        if numero % 2 == 0:
            print(f"Você digitou o número par {numero}. Obrigado")
            break
        else:
            print("Você digitou um número impar. Tente novamente")
    except ValueError:
        print("Você digitou um caractere inválido. Por favor, digite um número par valido")
    