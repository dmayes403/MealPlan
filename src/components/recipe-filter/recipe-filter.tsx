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

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

interface TabContainerProps {
    children?: React.ReactNode;
}

function TabContainer(props: TabContainerProps) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
}

function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
        setValue(newValue);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                </Tabs>
            </AppBar>
            {value === 0 && <TabContainer>Item One</TabContainer>}
            {value === 1 && <TabContainer>Item Two</TabContainer>}
            {value === 2 && <TabContainer>Item Three</TabContainer>}
        </div>
    );
}
const mapStateToProps = (recipes: RecipeState) => {
    console.log(recipes);
    return recipes;
};

export default connect(mapStateToProps, actions)(RecipeFilter);