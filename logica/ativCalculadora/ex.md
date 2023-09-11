# Calculadora Simples em Python

Este é um programa Python que implementa uma calculadora simples capaz de realizar operações de soma, subtração, multiplicação e divisão com dois números.

## Funcionalidades

- Soma
- Subtração
- Multiplicação
- Divisão

### python `calculadora.py`

```python
   
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
```

- Digite o primeiro número: 5
- Digite o segundo número: 3
- Digite o operador (ex: soma ou +): soma
- Resultado: 8.0


## Explicação

### Função Calculadora em Python

A função `calculadora` recebe três argumentos:

- `num1`: O primeiro número para a operação.
- `num2`: O segundo número para a operação.
- `operador`: A operação a ser realizada (soma, subtração, multiplicação ou divisão).

### Explicação do Código

A função `calculadora` realiza operações matemáticas básicas com base no argumento `operador` fornecido:

- Se `operador` for igual a "Soma", "soma" ou "+", a função retorna a soma de `num1` e `num2`.
- Se `operador` for igual a "Subtracao", "subtracao" ou "-", a função retorna a subtração de `num1` e `num2`.
- Se `operador` for igual a "Multiplicacao", "multiplicacao" ou "*", a função retorna a multiplicação de `num1` e `num2`.
- Se `operador` for igual a "Divisao", "divisao" ou "/", a função verifica se `num2` é igual a zero. Se for, retorna a mensagem "Não é possível dividir por zero.". Caso contrário, retorna a divisão de `

[Link do codigo no Colab](https://colab.research.google.com/drive/17YEpNW257nRm6E94PpGi_r_GmCwecZvy?usp=sharing)

[Codigo fonte](https://github.com/fabiobrasileiroo/Proz/blob/main/logica/ativCalculadora/01Melhorado.py)

