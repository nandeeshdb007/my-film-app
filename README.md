# Movie App

A mobile application built with **React Native** that allows users to browse popular movies, search for specific titles, and view detailed information including cast members and user reviews. 

## Features

- **Home**: Browse a curated list of popular movies.
- **Search**: Search for movies by title.
- **Movie Details**: View comprehensive information about a movie, including:
    - Overview and rating
    - Release date
    - Cast members
    - User reviews
- **Profile**: User profile section.

## Tech Stack

- **React Native** (0.83.1)
- **TypeScript**
- **React Navigation** (Bottom Tabs, Native Stack)
- **Axios** (for API requests)
- **React Native Vector Icons**

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (>= 20)
- React Native CLI environment setup (Android Studio / Xcode)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd movie_app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add .env:
   ```bash
  API_URL=""
   API_KEY=""  
   ```

### Running the App

Start the Metro Bundler:

```bash
npm start
```

Run on Android:

```bash
npm run android
```

## Project Structure

The source code is located in the `src` directory:

- `src/components`: Reusable UI components.
- `src/screens`: Application screens (Home, Search, MovieDetails, Profile).
- `src/navigation`: Navigation configuration (Tab and Stack navigators).
- `src/services`: API service functions (TMDB integration).
- `src/hooks`: Custom React hooks.
- `src/types`: TypeScript definitions.
- `src/utils`: Utility functions.
