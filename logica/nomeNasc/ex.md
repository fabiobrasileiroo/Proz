
# Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021.
A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.


## Passo a passo
Criei uma função na qual incluí um loop infinito usando `while`.

```python
def calcularIdade():
    while True:
        try:
            nome = input("Digite seu nome: ")
            ano = int(input("Digite o ano de nascimento (entre 1922 e 2021): "))

            if 1922 <= ano <= 2021:
                idade = 2022 - ano
                return nome, idade
```
Dentro desse loop, coloquei meu código dentro de um bloco `try`. O código para quando uma condição if é atendida. Além disso, adicionei um bloco try para tentar tratar qualquer erro que possa ocorrer. 

##
Se o código cair no bloco `else`, isso significa que ocorreu um erro relacionado a números que não estão no intervalo de 1922 a 2021. 
```python
      else:
                print(f"{nome}, por favor, digite um ano de nascimento entre 1922 e 2021.")
        except ValueError:
            print(f"{nome}, você digitou um valor inválido para o ano de nsacimento. Por favor, insira um número.")
```
Quando a exceção `ValueError` é gerada, isso indica que ocorreu um erro de valor, um caractere ou um tipo real (float), que não é o que desejo, pois estou trabalhando com anos e preciso de números inteiros.
##
### Isso é um pouco complexo para mim, mas vou tentar explicar porque aprendi recentemente.

Criei uma função que pegava o nome e a idade da calculadora e imprima o resultado
```python
def main():
    nome, idade = calcularIdade()
    print(f"{nome}, sua idade é {idade} anos.")

if __name__ == "__main__":
    main()
```
Depois, criei um `if __name__ == "__main__":` e chamei `main()`. Muitos devem estar se perguntando por que fazer isso, ou se essa variável existe se eu não a declarei lá em cima.

Na verdade, essa variável com o nome reservado `__name__` é sempre declarada no módulo, e quando digo módulo, estou me referindo ao arquivo o `módulo === arquivo` (um módulo é igual a um arquivo).

## O que ela faz e para que diabos serve isso?

A condição `if __name__ == "__main__`: verifica se o script está sendo executado diretamente (em oposição a ser importado como um módulo em outro script). Se for o caso, a função main é chamada, iniciando a execução do programa.
Então isso como se fosse a chamada centrar da minha aplicação.

A principal vantagem dessa estrutura é que ela torna o código mais organizado e legível, separando a lógica principal do programa da lógica de entrada e validação. Além disso, torna mais fácil reutilizar partes do seu código em outros projetos, importando-o como um módulo, se necessário.

No entanto, em programas muito simples, você pode optar por não usar a função main e colocar o código diretamente no nível superior do script. É uma questão de preferência pessoal e de escalabilidade do projeto.

Esse não ficou claro vejam esse video que me ajudou:

[Link do video](https://youtu.be/150-dpYG1pg?si=SA3IyE02axg91sZ_)

[Link do codigo Colab](https://colab.research.google.com/drive/1gjWmTfUzv0VzqYRYC3EspHeMd_j9OIfM?usp=sharing)

[Codigo fonte](https://github.com/fabiobrasileiroo/Proz/blob/main/logica/nomeNasc/02.py)