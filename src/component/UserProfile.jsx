import React, { useState } from 'react';

function UserProfile({ userName, email, image }) {
    const [isHovered, setIsHovered] = useState(false);
    const style = {
        width: "260px",
        height: "350px",
        borderRadius: "5px",
        border: "solid white 1px",
        boxShadow: isHovered ? "" : "5px 10px 5px 1px rgba(0, 0, 0, .2)",
        backgroundColor: "#CE7C56",
        alignItems: "center",
        margin: "40px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        transition: "all 0.3s ease",
        transform: isHovered ? 'scale(1)' : 'scale(1.05)'
    }
    const photo = {
        objectFit: "contain",
        borderRadius: "50%",
        width: "125px",
        height: "125px"
    }
    return (
        <>
            <div
                className="profile-card"
                style={style}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <h2>User Profile</h2>
                <img src={image} alt="User Photo" className="photo" style={photo} />
                <p>Name: {userName}</p>
                <p>Email: {email}</p>
                <a href="mailto:jane.doe@example.com">Send Email</a>
            </div>
        </>
    )
}

export default UserProfile