function findAuthorById(authors, id) {
  const result = authors.find((author) => author.id === id)
  return result
}

function findBookById(books, id) {
  const result = books.find((book) => book.id === id)
  return result
}

function partitionBooksByBorrowedStatus(books) {
  let result = []
  let borrowed = []
  let returned = []
  for (let i = 0; i < books.length; i++){
    let count = 0
    const borrows = books[i].borrows
    for (let j = 0; j < borrows.length; j++){
      if (borrows[j].returned === false) { borrowed.push(books[i]) }
      if (borrows[j].returned === false) { count += 1 }
      if (count === 0 && j === (borrows.length - 1)) { returned.push(books[i]) }
    }
  }
  result.push(borrowed)
  result.push(returned)
  return result
}

function getBorrowersForBook(book, accounts) {
 let result = []
 const borrows = book.borrows
 for (let i = 0; i < borrows.length; i++){
   const account = accounts.find((accountFind) => borrows[i].id === accountFind.id)
   account["returned"] = borrows[i].returned
   if (result.length < 10) { result.push(account) }
 }
 return result
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
