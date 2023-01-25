
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
    // let cover_i;
    const bookContainer = document.getElementById('book-archive');
    bookContainer.textContent = '';
     if (books.length===0) {
        const div = document.createElement('div');
        div.innerHTML = `
        <h3 class="fw-bold text-primary">Sorry! Book Not Found</h3>
        `
        bookContainer.appendChild(div); 
    }
    
    books.forEach(book=> {
        console.log(book);
        const imgURL = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
        const div = document.createElement('div');
        div.classList.add('cards') ;
        div.innerHTML = `
    <div class="card h-100 " style="width: 18rem;">
        <img src="${imgURL}" class="card-img-top" alt="...">
        <div class="card-body">
             <p><span class="fw-bold text-primary">Book Name:</span> <span class="fw-semibold">${book.title?book.title:'None'}</span></p>

             <p><span class="fw-bold text-primary">Author Name:</span> <span class="fw-semibold">${book.author_name?book.author_name:'None'}</span></p>

            <p><span class="fw-bold text-primary">First Publish Year:</span> <span class="fw-semibold">${book.first_publish_year?book.first_publish_year:'None'}</span></p>
        </div>
    </div>       
        `
        bookContainer.appendChild(div)
    })  
}

bookSearchText('cse');

