def antESuc(num):
    ant = num -1
    suc = num +1
    return ant, suc

antecessor, sucessor = antESuc(5)
print(antecessor)
print(sucessor)

"""print(ant) // volta um erro pois pois essa viriavel estar no escopo local de antESuc"""