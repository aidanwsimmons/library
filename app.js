const myLibrary = []

function Book(title, author, numberOfPages, hasBeenRead) {
    this.title = title
    this.author = author
    this.numberOfPages = numberOfPages
    this.hasBeenRead = hasBeenRead
}

//shows library as individual book cards
function displayLibrary() {
    const libraryDiv = document.querySelector('.library')
    libraryDiv.innerHTML = ''

    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement('div')
        bookDiv.classList.add('book')

        const titleSpan = document.createElement('span')
        titleSpan.textContent = `${book.title}`
        bookDiv.appendChild(titleSpan)

        const authorSpan = document.createElement('span')
        titleSpan.textContent = `by ${book.author}`
        bookDiv.appendChild(titleSpan)

        const pagesSpan = document.createElement('span')
        titleSpan.textContent = `${book.numberOfPages} pages`
        bookDiv.appendChild(titleSpan)

        const readButton = document.createElement('button')
        readButton.textContent = book.hasBeenRead ? 'Read' : 'Not Read'
        readButton.addEventListener('click', () => {
            toggleReadStatus(index)
        })
        bookDiv.appendChild(readButton)

        const removeButton = document.createElement('button')
        removeButton.textContent = 'Remove'
        removeButton.addEventListener('click', () => {
            removeBookFromLibrary(index)
        })
        bookDiv.appendChild(removeButton)

        libraryDiv.appendChild(bookDiv)
    })
}

//adds book to library
function addBookToLibrary(book) {
    myLibrary.push(book)
    displayLibrary()
}

//removes book from library at given index
function removeBookFromLibrary(index) {
    if(index >= 0 && index < myLibrary.length){
        myLibrary.splice(index, 1)
        displayLibrary()
    }
}

//changes hasBeenRead property of book at given index
function toggleReadStatus(index) {
    if (index >= 0 && index < myLibrary.length) {
        myLibrary[index].hasBeenRead = !myLibrary[index].hasBeenRead
        displayLibrary()
    }
}

//shows overlay + addBook form when addBook button is clicked
document.querySelector('.addBookBtn').addEventListener('click', function() {
    document.getElementById('formOverlay').classList.add('show');
})

//hides overlay when anywhere outside the form is clicked
document.getElementById('formOverlay').addEventListener('click', function(event) {
    if (event.target === this) {
        this.classList.remove('show');
    }
})
