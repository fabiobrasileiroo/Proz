## Dessa vez, eles precisam que você atualize o array de produtos. Agora, eles estão vendendo rímel ao invés de batons, e cremes hidratantes no lugar de loções. Além disso, ficaram sem delineadores, então precisam que você remova ele da lista de produtos. Imprima a nova lista no terminal para verificar que as alterações foram realizadas corretamente.

```python
lista_produtos = ['máscaras faciais', 'batons', 'esmaltes', 'perfumes', 'loções', 'xampus', 'sabonetes', 'delineadores'] 

lista_produtos[1] = "rimel"

lista_produtos[4]= "creme hidratantes"
lista_produtos.pop()
lista_produtos.append("hidratante de mingal hmm")
lista_produtos.append("mascara de banana")

print(lista_produtos)
```

[Codigo Colab](https://colab.research.google.com/drive/1utbfaFQdzbPDv1Se-dgH-7mK-TkMoaHI?usp=sharing)