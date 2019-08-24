const {Book} = require("../x");

describe("Book", () => {
    it("should...", () => {
      const sayMyTitle = Book.prototype.sayMyTitle = jest.fn();
      const book = new Book('a', 'b', 'c');
      const expected = {
        title: 'a',
        author: 'b',
        isbn: 'c'
      }
  
      book.sayMyTitle();
  
      expect(sayMyTitle).toHaveBeenCalledTimes(1);
      expect(book).toEqual(expected);
    });
  });

