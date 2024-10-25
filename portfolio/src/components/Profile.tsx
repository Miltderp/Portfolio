import React from 'react';

const Profile: React.FC = () =>
{
    return (
        <section className="profile flex flex-col items-center md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6 p-6 bg-white rounded-lg shadow-md">
            <img src="/p.png" alt="Milton Joseph" className="profile-pic w-32 h-32 rounded-full object-cover" />
            <div>
                <h2 className="text-2xl font-bold mb-2">Your Name</h2>
                <p className="text-gray-700">
                    Hello! I'm an aspiring software engineer with a passion for creating
                    innovative solutions to complex problems. I actively seek out new technologies
                    and strive to expand my knowledge, continuously learning and adapting to the ever-evolving tech landscape.
                </p>
            </div>
        </section>
    );
}

export default Profile;