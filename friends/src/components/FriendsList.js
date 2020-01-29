import React, { useState, useEffect } from "react";
import axiosWithAuth from '../axiosWithAuth';
import FriendsCard from './FriendsCard';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    const [friendDeleted, setFriendDeleted] = useState({});

    const deleteFriend = (id) => {
        axiosWithAuth().delete(`http://localhost:5000/api/friends/${id}`)
            .then(res => {
                console.log("Delete:", res);
                setFriendDeleted(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends/')
            .then(res => {
                console.log(res);
                setFriends(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [friendDeleted]);

    return (
        <div>
            <h1>Friends List</h1>
            {/* <AddFriend /> */}
            {friends.map(friend => (
                <FriendsCard 
                friend={friend} 
                key={friend.id} 
                deleteFriend={deleteFriend}
            />
            ))}
        </div>
    )
}

export default FriendsList;