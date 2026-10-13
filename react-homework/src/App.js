import './App.css';
import Welcome from './components/Welcome';
import UserCard from './components/UserCard';
import Counter from './components/Counter';
import Clock from './components/Clock';

function App() {
  return (
    <div className="App">
      <h1>Домашнє завдання: React (CRA)</h1>

      <div className="grid">
        {/* Функціональні компоненти */}
        <Welcome name="Студенте" group="React Basics" />
        <UserCard
          name="Вероніка"
          profession="FullStack-розробниця"
          skills={['HTML', 'CSS', 'JavaScript', 'React']}
        />

        {/* Класові компоненти */}
        <Counter initialValue={0} />
        <Clock />
      </div>
    </div>
  );
}

export default App;
