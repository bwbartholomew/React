import { Component } from 'react';

// Класовий компонент з методами життєвого циклу
// componentDidMount — запускаємо таймер, componentWillUnmount — зупиняємо
class Clock extends Component {
  state = { time: new Date() };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <section className="card">
        <h2>Класовий компонент: Clock</h2>
        <p className="big-number">{this.state.time.toLocaleTimeString('uk-UA')}</p>
      </section>
    );
  }
}

export default Clock;
