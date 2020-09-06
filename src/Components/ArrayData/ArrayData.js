import React, { useState, useEffect } from 'react';

const ArrayData = () => {
    const [ users, setUsers ] = useState([]);
    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then( res => res.json())
        .then(data => setUsers(data))
    }, []) 
    return (
        <div>
            {
    users.map( user => <li>{user.name}</li>)
}
        </div>
    );
};

export default ArrayData;