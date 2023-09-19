def teste():
    while True:
        try:
            num = int(input("Digite um número entre 10 e 100: "))
            if 10 < num < 100:
                print(num)
                break  # Sai do loop quando o número está no intervalo correto
            else:
                print("O número deve estar entre 10 e 100.")
        except ValueError:
            print("Entrada inválida. Digite um número válido.")

teste()
