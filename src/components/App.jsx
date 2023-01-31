import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

// This is the main component for our movie application.
function App() {
  // URL of the movie database API
  const API_URL = "https://api.themoviedb.org/3";
  // API Key for accessing the database
  const API_KEY = "7312f41c50231306aa4e719fc961450a";

  //TODO: Move API key to .env file

  // State variable to store the movie data
  const [movies, setMovies] = useState([]);

  // Async function to fetch movie data from the API
  const fetchMovies = async () => {
    // Get the data using axios and store the 'results' in a constant
    const {
      data: { results },
    } = await axios.get(`${API_URL}/discover/movie`, {
      params: {
        api_key: API_KEY, // Pass the API Key as a parameter
      },
    });

    // Set the state with the movie data
    setMovies(results);
  };

  // Use effect hook to run the `fetchMovies` function only once on component mount
  useEffect(() => {
    fetchMovies();
  }, []);

  // Render the movie cards for each movie in the state
  const renderMovies = () => {
    return movies.map((movie) => {
      // Return a MovieCard component for each movie, passing the movie data as a prop
      return <MovieCard key={movie.id} movie={movie} />;
    });
  };

  // Return the movie cards inside a div
  return (
    <div className="w-screen h-screen overflow-auto bg-gray-200 mx-auto">
      <div className="w-[1000px] mx-auto">{renderMovies()}</div>
    </div>
  );
}

// Export the App component as the default export
export default App;
