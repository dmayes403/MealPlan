import { FETCH_CATEGORIES } from '../actions/types';
import { Action } from '../interfaces/action';
import { RecipeState } from '../interfaces/recipeState';

const startingState = {
    categories: []
} as RecipeState;

export default function(state = startingState, action: Action) {
    switch (action.type) {
        case FETCH_CATEGORIES:
            console.log(state);
            console.log(action.payload);
            const newState = {
                ...state,
                categories: action.payload
            }
            console.log(newState);
            return newState;
        default:
            return state;
    }
}