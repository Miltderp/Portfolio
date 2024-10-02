import React from 'react';
import javaLogo from '../assets/logos/java.svg';
import jsLogo from '../assets/logos/javascript.png';
import tsLogo from '../assets/logos/typescript.png';
// Import the rest of the logos similarly

const Technologies: React.FC = () =>
{
    const techs = [
        { name: 'Java', logo: javaLogo },
        { name: 'JavaScript', logo: jsLogo },
        { name: 'TypeScript', logo: tsLogo },
        // Add other technologies here
    ];

    return (
        <section className="technologies">
            <h2>Technologies I Work With</h2>
            <div className="tech-grid">
                {techs.map((tech) => (
                    <div key={tech.name} className="tech-item">
                        <img src={tech.logo} alt={tech.name} className="tech-logo" />
                        <p>{tech.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Technologies;
