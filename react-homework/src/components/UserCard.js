import { useState } from 'react';

// Функціональний компонент зі станом (хук useState)
function UserCard({ name, profession, skills }) {
  const [showSkills, setShowSkills] = useState(false);

  return (
    <section className="card">
      <h2>Функціональний компонент: UserCard</h2>
      <p>
        <strong>{name}</strong> — {profession}
      </p>

      <button onClick={() => setShowSkills(!showSkills)}>
        {showSkills ? 'Сховати навички' : 'Показати навички'}
      </button>

      {showSkills && (
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default UserCard;
