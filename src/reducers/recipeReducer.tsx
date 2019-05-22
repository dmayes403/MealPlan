import { FETCH_CATEGORIES } from '../actions/types';
import { Action } from '../interfaces/action';

interface RecipeState {
    categories: string[];
}

const startingState = {
    categories: []
} as RecipeState;

export default function(state = startingState, action: Action) {
    switch (action.type) {
        case FETCH_CATEGORIES:
            const newState = {
                ...state,
                categories: action.payload
            }
            return newState;
        default:
            return state;
    }
}




// export default function(state = {movies: [], pageData: {}}, action) {
//     // ^^ default state to an empty array
//     switch (action.type) {
//         case SEARCH_MOVIES:
//             return action.payload;
//         default:
//             return state;
//     }
// }