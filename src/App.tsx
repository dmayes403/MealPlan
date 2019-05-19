import React, { Component } from 'react';
import './App.css';
import { 
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import Home from './components/home/home'
import TopNav from './components/top-nav/top-nav';

class App extends Component {
    render() {
        return (
            // <div className="App">
            //     <header className="App-header">
            //     </header>
            // </div>
            <Router>
                <TopNav />
                <div>
                    <Route exact path="/" component={Home}/>
                </div>
            </Router>
        );
    }
}

export default App;
