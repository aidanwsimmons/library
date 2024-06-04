const myLibrary = [];

function Book(title, author, numberOfPages, hasBeenRead) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.hasBeenRead = hasBeenRead;
}

//adds book to library
function addBookToLibrary() {

}

//shows library as individual book cards
function displayBooksInLibrary() {

}


function removeBookFromLibrary() {

}

function updateBookStatus() {

}

document.querySelector('.addBookBtn').addEventListener('click', function() {
    document.getElementById('formOverlay').classList.add('show');
});

document.getElementById('formOverlay').addEventListener('click', function(event) {
    if (event.target === this) {
        this.classList.remove('show');
    }
});
