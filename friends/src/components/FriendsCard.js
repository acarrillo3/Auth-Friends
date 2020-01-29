import React from 'react';
import {Link} from 'react-router-dom';

const FriendsCard = (props) => {
    const { friend, deleteFriend } = props;
    console.log(friend);
    return (
        <div style={{border: '2px solid yellow', borderRadius: '20%'}}>
            <h3>{friend.name}</h3>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
            <button><Link to={`/${edit-friend}`}>Edit</Link></button>
            <button onClick={() => deleteFriend(friend.id)}>Delete</button>
        </div>
    )
}
export default FriendsCard;