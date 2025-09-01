import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Book } from './book';
import {RootState} from "../redux/store";

interface BookState {
    books: Book[];
    loading: boolean;
    error: null | Error|unknown;
}

const initialState: BookState = {
    books:[],
    loading:false,
    error: null,
};

// Типизация Thunk-функции
export const fetchBooks = createAsyncThunk<Book[], void, { state: RootState }>(
    'books/fetchBooks',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('https://api.example.com/books');
            const data = await response.json();
            return data as Book[];
        } catch (error) {
            return rejectWithValue('Failed to fetch books');
        }
    }
);

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBooks.fulfilled, (state, action: PayloadAction<Book[]>) => {
                state.loading = false;
                state.books = action.payload;
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Unknown error';
            });
    },
});

export default bookSlice.reducer;