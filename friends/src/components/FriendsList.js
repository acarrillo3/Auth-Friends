import React, { useState, useEffect } from "react";
import axiosWithAuth from '../axiosWithAuth';
import FriendsCard from './FriendsCard';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
            .then(res => {
                console.log(res);
                setFriends(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <div>
            <h1>Friends List</h1>
            {friends.map(friend => (
                <FriendsCard friend={friend} key={friend.id} />
            ))}
        </div>
    )
}

export default FriendsList;