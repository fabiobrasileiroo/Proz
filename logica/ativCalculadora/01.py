def calculadora(num1,num2,operador):
    num1 = float(input("Digite um numero"))
    num2 = float(input("Digite o segundo numero"))
    operador = input("Digite o operador (ex: soma ou +)")
    if(operador == "Soma" or operador == "soma" or operador == "+" ):
        return num1 + num2
    elif(operador == "Subtracao" or operador == "subtracao" or operador == "-"):
        return num1 - num2
    elif(operador == "Multiplicacao" or operador == "multiplicacao" or operador == "*" ):
        return num1 * num2
    elif(operador == "Divisao" or operador == "divisao" or operador == "/" ):
        if num2 == 0:
            return "Não é possivel dividir por zero"
        else:
            return num1 / num2
    else:
        valor = {'num1': 0, 'num2' :  0}
        return f"digite novamente um operador valido{valor} que dizer o valor é 0"

resultado = calculadora(0,0,0)
print(resultado)