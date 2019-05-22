import axios from 'axios';

const FETCH_CATEGORIES = 'fetch categories';

export const searchMovies = () => async dispatch => {
    // const res = await axios.get(`/api/searchMovies/${movieTitle}/${pageNumber}`);
    // dispatch({ type: SEARCH_MOVIES, payload: { movies: res.data.movies, pageData: res.data.pageData }});
    axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`).subscribe(categories => {
        console.log(categories);
        dispatch({ type: FETCH_CATEGORIES, payload: {categories}});
    })
};