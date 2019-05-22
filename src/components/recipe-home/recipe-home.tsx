import React, { Component } from 'react';
import { connect } from 'react-redux';
import './recipe-home.scss';
import * as actions from '../../actions';

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

function mapStateToProps({}) {
    return {};
}

export default connect(mapStateToProps, actions)(RecipeHome);