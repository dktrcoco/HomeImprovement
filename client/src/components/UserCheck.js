import React from 'react';

async function userCheck() {
    return await fetch('http://localhost:3001/userInfo').then(response => {
        console.log(response);
        return response.json()
    })
}

function UserCheck() {
    userCheck().then(function(data) {
        console.log(data);
    });
    return (
        null
        // <p>userCheck</p>
        // need to check if the user is logged in
        // make an api request in this component
    )
        
}

export default UserCheck;