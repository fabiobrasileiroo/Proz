def calcularIdade():
    while True:
        try:
            nome = input("Digite seu nome: ")
            ano = int(input("Digite o ano de nascimento (entre 1922 e 2021): "))

            if 1922 <= ano <= 2021:
                idade = 2022 - ano
                return nome, idade
            else:
                print(f"{nome}, por favor, digite um ano de nascimento entre 1922 e 2021.")
        except ValueError:
            print(f"{nome}, você digitou um valor inválido para o ano de nsacimento. Por favor, insira um número.")

def main():
    nome, idade = calcularIdade()
    print(f"{nome}, sua idade é {idade} anos.")

if __name__ == "__main__":
    main()