const toogleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}
const toogleSearchResult = displayStyle => {
    document.getElementById('book-archive').style.display = displayStyle;
}

const searchBook = () => {
    const serchText = document.getElementById('search-field').value;
    toogleSpinner('block');
    toogleSearchResult('none')
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
    const bookCount = books.length;
   
    const bookSlicer = books.slice(0, 30);
    const bookSlicerLength = bookSlicer.length;
    console.log(bookSlicer);
    console.log(bookSlicerLength);
    const bookContainer = document.getElementById('book-archive');
    bookContainer.textContent = '';
    // bookContainer.innerHTML = `${bookSlicer}`;
     if (books.length===0) {
        const div = document.createElement('div');
        div.innerHTML = `
        <h3 class="fw-bold text-primary">Sorry! Book Not Found</h3>
        `
        bookContainer.appendChild(div); 
    }
    else if (books.length > 0){
         const resultShowButton = document.getElementById('result-show-btn');
         resultShowButton.innerHTML = `
         <div  class="d-flex justify-content-center">
            <div class="d-grid gap-2 w-50">
                <button class="btn btn-primary fw-bold fs-6" type="button">Showing results ${bookSlicerLength} out of ${bookCount} </button>
            </div>
        </div>
         `
         
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
     toogleSpinner('none');
    toogleSearchResult('inline-flex');
}

bookSearchText('cse');

