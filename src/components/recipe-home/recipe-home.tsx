import React, { Component } from 'react';
import { connect } from 'react-redux';
import './recipe-home.scss';
import * as actions from '../../actions';
import { RecipeState } from '../../interfaces/recipeState';

interface TestProps {
    getCategories: any
}

class RecipeHome extends Component<TestProps> {
    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        return (
            <div className="rh-main-container">
                <span>Recipe Home</span>
            </div>
        )
    }
}

const mapStateToProps = ( recipes: RecipeState) => {
    console.log(recipes);
    return recipes;
};

export default connect(mapStateToProps, actions)(RecipeHome);