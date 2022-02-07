import React, { useState } from 'react';
import api from '../API';

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const renderPhrase = (number) => {
    let classes = 'badge  m-2 bg-';
    classes += number === 0 ? 'danger' : 'primary';

    if (number === 0)
      return <span className={classes}>Никто с тобой не тусанет</span>;
    else if (number === 2 || number === 3 || number === 4)
      return (
        <span className={classes}>
          {number} Человека тусанет с тобой сегодня
        </span>
      );
    else
      return (
        <span className={classes}>
          {number} Человек тусанет с тобой сегодня
        </span>
      );
  };

  const userRow = users.map((user) => {
    const tdTable = (
      <tr key={user._id}>
        <td>{user.name}</td>
        <td>
          {user.qualities.map((qualities) => {
            let classes = `badge m-2 bg-${qualities.color}`;
            return <span className={classes}>{qualities.name}</span>;
          })}
        </td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}/5</td>
        <td>
          <button
            onClick={() => handleDelete(user._id)}
            className='btn btn-secondary btn-danger'
          >
            delete
          </button>
        </td>
      </tr>
    );
    return tdTable;
  });

  return (
    <>
      {renderPhrase(users.length)}
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Имя</th>
            <th scope='col'>Качества</th>
            <th scope='col'>Профессия</th>
            <th scope='col'>Встретился, раз</th>
            <th scope='col'>Оценка</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>{userRow}</tbody>
      </table>
    </>
  );
};

export default Users;
