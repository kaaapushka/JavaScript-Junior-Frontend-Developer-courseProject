/* eslint-disable comma-dangle */
import React, { useState, useEffect } from 'react';
import Users from './components/users';
import api from './API';

function App() {
    const [users, setUsers] = useState(api.users.fetchAll());

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };
    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
    };
    return (
        <>
            <Users
                key={users._id}
                onDelete={handleDelete}
                onToggleBookMark={handleToggleBookMark}
                users={users}
            />
        </>
    );
}

export default App;
