import React from 'react';
import profilePic from '../assets/p.png'; // Add your picture here

const Profile: React.FC = () =>
{
    return (
        <section className="profile">
            <img src={profilePic} alt="Your Name" className="profile-pic" />
            <p>
                Hello! I’m an aspiring software engineer with a passion for creating 
                innovative solutions to complex problems. I actively seek out new technologies 
                and strive to expand my knowledge, continuously learning and adapting to the ever-evolving tech landscape.
            </p>
        </section>
    );
}

export default Profile;
