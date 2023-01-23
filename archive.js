// const loadBooks = () => {
//     fetch(' https://openlibrary.org/search.json?q=javascript')
//         .then(res => res.json())
//     .then(data=>displaySingleBooks(data.docs[0]))
// }
// loadBooks();

// const displayBook = bookk => {
//     console.log(bookk);
// }
// displayBook();
const searchBook = () => {
    const serchText = document.getElementById('search-field').value;
    bookSearchText(serchText);
    document.getElementById('search-field').value = '';

}

const bookSearchText = searchText => {
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch (url)
    .then(res => res.json())
    .then(data=>displaySingleBooks(data.docs))
}

const displaySingleBooks = books => {
    // console.log(books);
    const bookContainer = document.getElementById('book-archive');
    bookContainer.textContent = '';
    //  if (!books) {
    //     const div = document.createElement('div');
    //     div.innerHTML = `
    //     <h2 class="fw-bold text-primary">Sorry! Book Not Found</h2>
    //     `
    //     bookContainer.appendChild(div); 
    // }
    // const book = undefined;
    books.forEach(book=> {
        console.log(book);
        // let { title, author_name, first_publish_year } = book;
        const div = document.createElement('div');
        div.innerHTML = `
        <p><span class="fw-bold text-primary">Book Name:</span> <span class="fw-semibold">${book.title?book.title:'None'}</span></p>

        <p><span class="fw-bold text-primary">Author Name:</span> <span class="fw-semibold">${book.author_name?book.author_name:'None'}</span></p>

        <p><span class="fw-bold text-primary">First Publish Year:</span> <span class="fw-semibold">${book.first_publish_year?book.first_publish_year:'None'}</span></p>
        `
        bookContainer.appendChild(div)
    })  
}

bookSearchText('cse');

