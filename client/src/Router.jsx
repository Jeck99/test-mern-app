import React from 'react'
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import Home from './pages/Home';
import studentsList from "./pages/studentsList";
import HeaderComponent from "./components/header.component";
import AddStudent from "./pages/Add-student";
import Register from "./pages/Register";
import Login from "./pages/Login";
export default function studentsRouter() {
    return (
        <Router>
            <HeaderComponent />
            <Switch>
                <Route exact path='/students' component={studentsList} />
                <Route exact path='/add-student' component={withRouter(AddStudent)} />
                <Route exact path='/register' component={withRouter(Register)} />
                <Route exact path='/login' component={withRouter(Login)} />
                <Route exact path='/' component={withRouter(Home)} />
            </Switch>
        </Router>
    )
}
