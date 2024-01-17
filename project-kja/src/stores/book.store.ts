import { create } from "zustand";
import axios from "axios";

interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
}

interface BookState {
  books: Book[];
  fetchBooks: () => void;
}

export const useBookState = create<BookState>((set) => ({
  books: [],
  fetchBooks: async () => {
    const response = await axios.get("http://localhost:5001/books");
    set({ books: response.data });
  },
}));
