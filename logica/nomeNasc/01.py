repita = True
while repita:
    try:
        nome = input("Digite seu nome: ")
        ano = int(input("Digite o ano: "))

        if(ano >= 1922 and ano <= 2021):
            idade = 2022 - ano
            print(f"{nome} sua idade é {idade}")
            repita = False
        else:
            print(f"{nome} você digite um numero entre 1922 e 2022")
    except:
        print(f"{nome} você digitou um valor invalido")

    