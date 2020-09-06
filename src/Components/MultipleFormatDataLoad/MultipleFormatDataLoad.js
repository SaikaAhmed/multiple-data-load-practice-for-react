import React, { useState, useEffect } from 'react';

const MultipleFormatDataLoad = () => {
    const [randomUser, setRandomUser] = useState({});
    useEffect( () => {
        fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(data => setRandomUser(data.results[0]))
    }, [])
    return (
        <div>
            <h2>{randomUser.gender}</h2>
    <h2>{randomUser.name && randomUser.name.first}</h2>
    {/* or
    <h2>{randomUser.name?.first}</h2> */}
        </div>
    );
};

export default MultipleFormatDataLoad;