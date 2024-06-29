# Movie and Series Library

This project is a simple movie and series library that uses React + Vite, TypeScript, and Tailwind CSS for the frontend, and JSON Server for mocking a REST API backend. It uses @tanstack/react-query for data fetching and state management.

## Overview

The main goal of this project is to create an engaging landing page for a Movie and Series App using React. It features a header with a logo and auth button, filters section for sorting by movies and series, the movie/series section is a data grid along with a footer. The application is fully responsive and compatible across various screen sizes.

## Key Features

- **Header Section:** Includes a logo and Auth button (non-functional).
- **Filters Section:** This is a Search input that allows users to filter movies/series by search for them. The search begins at char>3
- **Dropdown Sort Section:** Allows users to sort the movies/series by year and title in ascending or descending order.
- **Movie/Series card Section (Data Grid):** Displays the first 21 movie/series items fetched from the Mock json where release year for mocie/series is _gte 2010, with each item card containing an image snd movie/series title.
- **Footer Section:** Balances the bottom of the webpage and contains social media and download links (non-functional).
- **API Reference:**The backend API is mocked using JSON Server. The mock json is hosted on Render to act like a react Server API

## Tools & Technology

- React + vite
- Typescript,
- Tailwind CSS,
- Tanstack Query,
  

## How to Use

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the development server using `npm run dev`.
4. Access the application in your browser at `http://localhost:5173`.

## License

This project is licensed under the [MIT License](LICENSE).
