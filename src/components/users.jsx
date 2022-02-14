import React, { useState, useEffect } from 'react';
import Pagintion from './pagination';
import { paginate } from '../utils/paginate';
import PropTypes from 'prop-types';
import GroupList from './groupList';
import api from '../API';
import SearchStatus from './searchStatus';
import _ from 'lodash';
import UserTable from './usersTabels';

const Users = ({ users: allUsers, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const pageSize = 2;

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleSort = (item) => {
        console.log(item);
    };

    const filteredUsers = selectedProf
        ? allUsers.filter((user) => _.isEqual(user.profession, selectedProf))
        : allUsers;

    const count = filteredUsers.length;

    const usersCrop = paginate(filteredUsers, currentPage, pageSize);
    const clearFilter = () => {
        setSelectedProf();
    };
    return (
        <div className='d-flex'>
            {professions && (
                <div className='d-flex flex-column flex-shrink-0 p-3'>
                    <GroupList
                        selectedItem={selectedProf}
                        items={professions}
                        onItemSelect={handleProfessionSelect}
                    />
                    <button
                        className='btn btn-secondary mt-2'
                        onClick={clearFilter}
                    >
                        Очистить
                    </button>
                </div>
            )}
            <div className='d-flex flex-column'>
                <SearchStatus length={count} />
                {count > 0 && (
                    <UserTable
                        onSort={handleSort}
                        users={usersCrop}
                        {...rest}
                    />
                )}
                <div className='d-flex justify-content-center'>
                    <Pagintion
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};

Users.propTypes = {
    users: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default Users;
