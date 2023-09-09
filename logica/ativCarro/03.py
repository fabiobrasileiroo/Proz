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
