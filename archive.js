const loadBooks = () => {
    fetch(' https://openlibrary.org/search.json?q=javascript')
        .then(res => res.json())
    .then(data=>displayBook(data.docs))
}
loadBooks();

const displayBook = book => {
    displaySingleBooks(book);
}

const displaySingleBooks = books => {
    console.log(books);
    const bookContainer = document.getElementById('book-archive');
    books.forEach(book => {
         console.log(book);
        const div = document.createElement('div');
        div.innerHTML = `
        <p>Book Name: ${book.title}</p>
        <p>Author Name: ${book.author_name}</p>
        <p>First Publist Date: ${book.first_publish_year}</p>
        `
        bookContainer.appendChild(div);
       

    });
}
