import React, { useState } from 'react';
import Users from './components/users';
import SearchStatus from './components/searchStatus';
import api from './API';

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };
  const handleToggleBookMark = (userId) => {
    const elementIndex = users.findIndex((user) => user._id === userId);
    const newUsers = [...users];
    const bool = newUsers[elementIndex].bookmark === false ? true : false;
    newUsers[elementIndex].bookmark = bool;
    setUsers(newUsers);
  };
  return (
    <>
      <SearchStatus length={users.length} />

      <Users
        onDelete={handleDelete}
        onToggleBookMark={handleToggleBookMark}
        users={users}
      />
    </>
  );
}

export default App;
