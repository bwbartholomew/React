// Функціональний компонент без стану: отримує дані через props
function Welcome({ name, group }) {
  return (
    <section className="card">
      <h2>Функціональний компонент: Welcome</h2>
      <p>
        Привіт, <strong>{name}</strong>! Ласкаво просимо до групи {group}.
      </p>
    </section>
  );
}

export default Welcome;
