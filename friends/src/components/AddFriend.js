import React, { useState } from "react";
import axiosWithAuth from "../axiosWithAuth";

const AddFriend = () => {
  const [newFriend, setNewFriend] = useState({
    id: Date.now(),
    name: "",
    age: "",
    email: ""
  });

  const [friendAdded, setFriendAdded] = useState(false);

  const handleChange = e => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
  };

  // function for age to convert value to a number
  const handleAgeChange = e => {
    setNewFriend({ ...newFriend, age: Number(e.target.value) });
  };

  const addNewFriend = e => {
    e.preventDefault();
    console.log(newFriend);
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", newFriend)
      .then(res => {
        console.log(res);
        setFriendAdded(true);
      })
      .catch(err => {
        console.log(err);
      });
      setNewFriend({
          ...newFriend,
          name: '',
          age: '',
          email: ''
      })
  };

  return (
    <div style={{background: "skyblue", textAlign: "center"}}>
        <h2>Add Friend</h2>
      <form onSubmit={e => addNewFriend(e)}>
        <label htmlFor="name">
          Name:{" "}
          <input
            type="text"
            name="name"
            placeholder="Enter friend's name"
            onChange={handleChange}
            value={newFriend.name}
          />
        </label><br/>
        <label htmlFor="age">
          Age:{" "}
          <input
            type="number"
            name="age"
            placeholder="Enter friend's age"
            onChange={handleAgeChange}
            value={newFriend.age}
          />
        </label><br/>
        <label htmlFor="email">
          Email:{" "}
          <input
            type="email"
            name="email"
            placeholder="Enter friend's email"
            onChange={handleChange}
            value={newFriend.email}
          />
        </label><br/>
        <button>Submit</button>
      </form>
      {friendAdded ? (<p>Friend has been added</p>) : ''}
    </div>
  );
};

export default AddFriend;
