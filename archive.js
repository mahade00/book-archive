const loadBooks = () => {
    fetch(' https://openlibrary.org/search.json?q=javascript')
        .then(res => res.json())
    .then(data=>displayBook(data.docs))
}
loadBooks();

const displayBook = bookk => {
    console.log(bookk);
}

const searchBook = () => {
    const searchText = document.getElementById('search-field').value;
    bookSearchText(searchText);

    document.getElementById('search-field').value = '';

}

const bookSearchText = searchText => {
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch (url)
    .then(res => res.json())
    .then(data=>displaySingleBooks(data.books))
}

const displaySingleBooks = books => {
    console.log(books);
    const bookContainer = document.getElementById('book-archive');
    // bookContainer.textContent = '';
    //  if (!books) {
    //     const div = document.createElement('div');
    //     div.innerHTML = `
    //     <h2 class="fw-bold text-primary">Sorry! Book Not Found</h2>
    //     `
    //     bookContainer.appendChild(div); 
    // }

    books.forEach(book => {
        console.log(book);
        const div = document.createElement('div');
        div.innerHTML = `
        <p><span class="fw-bold text-primary">Book Name:</span> <span class="fw-semibold">${book.title}</span></p>

        <p><span class="fw-bold text-primary">Author Name:</span> <span class="fw-semibold">${book.author_name}</span></p>

        <p><span class="fw-bold text-primary">First Publish Year:</span> <span class="fw-semibold">${book.first_publish_year}</span></p>
        `
        bookContainer.appendChild(div)
    })

   
     
}

bookSearchText('book');

