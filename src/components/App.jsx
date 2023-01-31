import { useEffect } from "react";
import axios from "axios";

function App() {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "7312f41c50231306aa4e719fc961450a";

  const fetchMovies = async () => {
    const data = await axios.get(`${API_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
      },
    });
    console.log("data", data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return <div></div>;
}

export default App;
