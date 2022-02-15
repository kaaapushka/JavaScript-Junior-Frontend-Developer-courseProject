import React from 'react';
import PropTypes from 'prop-types';
// import User from './user';
import TableHeader from './tableHeader';
import TableBody from './tableBody';
import BookMark from './bookMark';
import QualitiesList from './qualitiesList';
import Table from './table';

const UserTable = ({
    users,
    onSort,
    selectedSort,
    onToggleBookMark,
    onDelete,
    ...rest
}) => {
    const columns = {
        name: { path: 'name', name: 'Имя' },
        qualities: {
            name: 'Качества',
            component: (user) => <QualitiesList qualities={user.qualities} />,
        },
        professions: { path: 'profession.name', name: 'Профессия' },
        completedMeetings: {
            path: 'completedMeetings',
            name: 'Встретился, раз',
        },
        rate: { path: 'rate', name: 'Оценка' },
        bookmark: {
            path: 'bookmark',
            name: 'Избранное',
            component: (user) => (
                <BookMark
                    status={user.bookmark}
                    onClick={() => onToggleBookMark(user._id)}
                />
            ),
        },
        delete: {
            component: (user) => (
                <button
                    onClick={() => onDelete(user._id)}
                    className='btn btn-secondary btn-danger'
                >
                    delete
                </button>
            ),
        },
    };
    return (
        <Table>
            <TableHeader {...{ onSort, selectedSort, columns }} />
            <TableBody {...{ columns, data: users }} />
        </Table>
    );
};

UserTable.propTypes = {
    users: PropTypes.array,
    onSort: PropTypes.func,
    selectedSort: PropTypes.object.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default UserTable;
