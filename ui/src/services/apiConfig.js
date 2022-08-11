import axios from 'axios';

let apiUrl;

const apiUrls = {
production: "https://jsonbookapi1.herokuapp.com/api/books",
development: "https://jsonbookapi1.herokuapp.com/api/books",

};

if  (window.location.hostname === "localhost") {
    apiUrl = apiUrls.development
}
    else {
        apiUrl =apiUrls.production
    }

    const api = axios.create({

        baseURL: apiUrl,
    }

    );

    export default api;