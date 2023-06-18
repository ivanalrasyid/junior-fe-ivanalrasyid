import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/Home';
import MovieList from './components/movieList/MovieList';
import NotFound from "./components/NotFound/NotFound"
import Movie from './pages/home/MovieDetail/Movie';
import Contact from './components/Contact/Contact';
import { Watchlist } from "./components/WatchList/WatchList";
import { Watched } from "./components/WatchList/Watched";

import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/movie/:id" element={<Movie />}></Route>
            <Route path="/movies/:type" element={<MovieList />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/watchlist" element={<Watchlist />}></Route>
            <Route path="/watched" element={<Watched />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;

// CLEARR !!!