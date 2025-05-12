import React from 'react';
import './team.css';

const teamMembers = [
  {
    name: 'Anurag Yadav',
    role: 'Founder',
    image: 'https://media.licdn.com/dms/image/v2/D5635AQFOmU9Hq2dSTg/profile-framedphoto-shrink_400_400/B56Zaf2fDhHgAg-/0/1746438582770?e=1747638000&v=beta&t=5lv_Yt0PszvSmhSXgG3gqLi41-RJJdDKgDehtNXJc9Y',
  },
  {
    name: 'Anurag Yadav',
    role: 'Lead Developer',
    image: 'https://media.licdn.com/dms/image/v2/D5635AQFOmU9Hq2dSTg/profile-framedphoto-shrink_400_400/B56Zaf2fDhHgAg-/0/1746438582770?e=1747638000&v=beta&t=5lv_Yt0PszvSmhSXgG3gqLi41-RJJdDKgDehtNXJc9Y',
  },
  {
    name: 'Anurag Yadav',
    role: 'UI/UX Designer',
    image: 'https://media.licdn.com/dms/image/v2/D5635AQFOmU9Hq2dSTg/profile-framedphoto-shrink_400_400/B56Zaf2fDhHgAg-/0/1746438582770?e=1747638000&v=beta&t=5lv_Yt0PszvSmhSXgG3gqLi41-RJJdDKgDehtNXJc9Y',
  },
];

const Team = () => {
  return (
    <section className="our-team">
      <h1>Meet Our Team</h1>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} />
            <h2>{member.name}</h2>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
