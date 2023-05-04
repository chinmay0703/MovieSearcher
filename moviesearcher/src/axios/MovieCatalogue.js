import axios from 'axios';


class MovieCatalogue {
    constructor() {
        this.baseUrl = "http://www.omdbapi.com/"
    }

   
    getAllMovies(title, pageNo) {
        const params = {
            apikey: "5e0c42f3",
            type: "movie",
            r: "json",
            t: "movie",
            y: "",
            s: title,  // wildcard to get all movies
            page: pageNo,  // start with first page of results
        };
        return axios.get(this.baseUrl, { params })
    }

}

export default new MovieCatalogue();