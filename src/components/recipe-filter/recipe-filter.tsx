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
import { useState } from 'react';

interface TestProps {
    getCategories: any,
    recipes?: {
        categories: {strCategory: string}[]
    }
}

class RecipeFilter extends Component<TestProps> {
    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        console.log(this.props);
        if (this.props.recipes && this.props.recipes.categories.length) {
            return (
                <div style={{margin: '16px'}}>
                    <Tabs 
                        value={0}>
                        {/* {this.props.recipes.categories.map(category => {
                            return <Tab key={category.strCategory} label={category.strCategory}/>
                        })} */}
                        <Tab label="Categories"/>
                    </Tabs>
                    {value === 0 && <TabContainer>Item One</TabContainer>}
                </div>
            )
        } else {
            return (
                <p>No Categories Exist</p>
            )
        }
    }

}

const mapStateToProps = (recipes: RecipeState) => {
    console.log(recipes);
    return recipes;
};

export default connect(mapStateToProps, actions)(RecipeFilter);