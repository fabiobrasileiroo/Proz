"""num =1 
while(num <= 45):
    print(num)
    num = num +1 
print("Terminou seu descanso")"""

import time
import subprocess

# Tempo de descanso em segundos
tempo_descanso = 45

print(f"Descanso de {tempo_descanso} segundos iniciado.")

for segundos_restantes in range(tempo_descanso, 0, -1):
    print(f"Tempo restante: {segundos_restantes} segundos", end="\r")
    time.sleep(1)  # Espera por 1 segundo

# Quando o tempo de descanso terminar, emita um aviso
subprocess.call(["echo", "\a"])  # Isso emite um bipe de alerta no sistema

print("\nDescanso concluído. Continue com seu próximo exercício!")
