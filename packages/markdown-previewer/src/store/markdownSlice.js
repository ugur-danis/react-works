import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    exampleMarkdown: `# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### \`npm start\`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
    `,
    markdownText: ''
};

const markdownSlice = createSlice({
    name: 'markdownSlice',
    initialState,
    reducers: {
        setMarkdownText: (state, action) => {
            state.markdownText = action.payload;
        }
    }
});

export const { setMarkdownText } = markdownSlice.actions;
export const markdownSelector = state => state.markdown;
export default markdownSlice.reducer;