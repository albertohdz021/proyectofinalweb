const Book = require('../Models/BooksModel');
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    handleError(error, res);
  }
};

const getById = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).json({ message: 'Book not found' });
    } else {
      res.json(book);
    }
  } catch (error) {
    handleError(error, res);
  }
};

const addBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook); 
  } catch (error) {
    if (error.code === 11000) { 
      res.status(400).json({ message: 'Book already exists' });
    } else {
      handleError(error, res);
    }
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body);
    if (!book) {
      res.status(404).json({ message: 'Book not found' });
    } else {
      res.json(book);
    }
  } catch (error) {
    handleError(error, res);
  }
};
const searchBook = async (req, res) => {
  try {
    const search = req.params.titulo;
    const books = await Book.find({ titulo: { $regex: search, $options: 'i' } });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error al encontrar el libro', error: error });
  }
};


const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      res.status(404).json({ message: 'Book not found' });
    } else {
      res.json({ message: 'Book deleted' });
    }
  } catch (error) {
    handleError(error, res);
  }
};



function handleError(error, res) {
  console.error(error);
  res.status(500).json({ message: 'Something went wrong' });
}

module.exports = { 
                    getAllBooks, getById, 
                    addBook, updateBook, 
                    deleteBook,searchBook

                  };
