import React, { Component } from 'react';
import { RecipeState } from '../../interfaces/recipeState';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';

interface TestProps {
    getCategories: any
}

class RecipeFilter extends Component<TestProps> {
    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        return (
            <div>
                Testing if this is working...
            </div>
        )
    }

}

const mapStateToProps = (recipes: RecipeState) => {
    console.log(recipes);
    return recipes;
};

export default connect(mapStateToProps, actions)(RecipeFilter);