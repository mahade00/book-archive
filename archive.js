// display style for spinner
const toogleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}

// display style for found books
const toogleSearchResult = displayStyle => {
    document.getElementById('book-archive').style.display = displayStyle;
}

// display style for result show button
const toogleResultShowBtn = displayStyle => {
    document.getElementById('result-show-btn').style.display = displayStyle;
}

// function for search button
const searchBook = () => {
    const serchText = document.getElementById('search-field').value;
    toogleSpinner('block');
    toogleResultShowBtn('none');
    toogleSearchResult('none');
    bookSearchText(serchText);
    document.getElementById('search-field').value = '';
}

// featch API
const bookSearchText = searchText => {
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch (url)
    .then(res => res.json())
     .then(data => displaySingleBooks(data))
}

// function for total found books
const displaySingleBooks = books => {   
    const bookCount = books.numFound; // total number of data from search result
    const bookSlicer = books.docs.slice(0, 30); // slicing 30 data to show
    const bookSlicerLength = bookSlicer.length;   // slicing data length

    const bookContainer = document.getElementById('book-archive');
    bookContainer.textContent = '';

    // check length and condition
     if (books.docs.length===0) {
         const resultShowButton = document.getElementById('result-show-btn');
         resultShowButton.innerHTML = `
         <div  class="d-flex justify-content-center">
            <div class="d-grid gap-2 w-50">
                <button class="btn btn-primary fw-bold fs-6" type="button">No result found </button>
            </div>
        </div>
         `
     }
    else if (books.docs.length > 0){
         const resultShowButton = document.getElementById('result-show-btn');
         resultShowButton.innerHTML = `
         <div  class="d-flex justify-content-center">
            <div class="d-grid gap-2 w-50">
                <button class="btn btn-primary fw-bold fs-6" type="button">Showing results ${bookSlicerLength} out of ${bookCount} for ${books.q}</button>
            </div>
        </div>
        `  
    }

    // for each loop
    bookSlicer.forEach(book => {
        
        let bookCoverImg,cover_i; // for image
        const imgURL = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
        // use ternary operator to check book cover image
        (book.cover_i === undefined) ? bookCoverImg = "/images/no_image.jpg" : bookCoverImg = `${imgURL}`; 


        const div = document.createElement('div');
        div.classList.add('cards') ;
        div.innerHTML = `
    <div class="card h-100 " style="width: 18rem;">
        <img src="${bookCoverImg}" class="card-img-top" alt="...">
        <div class="card-body">
             <p><span class="fw-bold text-primary">Book Name:</span> <span class="fw-semibold">${book.title?book.title:'None'}</span></p>

             <p><span class="fw-bold text-primary">Author Name:</span> <span class="fw-semibold">${book.author_name ? book.author_name : 'None'}</span></p>
             
             <p><span class="fw-bold text-primary"> Publisher :</span> <span class="fw-semibold">${book.publisher?book.publisher:'None'}</span></p>

            <p><span class="fw-bold text-primary">First Publish Year:</span> <span class="fw-semibold">${book.first_publish_year?book.first_publish_year:'None'}</span></p>
        </div>
    </div>       
        `
        bookContainer.appendChild(div);
    })  
    toogleSpinner('none');
    toogleResultShowBtn('block');
    toogleSearchResult('inline-flex');
}


