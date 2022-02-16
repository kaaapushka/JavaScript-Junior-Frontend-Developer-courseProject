import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Qualitie from './qualitie';

const User = ({ users, userId }) => {
    const oneOfUser = users.find((user) => user._id === userId);

    const history = useHistory();
    const handleSave = () => {
        history.push('/users');
    };

    return (
        <>
            <h1>{oneOfUser.name}</h1>
            <h1>Профессия: {oneOfUser.profession.name}</h1>
            <h1>
                {oneOfUser.qualities.map((qual) => (
                    <Qualitie key={qual._id} {...qual} />
                ))}
            </h1>

            <h1>completedMeetings: {oneOfUser.completedMeetings}</h1>
            <h1>Оценка: {oneOfUser.rate}</h1>
            <button
                onClick={() => {
                    handleSave();
                }}
            >
                Все пользоваьели
            </button>
        </>
    );
};

User.propTypes = {
    users: PropTypes.array,
    userId: PropTypes.number,
};

export default User;
