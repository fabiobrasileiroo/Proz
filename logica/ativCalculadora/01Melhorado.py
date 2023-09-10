def calculadora(num1, num2, operador):
    if operador == "Soma" or operador == "soma" or operador == "+":
        return num1 + num2
    elif operador == "Subtracao" or operador == "subtracao" or operador == "-":
        return num1 - num2
    elif operador == "Multiplicacao" or operador == "multiplicacao" or operador == "*":
        return num1 * num2
    elif operador == "Divisao" or operador == "divisao" or operador == "/":
        if num2 == 0:
            return "Não é possível dividir por zero."
        return num1 / num2
    else:
        return 0

# Exemplo de uso:
num1 = float(input("Digite o primeiro número: "))
num2 = float(input("Digite o segundo número: "))
operador = input("Digite o operador (ex: soma ou +): ")
resultado = calculadora(num1, num2, operador)
print("Resultado:", resultado)
