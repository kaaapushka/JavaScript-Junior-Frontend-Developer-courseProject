import React from 'react';
import Qualitie from './qualitie';
import Bookmark from './bookmark';

const User = ({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  bookmark,
  onDelete,
  onToggleBookMark,
}) => {
  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>
        {qualities.map((qual) => (
          <Qualitie {...qual} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate} /5</td>
      <td>
        <Bookmark status={bookmark} onClick={() => onToggleBookMark(_id)} />
      </td>
      <td>
        <button
          onClick={() => onDelete(_id)}
          className='btn btn-secondary btn-danger'
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default User;

// name={Object.values(qualities).map((q) => q.name)}
// color={Object.values(qualities).map((q) => q.color)}
// _id={Object.values(qualities).map((q) => q._id)}
