class BookList {
  constructor() {
    this.title = document.getElementById('title');
    this.author = document.getElementById('author');
    this.addBtn = document.getElementById('add-btn');
    this.books = document.getElementById('books');
    this.booksArr = [];
    this.loadBooks();
    this.addBtn.addEventListener('click', () => this.addItem());
    document.addEventListener('DOMContentLoaded', () => this.loadBooks());
  }

  removeItemAt(index) {
    this.booksArr.splice(index, 1);
  }

  showBooks() {
    this.books.innerHTML = '';
    this.booksArr.forEach((book, index) => {
      const appendBook = `
            <p><strong>"${book.title}"</strong> by ${book.author}</p>
            <button id="btn-${index}">remove</button>
        `;
      const bookContainer = document.createElement('div');

      bookContainer.id = `book-${index}`;
      bookContainer.classList.add(`${(!index % 2) ? 'g-bg' : 'w-bg'}`);
      bookContainer.innerHTML = appendBook;
      this.books.appendChild(bookContainer);

      const removeBtn = document.getElementById(`btn-${index}`);
      removeBtn.addEventListener('click', () => {
        this.removeItemAt(index);
        localStorage.setItem('booksData', JSON.stringify(this.booksArr));
        this.showBooks();
      });
    });
  }

  loadBooks() {
    if (localStorage.booksData) {
      this.booksArr = JSON.parse(localStorage.booksData);
      this.showBooks();
    } else {
      this.booksArr = [];
    }
  }

  addItem() {
    if (this.title.value !== '' && this.author.value !== '') {
      const theBook = {
        title: this.title.value,
        author: this.author.value,
      };

      this.booksArr.push(theBook);
      this.title.value = '';
      this.author.value = '';
      localStorage.setItem('booksData', JSON.stringify(this.booksArr));
      this.showBooks();
    }
  }
}

const bookList = new BookList();