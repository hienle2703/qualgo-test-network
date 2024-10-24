# Qualgo Network SDK

This package is part of the Qualgo test for mobile developer position by Le Vu Toan Hien.
The main purpose of this package is to provide a simple way to make network requests and handle responses.

## Features

- Get Random Movies
- Search Movies
- Get Movie Details

## Installation

```bash
npm install qualgo-network-sdk
```

## Usage

```javascript
import {
  getRandomMovies,
  searchMovie,
  getMovieDetailById,
} from "qualgo-network-sdk";

const randomMovies = await getRandomMovies();
const searchResults = await searchMovie("movie name");
const movieDetail = await getMovieDetailById(123); // with id from imdb
```
