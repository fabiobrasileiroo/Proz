"""
Crie um programa que calcule o status de aprovação do aluno a partir da nota dele. O código deve seguir as instruções:
"""
nota1 = float(input("Digite sua nota 1:"))
nota2 = float(input("Digite sua nota 2:"))
soma = float(nota1+nota2)/2
if soma > 7:
    print(f"Ele(a) esta aprovado {soma}")
elif soma < 7 and soma >= 4:
    print(f"Ele(a) está em recuperação {soma}")
elif soma < 4 and soma >=0:
    print(f"Ele(a) está reprovado {soma}")
else: 
    print(f"Digite n1 e n2 de 0 a 10 novamente {soma}")