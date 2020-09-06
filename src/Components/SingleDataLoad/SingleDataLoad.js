import React, { useState, useEffect } from 'react';

const SingleDataLoad = () => {
    const [ singleUser, setSingleUser ] = useState({});
    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then( res => res.json() )
        .then(data => setSingleUser(data))
    }, [])
    return (
        <div>
            <h2>{singleUser.name}</h2>
        </div>
    );
};

export default SingleDataLoad;