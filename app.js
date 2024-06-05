const myLibrary = [];

function Book(title, author, numberOfPages, hasBeenRead) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.hasBeenRead = hasBeenRead;
}

//adds book to library
function addBookToLibrary(book) {
    myLibrary.push(book)
}

//shows library as individual book cards
function displayLibrary() {
    myLibrary.forEach((book, index) => {
        console.log(`${index + 1}. Title: ${book.title}, Author: ${book.author}, Pages: ${book.numberOfPages}, Read: ${book.hasBeenRead}`);
    })
}

//removes book from library at given index
function removeBookFromLibrary(index) {
    if(index >= 0 && index < myLibrary.length){
        myLibrary.splice(index, 1)
    } else {
        console.log("Invalid index")
    }
}

//changes hasBeenRead property of book at given index
function toggleReadStatus(index) {
    if (index >= 0 && index < myLibrary.length) {
        myLibrary[index].hasBeenRead = !myLibrary[index].hasBeenRead;
    } else {
        console.log("Invalid index");
    }
}

//shows overlay + addBook form when addBook button is clicked
document.querySelector('.addBookBtn').addEventListener('click', function() {
    document.getElementById('formOverlay').classList.add('show');
});

//hides overlay when anywhere outside the form is clicked
document.getElementById('formOverlay').addEventListener('click', function(event) {
    if (event.target === this) {
        this.classList.remove('show');
    }
});
