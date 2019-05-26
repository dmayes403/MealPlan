import React, { Component } from 'react';
import { RecipeState } from '../../interfaces/recipeState';
import { connect } from 'react-redux';
import * as actions from '../../actions';

interface TestProps {
    getCategories: any
}

class RecipeFilter extends Component<TestProps> {
    componentDidMount() {
        this.props.getCategories();
    }

    render () {
        return (
            <div>
                Testing if this is working...
            </div>
        )
    }
}

const mapStateToProps = ( recipes: RecipeState) => {
    console.log(recipes);
    return recipes;
};

export default connect(mapStateToProps, actions)(RecipeFilter);