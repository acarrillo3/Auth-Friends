import React from 'react';

const FriendsCard = (props) => {
    const {friend} = props;
    console.log(friend);
    return (
        <div>
            <h3>{friend.name}</h3>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
        </div>
    )
}
export default FriendsCard;