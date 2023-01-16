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
        <p><span class="fw-bold text-primary">Book Name:</span> <span class="fw-semibold">${book.title}</span></p>
        <p><span class="fw-bold text-primary">Author Name:</span> <span class="fw-semibold">${book.author_name}</span></p>
        <p><span class="fw-bold text-primary">First Publist Date:</span> <span class="fw-semibold">${book.first_publish_year}</span></p>
        `
        bookContainer.appendChild(div);
       

    });
}
