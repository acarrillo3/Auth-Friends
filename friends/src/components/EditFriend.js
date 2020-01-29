import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../axiosWithAuth';

const EditFriend = (props) => {
    const [friendToEdited, setfriendToEdited] = useState({
        name: '',
        age: '',
        email: ''
    });
    const id = props.match.params.id;

    useEffect(() => {
        axiosWithAuth().get(`http://localhost:5000/api/friends/${id}`)
            .then(res => {
                // console.log(res.data);
                setfriendToEdited(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const handleChange = (e) => {
        setfriendToEdited({ ...friendToEdited, [e.target.name]: e.target.value });
    }

    // function for age to convert value to a number.
    const handleAgeChange = (e) => {
        setfriendToEdited({ ...friendToEdited, age: Number(e.target.value) });
    }


    const editFriend = (e) => {
        e.preventDefault();

        axiosWithAuth().put(`http://localhost:5000/api/friends/${id}`, friendToEdited)
            .then(res => {
                props.history.push('/friends'); // Redirect to friends list
            })
            .catch(err => {
                console.log(err);
            })

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
                    value={friendToEdited.name}
                /></label>
                <label htmlFor="age">Age: <input
                    type="number"
                    name="age"
                    placeholder="Enter friend's age"
                    onChange={handleAgeChange}
                    value={friendToEdited.age}
                /></label>
                <label htmlFor="email">Email: <input
                    type="email"
                    name="email"
                    placeholder="Enter friend's email"
                    onChange={handleChange}
                    value={friendToEdited.email}
                /></label>
                <button>Submit</button>
            </form>
            {/* {friendAdded ? (<p className="added">Friend has been added</p>) : ''} */}
        </div>
    )
}

export default EditFriend;