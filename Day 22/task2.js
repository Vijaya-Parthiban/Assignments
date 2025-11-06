const book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  pages: 208,

  describe() {
    console.log(`"${this.title}" by ${this.author}, ${this.pages} pages.`);
  }
};

book.describe();