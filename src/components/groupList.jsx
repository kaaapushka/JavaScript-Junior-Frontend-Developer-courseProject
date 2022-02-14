import React from 'react';
import PropTypes from 'prop-types';

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem,
}) => {
    return (
        <ul className='list-group'>
            {Object.keys(items).map((item) => (
                <li
                    key={items[item][valueProperty]}
                    className={
                        'list-group-item' +
                        (items[item] === selectedItem ? ' active' : '')
                    }
                    onClick={() => onItemSelect(items[item])}
                    role='button'
                >
                    {items[item][contentProperty]}
                </li>
            ))}
        </ul>
    );
};

GroupList.defaultProps = {
    valueProperty: '_id',
    contentProperty: 'name',
};

GroupList.propTypes = {
    onItemSelect: PropTypes.func.isRequired,
    items: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    selectedItem: PropTypes.object,
};

export default GroupList;
