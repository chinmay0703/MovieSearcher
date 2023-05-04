import { useEffect, useState } from "react";
import MovieCatalogue from "../axios/MovieCatalogue";
import "../style/movie.css"
import MovieCard from "./MovieCard";


const Movies = () => {
    const [movies, setMovies] = useState([])
    const [title, setTitle] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        if (
            i === 1 ||
            i === totalPages ||
            (i >= currentPage - 2 && i <= currentPage + 2)
        ) {
            pageNumbers.push(i);
        } else if (
            pageNumbers[pageNumbers.length - 1] !== "..." &&
            pageNumbers[pageNumbers.length - 1] !== totalPages - 1
        ) {
            pageNumbers.push("...");
        }
    }

    const handleSearchChange = (event) => {
        setTitle(event.target.value);
    };

    const searchMovie = () => {
        setCurrentPage(1);
        MovieCatalogue.getAllMovies(title, 1).then((response) => {
            setMovies(response.data.Search || []);
            console.log(response.data)
            setTotalPages(Math.ceil(parseInt(response.data.totalResults) / 10));
        });
    };

    const onPageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
        MovieCatalogue.getAllMovies(title, pageNumber).then((response) => {
            setMovies(response.data.Search || []);
        });
    };

    useEffect(() => {
        MovieCatalogue.getAllMovies(title).then(resp => {
            setTotalPages(resp.totalResults);
            // setMovies(resp.data || []);
        })
    }, [])
    return (
        <div className="container">
            <div className="search-bar">
                <input
                    name="searchBox"
                    type="text"
                    placeholder="Search for movie"
                    className="search-input"
                    value={title}
                    onChange={handleSearchChange}
                />
                <button onClick={searchMovie}>Search</button>
            </div>
            {console.log("return ", movies)}
            <div className="grid-container">
                {
                    movies.map(movie => (
                        <MovieCard key={movie.imdbID} movie={movie}></MovieCard>
                    ))
                }
            </div>
            <div className="pagination">
                {pageNumbers.map((pageNumber, index) =>
                    pageNumber === "..." ? (
                        <span key={index} className="ellipsis">
                            ...
                        </span>
                    ) : (
                        <button
                            key={index}
                            className={pageNumber === currentPage ? "active" : ""}
                            onClick={() => onPageClick(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    )
                )}
            </div>
        </div>
    )
}

export default Movies;