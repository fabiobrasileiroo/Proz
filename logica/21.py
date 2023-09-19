listaDeNomes = ["Daniel", "Carlos", "Fabio", "Antonio", "Joabe"]
qualNome = input("Qual nome você estâ procurando?")

def buscarNome(qualNome):
  for nome in listaDeNomes:
    if nome == qualNome:
      return f"Achamos o nome {nome} as nessa lista"
  return "Não achei"

print(buscarNome(qualNome))
