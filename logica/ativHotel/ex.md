# Imprimindo Andares de um Hotel

Este código Python foi desenvolvido para imprimir os números dos andares de um hotel de 20 andares, excluindo o 13, em ordem decrescente. O dono do hotel é supersticioso e optou por não ter um 13º andar.

## Código 1: Usando um loop `for`

```python
import time
print("Ultimo andar")
for andar in range(20,0,-1):
    if(andar == 13):
        continue
    print(andar)
    time.sleep(0.5)
print(f"{andar} andar\n")
```
Este código utiliza um loop for que itera de 20 até 1 (em ordem decrescente) e imprime cada número de andar, excluindo o 13 usando a declaração if.

## Código 2: Usando um loop `while`

```python
import time
print("Outra forma")
andar = 20
while(andar >= 1): 
    print(andar)
    andar = andar -1
    if(andar == 13):
        andar -= 1
        continue
    time.sleep(0.5)

print("Fim do programa")
```
Este código utiliza um loop while que decrementa o número de andar de 20 até 1 e também exclui o 13 usando a declaração if.

Obs: Não liguem para o time.sleep(0.5); eu apenas dei um intervalo de 0.5 segundos para simular um elevador.

[Link codigo Colab](https://colab.research.google.com/drive/1DjVXFsk8T6C1p4KB_fbRBNJ5nFNlnDQK?usp=sharing)

[Codigo fonte](https://github.com/fabiobrasileiroo/Proz/blob/main/logica/ativHotel/01.py)