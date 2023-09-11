def soma(num1, num2):
    return num1 + num2

def subtracao(num1, num2):
    return num1 - num2

def multiplicacao(num1, num2):
    return num1 * num2

def divisao(num1, num2):
    if num2 == 0:
        return "Não é possível dividir por zero."
    return num1 / num2

while True:
    print("1: Soma")
    print("2: Subtração")
    print("3: Multiplicação")
    print("4: Divisão")
    print("0: Sair")
    
    opcao = input("Digite o número da operação desejada: ")
    
    if opcao == "0":
        print("Saindo da calculadora.")
        break
    
    if opcao not in ["1", "2", "3", "4"]:
        print("Essa opção não existe. Tente novamente.")
        continue
    
    try:
        num1 = float(input("Digite o primeiro número: "))
        num2 = float(input("Digite o segundo número: "))
    except ValueError:
        print("Entrada inválida. Certifique-se de digitar números válidos.")
        continue
    
    if opcao == "1":
        resultado = soma(num1, num2)
        print(f"Resultado: {resultado}")
    elif opcao == "2":
        resultado = subtracao(num1, num2)
        print(f"Resultado: {resultado}")
    elif opcao == "3":
        resultado = multiplicacao(num1, num2)
        print(f"Resultado: {resultado}")
    elif opcao == "4":
        resultado = divisao(num1, num2)
        print(f"Resultado: {resultado}")
