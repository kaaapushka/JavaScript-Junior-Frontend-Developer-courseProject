import React, { useState } from 'react';
import User from './user';
import Pagintion from './pagination';
import { paginate } from '../utils/paginate';
import PropTypes from 'prop-types';

const Users = ({ users: allUsers, ...rest }) => {
    const count = allUsers.length;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const users = paginate(allUsers, currentPage, pageSize);

    return (
        <>
            {count > 0 && (
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Имя</th>
                            <th scope='col'>Качества</th>
                            <th scope='col'>Провфессия</th>
                            <th scope='col'>Встретился, раз</th>
                            <th scope='col'>Оценка</th>
                            <th scope='col'>Избранное</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <User key={user._id} {...rest} {...user} />
                        ))}
                    </tbody>
                </table>
            )}
            <Pagintion
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};

Users.propTypes = {
    users: PropTypes.object.isRequired,
    rest: PropTypes.object.isRequired,
};

export default Users;
