import React from 'react';
import profilePic from '../assets/p.png'; // Add your picture here

const Profile: React.FC = () =>
{
    return (
        <section className="profile">
            <img src={profilePic} alt="Your Name" className="profile-pic" />
            <p>
                Hello! I'm a software engineer with a passion for developing scalable and efficient solutions.
                I love learning new technologies and tackling complex problems.
            </p>
        </section>
    );
}

export default Profile;
