function findAccountById(accounts, id) {
  const result = accounts.find((account) => account.id === id)
  return result
}

function sortAccountsByLastName(accounts) {
  const result = accounts.sort((acc1, acc2) => acc1.name.last > acc2.name.last ? 1 : -1)
  return result
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0
for (let i = 0; i < books.length; i++){
  const borrows = books[i].borrows
  for (let j = 0; j < borrows.length; j++){
    if (borrows[j].id === account.id) { total += 1}
  }
}
  return total
}

function getBooksPossessedByAccount(account, books, authors) {
  let result = []
  for (let i = 0; i < books.length; i++){
    const borrows = books[i].borrows
    for (let j = 0; j < borrows.length; j++){
      if (borrows[j].id === account.id && borrows[j].returned === false){
        const author = authors.find((authorFind) => books[i].authorId === authorFind.id)
        books[i]["author"] = author
        result.push(books[i])
      }
    }
  }
  return result
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
