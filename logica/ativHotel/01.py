import time
print("ultimo andar")
for andar in range(20,0,-1):
    if(andar == 13):
        continue
    print(andar)
    time.sleep(0.5)
print(f"{andar} andar \n")

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
