import React, { useState } from 'react'
import axiosWithAuth from '../axiosWithAuth';

const EditFriend = (props) => {
    const { ogFriend } = props;
    console.log('Edit:', ogFriend);

    const [friend, setFriend] = useState({
        // id: ogFriend.id,
        // name: '',
        // age: '',
        // email: ''
    });
    const [friendEdited, setfriendEdited] = useState(false);

    const handleChange = (e) => {
        setFriend({ ...friend, [e.target.name]: e.target.value });
    }

    // function for age to convert value to a number.
    const handleAgeChange = (e) => {
        setfriendEdited({ ...friend, age: Number(e.target.value) });
    }


    const editFriend = (e) => {
        e.preventDefault();

    }

    return (
        <div className="add-form">
            <h2>Edit Friend</h2>
            <form onSubmit={(e) => editFriend(e)}>
                <label htmlFor="name">Name: <input
                    type="text"
                    name="name"
                    placeholder="Enter friend's name"
                    onChange={handleChange}
                    value={friend.name}
                /></label>
                <label htmlFor="age">Age: <input
                    type="number"
                    name="age"
                    placeholder="Enter friend's age"
                    onChange={handleAgeChange}
                    value={friend.age}
                /></label>
                <label htmlFor="email">Email: <input
                    type="email"
                    name="email"
                    placeholder="Enter friend's email"
                    onChange={handleChange}
                    value={friend.email}
                /></label>
                <button>Submit</button>
            </form>
            {/* {friendAdded ? (<p className="added">Friend has been added</p>) : ''} */}
        </div>
    )
}

export default EditFriend;