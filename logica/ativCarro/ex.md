# Determinação da Categoria de Habilitação para Veículos

Este é um programa Python simples que determina a categoria de habilitação apropriada com base nas características de um veículo. As características consideradas incluem:

- Quantidade de rodas
- Peso bruto em quilogramas
- Quantidade de pessoas no veículo

O programa segue as seguintes categorias:

- **A:** Veículos com duas ou três rodas.
- **B:** Veículos com quatro rodas, que acomodam até oito pessoas e têm um peso bruto de até 3500 kg.
- **C:** Veículos com quatro rodas ou mais e com peso entre 3500 e 6000 kg.
- **D:** Veículos com quatro rodas ou mais e que acomodam mais de oito pessoas.
- **E:** Veículos com quatro rodas ou mais e com peso bruto superior a 6000 kg.

## Como Usar o Programa

1. Execute o programa Python em um ambiente compatível.

2. O programa solicitará que você insira as seguintes informações:
   - Quantidade de rodas do veículo.
   - Peso bruto do veículo em quilogramas.
   - Quantidade de pessoas no veículo.

3. O programa determinará automaticamente a categoria de habilitação apropriada com base nas informações inseridas.

4. A categoria de habilitação será exibida como saída.

5. Certifique-se de que as informações inseridas se enquadrem em uma das categorias A, B, C, D ou E para obter uma saída válida.

### Exemplo de Uso

```py
Digite quantas rodas tem seu carro: 4
Qual peso bruto em quilogramas: 2800
Digite a quantidade de pessoas: 5

Saída:
B: Veículos com quatro rodas, que acomodam até oito pessoas e seu peso é de até 3500 kg;
```
Codigo
```py
roda = int(input("Digite quantas rodas tem seu carro: "))
pesoBruto = float(input("Qual peso bruto em quilogramas: "))
quantiPessoas = int(input("Digite a quantidade de pessoas: "))

if (roda >= 2 and roda<=3):
    print("A: Veículos com duas ou três rodas;")
elif (roda == 4 and quantiPessoas >= 0 and quantiPessoas <= 8 and pesoBruto >= 0 and pesoBruto <= 3500):
    print("B: Veículos com quatro rodas, que acomodam até oito pessoas e seu peso é de até 3500 kg;")
elif ( roda >= 4 and pesoBruto > 3500 and pesoBruto <= 6000):
    print("C: Veículos com quatro rodas ou mais e com peso entre 3500 e 6000 kg;")
elif (roda >= 4 and quantiPessoas > 8):
    print("D: Veículos com quatro rodas ou mais e que acomodam mais de oito pessoas;")
elif (roda >= 4 and pesoBruto > 6000):
    print("E: Veículos com quatro rodas ou mais e com mais de 6000 kg.")
else:
    print("Valores inseridos não correspondem a nenhuma categoria conhecida. Verifique as informações do veículo e tente novamente.")
```
<a href="https://colab.research.google.com/drive/1ErciRQ2K0Nu1CiMVC2ZOMJOtBatYrNtm?usp=sharing" target="_blank">Link do codigo fonte para executar Collab</a>

<a href="https://github.com/fabiobrasileiroo/Proz/blob/main/logica/ativCarro/03.py" target="_blank">Link do codigo fonte</a>
