const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
// const a = (objeto) => objeto.sort((a,b) => a.name.length - b.name.length)[0].name
// console.log(a(books));

// const a = (objeto) => objeto
//   .map((elemento) => ({author: elemento.author.name, age: elemento.releaseYear - elemento.author.birthYear}))
//   .sort((a,b) => a.age - b.age)
//   console.log(a(books))

const a = (objeto) => {
  return objeto
  .reduce((acc, current, index, array) => {
    if (index === array.length - 1) {
      return `${acc} ${current.author.name}.`
    } return `${acc} ${current.author.name},`
  }, '')
}
  console.log(a(books))
