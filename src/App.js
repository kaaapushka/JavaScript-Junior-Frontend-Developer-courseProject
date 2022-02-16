/* eslint-disable comma-dangle */
import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './components/navBar';
import Main from './components/main';
import Login from './components/login';
// import UserList from './components/userList';
import Users from './components/users';

function App() {
    return (
        <div>
            <NavBar />
            <Route path='/' exact component={Main} />
            <Route path='/login' component={Login} />
            <Route path='/users/:userId?' component={Users} />
        </div>
    );
}

export default App;
