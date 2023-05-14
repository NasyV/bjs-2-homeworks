//ЗАДАНИЕ 1
class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.stateStatus = 100;
      this.type = null;
    }
  
    fix () {
      return (this.state *= 1.5);
    }
  
    set state (stateControl) {
      if (stateControl >= 100) {
        this.stateStatus = 100;
      } else if (stateControl < 0) {
        this.stateStatus = 0;
      } else {
        this.stateStatus = stateControl;
      }
    }
  
    get state () {
      return this.stateStatus;
    }
  }
  
  class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.stateStatus = 100;
      this.type = "magazine";
    }
  }
  
  class Book extends PrintEditionItem {
    constructor (author,name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.stateStatus = 100;
      this.type = "book";
    }
  }
  
  class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.stateStatus = 100;
      this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.stateStatus = 100;
      this.type = "fantastic";
    }
  }
  
  class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.stateStatus = 100;
      this.type = "detective";
    }
  }

//ЗАДАНИЕ 2

  class Library extends Book {
    constructor (nameOfLibrary, author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.name = nameOfLibrary;
      this.books = [];
    }
    
    addBook (book) {
      if (this.state > 30) {
        return this.books.push(book);
      }
    }
    
    findBookBy (type, value) {
      for (let i = 0; i < this.books.length; i++) {
        for (let key in this.books[i - 1]) {
          if (this.books[i][type] == value) {
            return this.books[i];
          } else {
            return null;
          }
        }
      }
    }
  
    giveBookByName (bookName) {
      for (let i = 0; i < this.books.length; i++) {
        for (let key in this.books[i]) {
          if (this.books[i][key] != bookName) {
            const book = this.books[i];
            this.books.splice(i, 1);
            return book;
          }
        }
      }
      
      return null;
    }
  }
  
  