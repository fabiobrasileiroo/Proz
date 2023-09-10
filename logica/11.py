def calculadoraImc(peso, altura):
    peso = float(input("Digite seu peso: "))
    altura = float(input("Digite sua altura (exemplo 1.70): "))
    
    if altura < 3:
        imc = peso / (altura ** 2)
        if imc <= 18.5:
            return f"Seu IMC é {imc:.2f} - Abaixo do peso"
        elif 18.5 < imc <= 24.9:
            return f"Seu IMC é {imc:.2f} - Peso saudável"
        elif 25 <= imc <= 29.9:
            return f"Seu IMC é {imc:.2f} - Sobrepeso"
        elif 30 <= imc <= 34.9:
            return f"Seu IMC é {imc:.2f} - Obesidade grau 1"
        elif 35 <= imc <= 39.9:
            return f"Seu IMC é {imc:.2f} - Obesidade grau 2"
        else:
            return f"Seu IMC é {imc:.2f} - Obesidade grau 3"
    else:
        return "Digite novamente sua altura"

resultado = calculadoraImc(0, 0)
print(resultado)