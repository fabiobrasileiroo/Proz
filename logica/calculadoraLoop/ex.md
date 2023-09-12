# Calculadora Simples em Python

Este é um programa de calculadora simples em Python que permite realizar operações de soma, subtração, multiplicação e divisão entre dois números. Além disso, ele inclui uma opção para sair do programa.

## Funcionalidades

O programa oferece as seguintes funcionalidades:

- **Soma:** Soma dois números inseridos pelo usuário.
- **Subtração:** Subtrai o segundo número do primeiro número inserido pelo usuário.
- **Multiplicação:** Multiplica os dois números inseridos pelo usuário.
- **Divisão:** Divide o primeiro número pelo segundo número inserido pelo usuário. O programa verifica se o divisor não é zero para evitar erros de divisão por zero.
- **Sair:** Permite ao usuário sair do programa.


## Exemplo de Uso

```
1: Soma
2: Subtração
3: Multiplicação
4: Divisão
0: Sair

Digite o número da operação desejada: 1
Digite o primeiro número: 5
Digite o segundo número: 3
Resultado: 8

1: Soma
2: Subtração
3: Multiplicação
4: Divisão
0: Sair

Digite o número da operação desejada: 4
Digite o primeiro número: 10
Digite o segundo número: 0
Não é possível dividir por zero.

1: Soma
2: Subtração
3: Multiplicação
4: Divisão
0: Sair

Digite o número da operação desejada: 0
Saindo da calculadora.
```

## Explicação em passos
### Crie uma funcão para cada operação 
```python
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
```
### Coloquei o laço de repetição while infinito (True)
```python
while True:
    print("1: Soma")
    print("2: Subtração")
    print("3: Multiplicação")
    print("4: Divisão")
    print("0: Sair")
    
    opcao = input("Digite o número da operação desejada: ")
```
### Se for 0, o programa encerra. Caso contrário, se a opção não estiver entre 1 e 4, retorna ao laço while.
```python
 if opcao == "0":
        print("Saindo da calculadora.")
        break
    
    if opcao not in ["1", "2", "3", "4"]:
        print("Essa opção não existe. Tente novamente.")
        continue
```
Esta parte é um pouco mais complexa, mas nada fora do comum. Tentei lidar com o erro de uma pessoa digitar uma letra (string) no lugar de números usando try e except.

No código que você forneceu, o try e except são usados para lidar com exceções (erros) que podem ocorrer durante a execução do programa. Vou explicar como eles funcionam:

### Primeiro, vamos entender o que esses dois fazem:

`try`: A parte do código dentro do bloco try é onde o programa tenta executar um conjunto de instruções que podem gerar uma exceção. Nesse caso, as instruções dentro do bloco try estão relacionadas à conversão de entrada do usuário em números de ponto flutuante usando float.

`except`: A parte do código dentro do bloco except é executada quando ocorre uma exceção dentro do bloco try. O except é usado para capturar exceções específicas (ou todas as exceções, se nenhum tipo de exceção for especificado) e lidar com elas de maneira apropriada.
```python
  try:
      num1 = float(input("Digite o primeiro número: "))
      num2 = float(input("Digite o segundo número: "))
  except ValueError:
      print("Entrada inválida. Certifique-se de digitar números válidos.")
      continue
```
- O programa tenta converter as entradas do usuário (input) em números de ponto flutuante (float). Isso pode gerar uma exceção do tipo ValueError se o usuário inserir algo que não possa ser convertido em um número de ponto flutuante, como texto.

- Se ocorrer um ValueError, o programa captura essa exceção e executa o bloco except, que imprime uma mensagem de erro ("Entrada inválida. Certifique-se de digitar números válidos.") e continua o loop usando continue. Isso permite ao programa lidar com erros de entrada do usuário sem interromper abruptamente a execução.

Em resumo, try e except são usados para tratar exceções e fornecer um mecanismo de recuperação de erros, permitindo que o programa lide com situações excepcionais de forma controlada e amigável ao usuário.

### Caso os dados informados estejam corretos, imprimir o valor.

```python
   
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
```
[Link do Colab](https://colab.research.google.com/drive/1isE_up5IpKO-l0sJ4E5XMxb5hIEG77uM?usp=sharing)

[Codigo fonte](https://github.com/fabiobrasileiroo/Proz/blob/main/logica/calculadoraLoop/calcLoopExit.py)
