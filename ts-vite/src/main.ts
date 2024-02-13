// import objeto from './usuario'

// console.log(objeto)

// // let usuario: {
// //   nome: string, 
// //   idade: number,
// //   tipo: 'aluno' | 'tutor' | 'admin',
// //   endereco: {
// //     estado: string,
// //     cidade: string
// //   }
// // }
interface Usuario {
  nome: string, 
  idade: number,
  tipo?: 'aluno' | 'tutor' | 'admin',
  endereco?: {
    estado: string,
    cidade: string
  }
}
// type UsuarioType=  {
//   nome: string, 
//   idade: number,
//   tipo: 'aluno' | 'tutor' | 'admin',
//   endereco: {
//     estado: string,
//     cidade: string
//   }
// }
// let usuario : UsuarioType= {
//   nome:'fabio',
//   idade: 20,
//   tipo: 'aluno',
//   endereco: {
//     estado: "Am",
//     cidade: "Manaus"
//   }
// }

// function imprimirCidade(usuario: UsuarioType) {
//   console.log(usuario.endereco.cidade)
// }

// type Livros = {
//   codigo: number,
//   titulo: string
// }

// const livros: Livros[] = [
//   {codigo: 25648, titulo: 'Vidas Secas'},
//   {codigo: 73848, titulo: 'Laços de Familia'}
// ]

// console.log(livros)

// type ProdutoType = {
//   nome: string,
//   preco: number
// }

// function apresentarProduto(produto: ProdutoType): string{
//   produto = {
//   nome: 'caderno',
//   preco: 2
//   }
//   return `O produto ${produto.nome} custa R$${produto.preco}`
// }
// console.log(apresentarProduto())

// function permitirAcesso(tipoUsuario: string):boolean{
//   if(tipoUsuario == 'admin') {
//     return true
//   } else {
//     return false
//   }
// }
// console.log(permitirAcesso('admin'))

// //Tipagem de arrays
// type Aluno = {
//   nome: string,
//   idade: number
// }

// let alunos: Aluno[] = [
//   { nome: "Luis" ,idade: 29} ,
//   { nome: "Fábio", idade: 21}
// ]

// //Tipagem de função
// function retornaPrimeiro(lista: Aluno[]): number | string {
//   const primeiro = lista[0]
//   return `O aluno ${primeiro.nome} tem ${primeiro.idade} anos`
// }

// console.log(retornaPrimeiro())

// function maiorDeIdade(lista: Aluno[]) {
//   const primeiro = lista[0]
//   if(primeiro.idade >= 18) {
//     return true
//   } else if (primeiro.idade < 18) {
//     return false
//   }
// }

// function mostrarInformacoes() {

// }

// function alertarUsuario() {
// }

// function login(usuario: string) {
//   if(permitirAcesso(usuario)== true) {
//     mostrarInformacoes()
//   } else {
//     alertarUsuario()
//   }
// }

function calcularPagamento(valor: number, parcelas: number, desconto?:number) {
  const parcelasComValores: number[] = []
  for (let i = 1; i <= parcelas; i++) {
    let valorNovo = valor
    if(desconto) {
      valorNovo = valor - (valor*desconto)
    }
    parcelasComValores.push(valorNovo / parcelas)
  }
  return parcelasComValores
}

console.log(calcularPagamento(100,2, 0.1))

// Definição de um tipo personalizado, com tipo genérico
// Parecido com uma função function (Lista:any[])
//Lista: number[]
// type Lista<Elemento> = Elemento[]

// //Uso do tipo personalizado
// let listaNumeros: Lista<number> = [1,2,3]

// let listaNomes: Lista<string> = ['João', 'Maria']

// let listaUsuarios: Lista<Usuario> = [
//   { nome: 'João', idade: 42},
//   { nome: 'Maria', idade: 44}
// ]

// type Aluno = {
//   id_aluno: number,
//   nome: string
// }

// let listaAlunos: Lista<Aluno> = []

// let alunoNovo: Aluno = {
//   id_aluno: 5,
//   nome: 'Luis'
// }

// listaAlunos.push(alunoNovo)

//Genéricos com Arrays
type Lista<TipoGenerico> = TipoGenerico[]

let listaNumerosPer: number[] = []// mesma coisa
let listaNumeros: Lista<Object> = []
listaNumeros.push([{nome: 'fabio'}])
// listaNumeros.push(1)
// listaNumeros.push(2)
console.log(listaNumeros)

type Aluno = {
  id_aluno: number,
  nome: string
}
let listaAlunos: Lista<Aluno> = []
let alunoNovo: Aluno = {
  id_aluno: 5,
  nome: 'Bia'
}
listaAlunos.push(alunoNovo)
console.log(listaAlunos)

//Objetos genericos
type ResumoLista<T> = {
  total: number,
  primeiroElemento: T,
  lista: T[] 
}

type Musica = {
  nome: string,
  artista: string
}
let musicas: Musica[] = [
  { nome: 'Coisa n 6', artista: 'Moacir Santos'},
  { nome: 'Loro', artista: 'Egberto gis'},
  { nome: 'Africadeus', artista: 'Naná Vasconcelos'}
]
const resumoMusicas: ResumoLista<Musica> = {
  total: musicas.length,
  primeiroElemento: musicas[0],
  lista: musicas
}

// outro exemplos
type Filme = {
  titulo: string,
  genero: 'animação' | 'ação' | 'comêdia' | 'românce'
}

let listaFilmes: Filme[] = []
listaFilmes.push({
  titulo: 'Pulp Fiction',
  genero: 'ação'
})
console.log(listaFilmes)

type ResumoLista1<T> = {
  total: number,
  ultimo: T,
  lista: T[]
}

let filmeMaisRecente: ResumoLista1<Filme> = {
  total: listaFilmes.length,
  ultimo: listaFilmes[listaFilmes.length -1],
  lista: listaFilmes
}

function ultimoDaLista<T>(lista: T[]): T {
  return lista[lista.length - 1]
}
const listaNumerosT = [15,23,52,21]
console.log(
  ultimoDaLista(listaNumerosT)
)
const listaLinguagens = ['Html','css','js']
console.log(ultimoDaLista(listaLinguagens))

const ultimoDaLista02 = function <T>(lista: T[]): T {
  return lista[lista.length -1]
}

const ultimoDaLista03 = <T>(lista: T[]): T => lista[lista.length -1]

// Genéricos com Funções
function primeiroElemento<T>(lista: T[]): T {
  return lista[0]
}

let listaNumeros01 = [1,3,4]
let resultado = primeiroElemento(listaNumeros01)
console.log(resultado)

type Produto = {
  nome: string,
  preco: number
}

let listaProdutos: Produto[] = [
  { nome: 'leite', preco: 7.21},
  { nome: 'bolacha', preco: 5.99}
]

let resultado1 = primeiroElemento(listaProdutos)

console.log(resultado1)

const inputNome = document.querySelector<HTMLInputElement>('#nome')

inputNome?.value