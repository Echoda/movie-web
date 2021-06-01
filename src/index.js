import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css'
import ProtectedRoute from './ProtectedRoute';
import Home from './pages/home/index';
import Admin from './pages/admin/index';
import Login from './pages/login/index.jsx';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/login"  component={Login} />
                <ProtectedRoute path="/admin"  component={Admin} />
            </Switch>
        </Router>
    )
}

ReactDom.render(<App />, document.getElementById('root'));